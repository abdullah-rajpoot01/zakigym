import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Home, Menu, MenuSquare, Phone, User2 } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"

export function MobileNavDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full" size="icon" variant="outline">
                    <Menu />
                </Button>
            </DialogTrigger>
            <DialogContent className="h-[85vh] sm:max-w-none lg:hidden rounded-xl flex flex-col gap-6">
                <DialogHeader className="">
                    <DialogTitle className="">
                        <div className="flex items-center gap-3">
                            <Avatar className="size-9">
                                <AvatarFallback className="bg-foreground text-background">
                                    Z
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-1 font-bold leading-none tracking-wider text-xl">
                                Zaki Gym
                            </div>
                        </div>
                    </DialogTitle>
                </DialogHeader>
                <ScrollArea  className="h-[80%] w-full no-scrollbar ">
                    <div className="flex-1 py-2">
                        <nav className="flex flex-col items-start w-full gap-3">
                            <Link
                                href="#"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <Home className="size-5" /> <span>Home</span>
                            </Link>
                            <Link
                                href="#"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <MenuSquare className="size-5" /> <span>Our Services</span>
                            </Link>
                            <Link
                                href="#"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <User2 className="size-5" /> <span>About Us</span>
                            </Link>
                            <Link
                                href="#"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <Phone className="size-5" /> <span>Contact Us</span>
                            </Link>

                        </nav>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Button
                            className="rounded-full"
                            variant="outline"
                        >
                            Contact Us
                        </Button>
                        <Button className="rounded-full">Call Now</Button>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}