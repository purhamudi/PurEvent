import { PopoverTrigger } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, Truck, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import { Dialog, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Popover, PopoverContent } from "../../components/ui/popover";
import { useOrderNow } from "./OrderNowContext/OrderNowContext";
import OrderNowModal from "./OrderNowModal/OrderNowModal";

export default function OrderNow() {
  const { orderNowDetails, setOrderNowDetails } = useOrderNow(); // ✅ Ensure context is used
  const [date, setDate] = useState<Date | undefined>();
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm(); // ✅ Add reset function from react-hook-form

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

  // ✅ Handle form submission & open modal
  const handleFormSubmit = (data: any) => {
    setOrderNowDetails({
      ...data,
      deliveryDate: date ? format(date, "dd.MM.yyyy") : undefined,
    });
    setModalOpen(true);
  };

  return (
    <div className="w-full flex justify-center p-6">
      <div className="w-11/12 md:w-10/12 lg:w-11/12 bg-white shadow-lg rounded-xl p-6">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col lg:flex-row items-center gap-4"
        >
          {/* Postal Code */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-1 w-full bg-gray-50">
            <Truck className="h-6 w-6 text-gray-600" />
            <Input
              {...register("postalCode")}
              placeholder="Postleitzahl"
              className="border-none bg-transparent focus:ring-0 text-gray-700 px-2 w-full"
            />
          </div>

          {/* Delivery Date */}
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <div
                className="flex items-center border border-gray-300 rounded-lg px-4 py-1 w-full bg-gray-50 cursor-pointer whitespace-nowrap"
                onClick={() => setIsOpen(true)}
              >
                <CalendarIcon className="h-6 w-6 text-gray-600" />
                <span className="ml-2 truncate h-10 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm border-none bg-transparent focus:ring-0 text-gray-700 px-2 w-full font-normal">
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
                selected={date}
                onSelect={(selectedDate) => {
                  setDate(selectedDate);
                  setIsOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>

          {/* Delivery Time */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-1 w-full bg-gray-50">
            <Clock className="h-6 w-6 text-gray-600" />
            <Input
              {...register("deliveryTime")}
              type="time"
              placeholder="Lieferfenster"
              className="border-none bg-transparent focus:ring-0 text-gray-700 px-2 w-full [&::-webkit-calendar-picker-indicator]:hidden"
              min="09:00"
              max="20:00"
              step="900"
            />
          </div>

          {/* Number of People */}
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-1 w-full bg-gray-50">
            <Users className="h-6 w-6 text-gray-600" />
            <Input
              {...register("peopleCount")}
              placeholder="Personenanzahl"
              type="number"
              className="border-none bg-transparent focus:ring-0 text-gray-700 px-2 w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
            <OrderNowModal />
          </Dialog>
        </form>
      </div>
    </div>
  );
}
