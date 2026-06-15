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
import { DollarSign, HeartPulse, Home, Menu, MenuSquare, Phone, User2, User2Icon, UserCircle } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function MobileNavDialog() {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="rounded-full" size="icon" variant="outline">
                    <Menu />
                </Button>
            </DialogTrigger>
            <DialogContent className="h-[80vh] sm:max-w-none lg:hidden rounded-xl flex flex-col gap-0 p-0">
                <DialogHeader className="p-6 pb-0 shrink-0">
                    <DialogTitle className="">
                        <Link href={"/"} className="flex items-center gap-3">
                            <Avatar className="size-9">
                                <AvatarFallback className="bg-foreground text-background">
                                    Z
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-1 font-bold leading-none tracking-wider text-xl">
                                Zaki Gym
                            </div>
                        </Link>
                    </DialogTitle>
                </DialogHeader>

                <ScrollArea className="flex-1 h-full w-full px-6 overflow-hidden">
                    <div className="pt-4 pb-2 flex flex-col gap-4">
                        <nav className="flex flex-col items-start w-full gap-3">
                            <Link onClick={() => setOpen(false)}
                                href="/"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <Home className="size-5" /> <span>Home</span>
                            </Link>
                            <Link onClick={() => setOpen(false)}
                                href="/#why-us"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <MenuSquare className="size-5" /> <span>Why Us</span>
                            </Link>
                            <Link onClick={() => setOpen(false)}
                                href="/#our-features"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <HeartPulse className="size-5" /> <span>Our Features</span>
                            </Link>
                            <Link onClick={() => setOpen(false)}
                                href="/#pricing"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <DollarSign className="size-5" /> <span>Pricing</span>
                            </Link>
                            <Link onClick={() => setOpen(false)}
                                href="/#testimonials"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <User2Icon className="size-5" /> <span>Testimonials</span>
                            </Link>
                            <Link onClick={() => setOpen(false)}
                                href="/about-us"
                                className="w-full flex items-center rounded-xl gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <UserCircle className="size-5" /> <span>About Us</span>
                            </Link>
                        </nav>
                        <div className="shrink-0 p-6 pt-0">
                            <div className="flex flex-col gap-3">
                                <Button onClick={() => {
                                    router.push("/contact-us");
                                    setOpen(false);
                                }}
                                    className="rounded-full w-full"
                                    variant="outline"
                                >
                                    Contact Us
                                </Button>
                                <a onClick={() => setOpen(false)} href="tel:+923460881219">
                                    <Button className="rounded-full w-full">Call Now</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollArea>


            </DialogContent>
        </Dialog>
    )
}