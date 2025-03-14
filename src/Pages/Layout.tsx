import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ScrollToTop from "../hooks/ScrollToTop";
import { ContactUsDrawer } from "./ContactUs";

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

// type CartDrawerProps = {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };
// export function CartDrawer({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) {
//   return (
//     <Sheet open={isOpen} onOpenChange={onClose}>
//       <SheetContent side="right">
//         {" "}
//         {/* Opens from the right */}
//         <SheetHeader>
//           <SheetTitle>Your Cart</SheetTitle>
//           <SheetDescription>
//             Review your items before checkout.
//           </SheetDescription>
//         </SheetHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             {/* <Label htmlFor="item" className="text-right">Item</Label> */}
//             Item
//             <Input id="item" value="Pizza" className="col-span-3" readOnly />
//           </div>
//         </div>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button onClick={onClose}>Close</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }
