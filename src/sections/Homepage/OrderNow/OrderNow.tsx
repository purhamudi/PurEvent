import { PopoverTrigger } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { CalendarIcon, Clock, Truck, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";
import { Calendar } from "../../../components/ui/calendar";
import { Dialog, DialogTrigger } from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Popover, PopoverContent } from "../../../components/ui/popover";
import { useOrderNow } from "./OrderNowContext/OrderNowContext";
import OrderNowModal from "./OrderNowModal/OrderNowModal";


const generateTimeSlots = () => {
  const times = [];
  let hour = 9;
  let minute = 0;

  while (hour < 20 || (hour === 20 && minute === 0)) {
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");
    times.push(`${formattedHour}:${formattedMinute}`);

    // Increment by 30 minutes
    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }

  return times;
};

const timeSlots = generateTimeSlots();


const MIN_NUM_OF_INVITEES:number = 15;
type OrderNowFormData = {
  postalCode: string;
  deliveryTime: string;
  peopleCount: string;
  deliveryDate: Date;
};

export default function OrderNow() {
  const { orderNowDetails, setOrderNowDetails } = useOrderNow(); 
  const [date, setDate] = useState<Date | undefined>();
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset, setValue, formState } = useForm<OrderNowFormData>();
  const { dirtyFields } = formState;

  // ✅ Sync external form with context (reset form when context resets)
  useEffect(() => {
    reset({
      postalCode: orderNowDetails?.postalCode || "",
      deliveryTime: orderNowDetails?.deliveryTime || "",
      peopleCount: orderNowDetails?.peopleCount || "",
    });
    setDate(
      orderNowDetails?.deliveryDate
        ? new Date(orderNowDetails.deliveryDate)
        : undefined
    );
  }, [orderNowDetails, reset]);

  const handleFormSubmit = (data: { postalCode: string; deliveryTime: string; peopleCount: string }) => {
    setOrderNowDetails((prevDetails) => ({
      ...prevDetails,
      ...data,
      deliveryDate: date || undefined,
    }));
  
    setModalOpen(true);
  };

  function validateNumOfAttendees(e: React.FocusEvent<HTMLInputElement>) {
    const enteredValue = Number(e.target.value);

    if (dirtyFields.peopleCount && enteredValue < MIN_NUM_OF_INVITEES) {
      setValue("peopleCount", MIN_NUM_OF_INVITEES.toString()); // Update form state
      e.target.value = MIN_NUM_OF_INVITEES.toString(); // Update UI
    }
  }

  return (
    <div className="w-full flex justify-center md:p-6">
      <div className="w-full sm:w-10/12 lg:w-11/12 bg-white shadow-lg rounded-xl p-4 sm:p-6 lg:p-4 z-10">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col lg:flex-row items-center gap-4"
        >
          {/* Postal Code */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-full bg-gray-50">
            <Truck className="h-6 w-6 text-gray-600 absolute" />
            <Input
              {...register("postalCode")}
              placeholder="Postleitzahl"
              className="border-none bg-transparent focus:ring-0 text-gray-700 pr-2 pl-6 w-full"
            />
          </div>

          {/* Delivery Date */}
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <div
                className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-full bg-gray-50 cursor-pointer whitespace-nowrap"
                onClick={() => setIsOpen(true)}
              >
                <CalendarIcon className="h-6 w-6 text-gray-600 absolute" />
                <span className="text-start truncate h-10 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm border-none bg-transparent focus:ring-0 text-gray-700 pr-2 pl-6 w-full font-normal">
                  {date ? format(date, "dd.MM.yyyy") : "Lieferdatum wählen"}
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="bg-white shadow-lg rounded-lg p-2 text-black"
            >
              <Calendar
                mode="single"
                locale={de}
                selected={date}
                onSelect={(selectedDate) => {
                  setDate(selectedDate);
                  setIsOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>

          {/* Delivery Time */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-full bg-gray-50">
            <div className="w-full py-2 flex">
            <Clock className="h-6 w-6 text-gray-600 absolute" />
            <select
              {...register("deliveryTime")}
              className="border-none bg-transparent focus:ring-0 text-gray-700 px-2 w-full cursor-pointer text-gray-700 pl-6 pr-2 w-full"
            >
              <option value="" disabled selected >
                Lieferzeit wählen
              </option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            </div>
          </div>

          {/* Number of People */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-full bg-gray-50">
            <Users className="h-6 w-6 text-gray-600 absolute" />
            <Input
              {...register("peopleCount")}
              placeholder="Personenanzahl"
              type="number"
              min={MIN_NUM_OF_INVITEES}
              className="border-none bg-transparent focus:ring-0 text-gray-700 pr-2 pl-6 w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onBlur={validateNumOfAttendees}
              onWheel={(e) => e.currentTarget.blur()}
            />
          </div>

          {/* Submit Button (opens modal) */}
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3"
              >
                Übernehmen
              </Button>
            </DialogTrigger>

            {/* Order Details Modal */}
            <OrderNowModal setModalOpen={setModalOpen}/>
          </Dialog>
        </form>
      </div>
    </div>
  );
}
