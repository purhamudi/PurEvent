import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../../../../components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";
import { useOrderNow } from "../OrderNowContext/OrderNowContext";

interface FormData {
  postalCode:string
  deliveryDate:Date | undefined
  deliveryTime:string
  peopleCount:string
  budgetPerPerson:string
  eventType:string
  moreDetails:string
}

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


export default function OrderNowModal() {
  const { orderNowDetails, setOrderNowDetails } = useOrderNow();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Prefill form with existing context data
  const [formData, setFormData] = useState<FormData>({
    postalCode: "",
    deliveryDate: undefined,
    deliveryTime: "",
    peopleCount: "",
    budgetPerPerson: "",
    eventType: "",
    moreDetails: "",
  });

  // ✅ Prefill modal with existing order details
  useEffect(() => {
    setFormData({
      postalCode: orderNowDetails?.postalCode || "",
      deliveryDate: orderNowDetails?.deliveryDate || undefined,
      deliveryTime: orderNowDetails?.deliveryTime || "",
      peopleCount: orderNowDetails?.peopleCount || "",
      budgetPerPerson: orderNowDetails?.budgetPerPerson || "",
      eventType: orderNowDetails?.eventType || "",
      moreDetails: orderNowDetails?.moreDetails || "",
    });
  }, [orderNowDetails]);

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle event type selection
  const handleEventTypeChange = (value: string) => {
    setFormData({ ...formData, eventType: value });
  };

  // ✅ Handle form submission
  const handleSubmit = async () => {
    if (
      !formData.postalCode ||
      !formData.deliveryDate ||
      !formData.deliveryTime ||
      !formData.peopleCount
    ) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setOrderNowDetails(formData);

      toast.success("Ihre Bestellung wurde erfolgreich aktualisiert!", {
        description: "Alle Änderungen wurden gespeichert.",
      });

      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <DialogContent className="p-6 max-w-md bg-white shadow-lg border border-gray-300">
      {/* Fixed Header */}
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold text-gray-800">
          Bestellformular bearbeiten
        </DialogTitle>
        <DialogDescription className="text-gray-600">
          Ändern Sie die Details Ihrer Bestellung und fügen Sie zusätzliche
          Informationen hinzu.
        </DialogDescription>
      </DialogHeader>

      {/* ✅ Scrollable Form Area */}
      <div className="mt-4 space-y-3 text-gray-700 max-h-[60vh] overflow-y-auto px-3">
        {/* Postal Code (Required) */}
        <div>
          <label className="font-semibold">
            Postleitzahl <span className="text-red-500">*</span>
          </label>
          <Input
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Delivery Date (Required) */}
        <div>
          <label className="font-semibold">
            Lieferfenster <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-full bg-gray-50">
            <div className="w-full py-2 flex">
              {/* <Clock className="h-6 w-6 text-gray-600 absolute" /> */}
              <select
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="border-none bg-transparent focus:ring-0 text-gray-700 px-2 w-full cursor-pointer text-gray-700 px-2 w-full"
              >
                <option value="" disabled>
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
        </div>

        {/* Number of People (Required) */}
        <div>
          <label className="font-semibold">Personenanzahl <span className="text-red-500">*</span></label>
          <Input
            type="number"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            onWheel={(e) => e.currentTarget.blur()}
          />
        </div>

        {/* Budget Per Person */}
        <div>
          <label className="font-semibold">Budget pro Person (€)</label>
          <Input
            type="number"
            name="budgetPerPerson"
            value={formData.budgetPerPerson}
            onChange={handleChange}
            disabled={isSubmitting}
            onWheel={(e) => e.currentTarget.blur()}
          />
        </div>

        {/* Event Type Selection */}
        <div>
          <label className="font-semibold">Art der Veranstaltung</label>
          <Select
            value={formData.eventType}
            onValueChange={handleEventTypeChange}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Wählen Sie einen Veranstaltungstyp" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Hochzeit</SelectItem>
              <SelectItem value="company_meeting">Firmenmeeting</SelectItem>
              <SelectItem value="birthday">Geburtstag</SelectItem>
              <SelectItem value="private_party">Private Party</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* More Details (Textarea) */}
        <div>
          <label className="font-semibold">Weitere Details</label>
          <Textarea
            name="moreDetails"
            value={formData.moreDetails}
            onChange={handleChange}
            placeholder="Geben Sie weitere Informationen ein..."
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Fixed Footer */}
      <DialogFooter className="flex justify-between mt-6">
        <DialogClose asChild>
          <Button
            variant="outline"
            disabled={isSubmitting}
            className="text-black"
          >
            Abbrechen
          </Button>
        </DialogClose>
        <DialogClose asChild className="text-black bg-red">
          <Button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white flex items-center"
            disabled={isSubmitting}
          >
            {isSubmitting && <span className="loader mr-2"></span>}{" "}
            {/* ✅ Show loader */}
            {isSubmitting ? "Speichern..." : "Speichern"}
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
