/* eslint-disable react/jsx-no-undef */

import Connect from "@/components/marketing/connect";
import Perks from "@/components/marketing/perks";
import Reviews from "@/components/marketing/reviews";
import { Spotlight } from "@/components/dashboardui/spotlight";
import { Container } from "lucide-react";
import { fill } from "tailwindcss/defaultTheme";
import Background from "@/components/global/background";
import Hero from "@/components/marketing/hero";
import Features from "@/components/marketing/features";
import Pricing from "@/components/marketing/pricing";
import CTA from "@/components/marketing/cta";
import Companies from "@/components/marketing/companies";
import Wrapper from "@/components/global/wrapper";

const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                    <Hero />
                </Container>
                <Container className="py-8 lg:py-20">
                    <Companies />
                </Container>
                <Connect />
                <Features />
                <Perks />
                <Pricing />
                <Reviews />
                <CTA />
            </Wrapper>
        </Background>
    )
};

export default HomePage
