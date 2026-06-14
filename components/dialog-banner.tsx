"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { HeartPulse, Home, Mail, MessageCircle, PhoneCall, Settings2, X } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"
import { useEffect, useState } from "react"
import { Badge } from "./ui/badge"

export function DialogBanner() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Auto show after 5 seconds
        const timer = setTimeout(() => setOpen(true), 100000);


        return () => {
            clearTimeout(timer);
        };
    }, [open]);


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="h-[70vh] sm:max-w-md rounded-xl flex flex-col gap-0 p-0 bg-gray-900 [&>button:last-child]:hidden ">
                <DialogHeader className="bg-red-700 p-4 rounded-t-xl shrink-0">
                    <DialogTitle className="flex flex-col items-center">
                        <div className="flex justify-around items-center w-full relative">
                            <Badge variant="outline" className="pb-2 text-white">
                                100% Free — No Commitment
                            </Badge>
                            <X onClick={() => setOpen(false)} className="absolute right-0 -top-3 size-8 bg-white text-black rounded-full p-2 cursor-pointer" />
                        </div>
                        <div className="mx-auto max-w-3xl text-center font-medium text-2xl tracking-[-0.045em] text-white">
                            Book Your Free
                            Gym Tour Today
                        </div>
                        <p className="mt-3 text-pretty text-center text-base tracking-[-0.01em] text-white/70">
                            Visit Ginnastic Arena I-8 — See the facilities & get your free fitness assessment
                        </p>
                    </DialogTitle>
                </DialogHeader>

                <ScrollArea className="flex-1 w-full px-4">
                    <div className="flex flex-col gap-3 py-4">
                        <div className="flex items-start gap-3 text-white">
                            <Home className="shrink-0 bg-white rounded-full p-1 text-black size-6" />
                            <div className="flex flex-col">
                                <p>Free Gym Tour</p>
                                <p className="text-white/70">
                                    Full facility walkthrough with our team
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 text-white">
                            <HeartPulse className="shrink-0 bg-white rounded-full p-1 text-black size-6" />
                            <div className="flex flex-col">
                                <p>Free Fitness Assessment</p>
                                <p className="text-white/70">
                                    BMI, body analysis & goal planning
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 text-white">
                            <HeartPulse className="shrink-0 bg-white rounded-full p-1 text-black size-6" />
                            <div className="flex flex-col">
                                <p>Free Fitness Assessment</p>
                                <p className="text-white/70">
                                    BMI, body analysis & goal planning
                                </p>
                            </div>
                        </div>

                    </div>
                </ScrollArea>

                <div className="flex-shrink-0 p-4 pt-0">
                    <div className="flex items-center justify-center flex-wrap gap-3">
                        <Button
                            className="rounded-full text-black bg-white hover:bg-white"
                            size={"sm"}
                        >
                            <PhoneCall /> Phone
                        </Button>
                        <Button
                            className="rounded-full text-white"
                            size={"sm"}
                            variant="outline"
                        >
                            <MessageCircle /> Whatsapp
                        </Button>
                        <Button
                            className="rounded-full text-white"
                            variant="outline"
                            size={"sm"}
                        >
                            <Mail /> Email
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}