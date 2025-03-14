import { Button } from "../components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "../components/ui/drawer";
// import { Input } from "../components/ui/input";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
// } from "../components/ui/sheet";
import { TypographyA, TypographyH3, TypographyP } from "../components/ui/typography";


type ContactUsDrawerProps = { isOpen: boolean; onClose: () => void };
export function ContactUsDrawer({ isOpen, onClose }: ContactUsDrawerProps) {

  return (
    <Drawer open={isOpen} onOpenChange={onClose} >
      <DrawerContent className="">
        <div className="mx-auto w-full">
          <DrawerHeader  className="max-w-sm mx-auto text-center align-center">
            <DrawerTitle>Easy, flexibel & individuell</DrawerTitle>
            <DrawerDescription>so geht Catering mit PurEvent!</DrawerDescription>
          </DrawerHeader>

            <div id="dialog-content" className="pt-4 px-6 pb-0 flex flex-col md:flex-row gap-6 overflow-scroll max-h-[480px]">
              <div className="flex-[2] space-y-2 text-lg">
                <TypographyH3 className="font-semibold text-xl">📩 So erreichst du uns</TypographyH3>
                
                <TypographyP>📧 E-Mail: <Button variant="link" ><TypographyA href="mailto:info@purevent.de" className="">info@purevent.de</TypographyA></Button></TypographyP>
                <TypographyP>📞 Telefon: <span className="">+49 (0) XXX-XXXXXXX</span></TypographyP>
                <TypographyP>📱 WhatsApp: <span className="">+49 (0) XXX-XXXXXXX</span></TypographyP>
                <TypographyP>📍 Standort: <span className="">Düsseldorf</span></TypographyP>
              </div>

              <div className="flex-[3] space-y-2 text-lg">
                <TypographyH3 className="font-semibold text-xl">Catering & Event-Anfrage</TypographyH3>
                <TypographyP>Deine Anfrage in 3 einfachen Schritten:</TypographyP>
                <TypographyP>1️⃣ <span className="font-semibold">Anfrage senden:</span> Nutze unser Formular, kontaktiere uns direkt per E-Mail oder WhatsApp.</TypographyP>
                <TypographyP>2️⃣ <span className="font-semibold">Beratung & Planung:</span> Wir klären gemeinsam alle Details und erstellen ein maßgeschneidertes Konzept.</TypographyP>
                <TypographyP>3️⃣ <span className="font-semibold">Lieferung & Umsetzung:</span> Wir denken mit, planen voraus und sorgen dafür, dass du dich auf das konzentrieren kannst, was wirklich zählt: dein Team und das himmlische Essen.</TypographyP>
                <TypographyP>👉 <span className="text-yellow-500">Lass uns dein Projekt besprechen.</span></TypographyP>
              </div>
            </div>

          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <Button variant="link" className="bg-black text-white py-2 px-4 mt-4 rounded">Kontakt Formular</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="text-black">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
