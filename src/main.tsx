import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import App from "./App.tsx";
import "./index.css";
import { OrderNowProvider } from "./sections/Homepage/OrderNow/OrderNowContext/OrderNowContext.tsx";
// import { BrowserRouter } from 'react-router-dom'
// import AppRoutes from './Routes.tsx'

createRoot(document.getElementById("root")!).render(
  <OrderNowProvider>
    <Toaster position="top-right" richColors closeButton /> <App />
  </OrderNowProvider>
);
