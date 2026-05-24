"use client"
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
<nav className="sticky top-3 z-50 mx-auto h-16 w-full max-w-5xl rounded-full border border-border/85 bg-background/20 shadow-xs/3 backdrop-blur-md">      <div className="mx-auto flex h-full items-center justify-between px-4  ">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            className="hidden rounded-full sm:inline-flex"
            variant="outline"
          >
            Contact Us
          </Button>
          <Button className="rounded-full">Call Now</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
