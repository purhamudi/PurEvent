import { Slash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // ✅ Fixed import
import logo from "../../assets/logos/logo.png";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Button } from "../ui/button";
import "./Navbar.scss";

const navbarLinks = [
  {
    title: "About Us",
    href: "/v1/uber-uns",
    description:
      "Learn more about our mission, values, and commitment to excellence.",
  },
  {
    title: "Gallery",
    href: "/v1/gallery",
    description:
      "Explore a curated collection of our finest moments and events.",
  },
  // {
  //   title: "Contact Us",
  //   href: "/v1/kontakt",
  //   description:
  //     "Get in touch with us for inquiries, collaborations, or support.",
  // },
];

interface NavbarProps {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Navbar: React.FC<NavbarProps> = ({setIsDrawerOpen}) => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const { pathname } = useLocation(); // ✅ Fixed useLocation usage

  // useEffect(() => {
  //   setIsMobileMenuOpen(false);
  // }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar text-[var(--foreground)] transition-colors duration-150 ease-linear ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <NavLink to="/v1" className="logo-link">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </NavLink>

      {/* <div
        className={`justify-center navbar-links w-[380px] ${isMobileMenuOpen ? "active" : ""}`}
      > */}

      <Breadcrumb>
        <BreadcrumbList className="flex-nowrap md:gap-4 gap-0.5">
        {navbarLinks.map((item, idx)=>{
          
          return <React.Fragment key={idx}>
                  <BreadcrumbItem >
                    <BreadcrumbLink asChild>
                      <Link to={item.href} className="sm:text-sm text-md">{item.title}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {idx !== navbarLinks.length-1 &&
                  <BreadcrumbSeparator>
                    <Slash />
                  </BreadcrumbSeparator>}
                </ React.Fragment>

        })}
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <Button
                variant={"ghost"}
                className="sm:text-sm text-md p-0"
                onClick={() => setIsDrawerOpen(true)}
              >
              Kontakt
          </Button>
        </BreadcrumbList>
      </Breadcrumb>

    </nav>
  );
};

export default Navbar;
