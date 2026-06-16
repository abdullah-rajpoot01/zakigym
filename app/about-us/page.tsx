import AboutUs from '@/components/about-us'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zaki Gym Khanewal | Your Trusted Fitness Partner",
  description:
    "Learn more about Zaki Gym Khanewal, a leading unisex fitness center dedicated to helping men and women achieve their health and fitness goals. Discover our mission, experienced trainers, modern facilities, and commitment to creating a supportive fitness community.",
};

const Page = () => {
    return (
        <AboutUs />
    )
}

export default Page