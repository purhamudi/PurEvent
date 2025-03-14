import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
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
import { Input } from "../components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import { TypographyA, TypographyH3, TypographyP } from "../components/ui/typography";
import ScrollToTop from "../hooks/ScrollToTop";

export default function Layout() {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // function handleContactUsClick(){

  // }
  return (
    <>
      <div className="app_wrapper text-[var(--foreground)]">
        <div id="header-navbar" className="header_container sticky top-0 z-10">
          <Navbar setIsDrawerOpen={setIsDrawerOpen}></Navbar>
          <ContactUsDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        </div>

        <div className="main_app_wrapper">
          <div className="body-content grow">
            <Outlet />
          </div>
          <div className="footer_container bg-[var(--card)] border-t border-[var(--border)] z-10">
            <Footer />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

type ContactUsDrawerProps = { isOpen: boolean; onClose: () => void };
export function ContactUsDrawer({ isOpen, onClose }: ContactUsDrawerProps) {
  // const [goal, setGoal] = React.useState(350);

  // function onClick(adjustment: number) {
  //   setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  // }

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

// type CartDrawerProps = {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };
export function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right">
        {" "}
        {/* Opens from the right */}
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review your items before checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="item" className="text-right">Item</Label> */}
            Item
            <Input id="item" value="Pizza" className="col-span-3" readOnly />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={onClose}>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
