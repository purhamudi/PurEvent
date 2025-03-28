import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector('.app_wrapper')?.scrollTo(0, 0);
}, [pathname]);

  return null;
}