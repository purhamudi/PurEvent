import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // ✅ Fixed import
import logo from "../../assets/logos/logo.png";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import "./Navbar.scss";

type NavbarProps = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ setIsDrawerOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation(); // ✅ Fixed useLocation usage

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

      <div
        className={`navbar-links w-[380px] ${isMobileMenuOpen ? "active" : ""}`}
      >
        <NavigationMenu className="w-full justify-start max-w-full grow justify-around">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[var(--foreground)]">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border border-[var(--border)] shadow-lg hover:text-[var(--accent-foreground)]">
                <ul className="bg-gray-100 grid w-[320px] gap-4 p-4 md:w-[fit]">
                  {menuItems.map((item, index) => (
                    <ListItem key={index} href={item.href} title={item.title}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[var(--foreground)]">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-blue-800 border border-[var(--border)] shadow-lg hover:text-[var(--accent-foreground)]">
                <ul className="bg-gray-100 grid w-[320px] gap-4 p-4 md:w-[fit]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                  <Button variant="ghost" onClick={() => setIsDrawerOpen(true)}>
                    Contact Us
                  </Button>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/docs"
                className="text-sm leading-tight text-[var(--foreground)] hover:text-brand-500"
              >
                More
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <button
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="hamburger-line bg-[var(--foreground)]"></div>
        <div className="hamburger-line bg-[var(--foreground)]"></div>
        <div className="hamburger-line bg-[var(--foreground)]"></div>
      </button>
    </nav>
  );
};

export default Navbar;

const menuItems = [
  {
    href: "/docs",
    title: "Catering",
    description: "Premium catering solutions tailored for corporate events.",
  },
  {
    href: "/docs/installation",
    title: "Cocktails",
    description: "Interactive cocktail workshops designed for team-building.",
  },
  {
    href: "/docs/primitives/typography",
    title: "More",
    description: "Explore our full range of bespoke hospitality services.",
  },
];

const components = [
  {
    title: "About Us",
    href: "/docs/primitives/alert-dialog",
    description:
      "Learn more about our mission, values, and commitment to excellence.",
  },
  {
    title: "Gallery",
    href: "/docs/primitives/hover-card",
    description:
      "Explore a curated collection of our finest moments and events.",
  },
  {
    title: "Contact Us",
    href: "/docs/primitives/progress",
    description:
      "Get in touch with us for inquiries, collaborations, or support.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";
