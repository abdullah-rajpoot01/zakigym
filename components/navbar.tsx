"use client"
import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { Avatar, AvatarFallback, } from "./ui/avatar";
import { MobileNavDialog } from "./mobile-nav";

const Navbar = () => {

  return (
      <nav className="fixed top-3 z-50 left-1/2 -translate-x-1/2 h-16 w-[95%] rounded-full border border-border/85 bg-background shadow-xs/3">      
     <div className="flex h-full items-center justify-between px-4  ">
      <div className="flex items-center gap-3">
        <Avatar className="size-9">
          {/* <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" /> */}
          <AvatarFallback className="bg-foreground text-background">Z</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-1 font-bold leading-none tracking-wider text-xl">
          Zaki Gym
        </div>
      </div>

      {/* Desktop Menu */}
      <NavMenu className="hidden md:block" />

      <div className="flex items-center gap-3">
        <Button
          className="hidden rounded-full sm:inline-flex"
          variant="outline"
        >
          Contact Us
        </Button>
        <Button className="hidden rounded-full sm:inline-flex ">Call Now</Button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileNavDialog />
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
