import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { CalendarIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../../../../components/ui/button";
import { Calendar } from "../../../../components/ui/calendar";
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
  postalCode: string;
  deliveryDate: Date | undefined;
  deliveryTime: string;
  peopleCount: string;
  budgetPerPerson: string;
  eventType: string;
  moreDetails: string;
  contactDetails: string;
  phoneNumber: string;
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
interface initialFormValues {
  postalCode: string,
  deliveryDate: Date | undefined,
  deliveryTime: string,
  peopleCount: string,
  budgetPerPerson: string,
  eventType: string,
  moreDetails: string,
  contactDetails: string,
  phoneNumber: string
}
 const initialFormValues:initialFormValues ={
  postalCode: "",
 deliveryDate: undefined,
 deliveryTime: "",
 peopleCount: "",
 budgetPerPerson: "",
 eventType: "",
 moreDetails: "",
 contactDetails: "",
 phoneNumber: ""
}
interface OrderNowModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function OrderNowModal({setModalOpen}:OrderNowModalProps) {
  const { orderNowDetails, setOrderNowDetails } = useOrderNow();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  // ✅ Prefill form with existing context data
  const [formData, setFormData] = useState<FormData>(initialFormValues);

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
    contactDetails: "",
    phoneNumber: "",
  });
  // setCurrentStep(1); // Reset wizard to first step when modal opens
}, [orderNowDetails]);

    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 2.1; 
      }
    }, [currentStep]);

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

  const vidAnimationEnded = () =>{
    setCurrentStep(1);
    setModalOpen(false);
  }
  // ✅ Handle form submission
  const handleSubmit = async () => {
    console.log({formData})
    if (
      !formData.postalCode ||
      !formData.deliveryDate ||
      !formData.deliveryTime ||
      !formData.peopleCount ||
      !formData.contactDetails ||
      !formData.phoneNumber
    ) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    setIsSubmitting(true);
    setOrderNowDetails(formData);

    setTimeout(() => {
      setOrderNowDetails(initialFormValues)     
      setCurrentStep(3);
      setTimeout(()=>{
        // setCurrentStep(1);
      },5000)


      toast.success("Ihre Bestellung wurde erfolgreich aktualisiert!", {
        description: "Alle Änderungen wurden gespeichert.",
      });

      setIsSubmitting(false);
    }, 2000);
  };

  const handleNext = () => {
    setCurrentStep(currentStep=>currentStep+1)
  };

  const handleBack = () => {
    setCurrentStep(currentStep=>currentStep-1)
  };
  
  return (
    <DialogContent className="p-6 max-w-full w-11/12 bg-white shadow-lg border border-gray-300 h-5/6 rounded-lg">
      {/* Fixed Header */}
      <OrderNowDialogHeader currentStep={currentStep}/>

      {/* ✅ Scrollable Form Area */}
      <div className="mt-4 space-y-3 text-gray-700 max-h-[60vh] overflow-y-auto px-3">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <div className="order-now-form-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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

              {/* Delivery Date */}
              <div>
              <label className="font-semibold">
                Lieferdatum wählen <span className="text-red-500">*</span>
                </label>
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <div
                      className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-full bg-gray-50 cursor-pointer whitespace-nowrap"
                      onClick={() => setIsOpen(true)}
                    >
                      <CalendarIcon className="h-6 w-6 text-gray-600" />
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
                        setOrderNowDetails((prevState)=>({
                          ...prevState,
                          deliveryDate: selectedDate || undefined
                        }))
                        setIsOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
                        
              {/* Delivery Date (Required) */}
              <div>
                <label className="font-semibold">
                  Lieferfenster <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-full bg-gray-50">
                  <div className="w-full py-2 flex">
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
                <label className="font-semibold">
                  Personenanzahl <span className="text-red-500">*</span>
                </label>
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
            </div>
          )}

          {currentStep === 2 && (
            <>
              {/* Contact Details */}
              <div>
                <label className="font-semibold">Kontaktinformationen</label>
                <Textarea
                  name="contactDetails"
                  value={formData.contactDetails}
                  onChange={handleChange}
                  placeholder="Geben Sie Ihre Kontaktinformationen ein..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="font-semibold">Telefonnummer</label>
                <Input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
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
            </>
          )}
          {currentStep === 3 && (
            <div className="w-full h-60 relative rounded-lg">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1200"
                onEnded={vidAnimationEnded}
              >
                <source src="src/assets/images/background/dump/videos/handshake.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </motion.div>
      </div>

      {/* Fixed Footer */}
      <DialogFooter className="flex justify-between mt-6">
        {currentStep !==3 && 
        <DialogClose asChild>
          <Button
            variant="outline"
            disabled={isSubmitting}
            className="text-black"
          >
            Abbrechen
          </Button>
        </DialogClose>}

        {currentStep === 1 && (
          <Button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white flex items-center"
            disabled={isSubmitting}
          >
            Weiter
          </Button>
        )}

        {currentStep === 2 && (
          <>
            <Button
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 text-black flex items-center"
              disabled={isSubmitting}
            >
              Zurück
            </Button>
            {/* <DialogClose asChild className="text-black bg-red"> */}
              <Button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loader mr-2"></span> Speichern...
                  </>
                ) : (
                  "Speichern"
                )}
              </Button>
            {/* </DialogClose> */}
          </>
        )}
      </DialogFooter>
    </DialogContent>
  );
}


const OrderNowDialogHeader =({currentStep}:{currentStep:number})=>{
  const headerStateEdit = <><DialogTitle className="text-2xl font-semibold text-gray-800">Bestellformular bearbeiten</DialogTitle>
    <DialogDescription className="text-gray-600">
        <div>Ändern Sie die Details Ihrer Bestellung und fügen Sie zusätzliche</div>
        <div>Informationen hinzu.</div>
    </DialogDescription></>

const headerStateSuccessfulSubmit =  <>
  <DialogTitle className="text-2xl font-semibold text-gray-800">Danke!</DialogTitle>
    <DialogDescription className="text-gray-600">
      <div>We'll get back to you with tailor made offer</div>
    </DialogDescription>
  </>
  return<DialogHeader>
  {currentStep === 3? headerStateSuccessfulSubmit : headerStateEdit}
</DialogHeader>
}