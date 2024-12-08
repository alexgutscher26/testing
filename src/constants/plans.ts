type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
    priceId: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Free",
        desc: "Get started with essential event monitoring tools",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Get Started",
        features: [
            "Real-time event tracking",
            "Basic analytics dashboard",
            "Community support",
            "1 project limit",
            "Email notifications",
        ],
        link: "https://stripe.com/free-plan-link",
        priceId: "price_free_plan_id"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Unlock advanced features for comprehensive event management",
        monthlyPrice: 25,
        yearlyPrice: 250,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Advanced event analytics",
            "Custom dashboard creation",
            "Priority email support",
            "10 project limit",
            "Instant notifications",
            "Collaboration tools",
            "Integration with third-party services",
        ],
        link: "https://stripe.com/pro-plan-link",
        priceId: "price_pro_plan_id"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Tailored solutions for large organizations with dedicated support",
        monthlyPrice: 100,
        yearlyPrice: 1200,
        badge: "Best Value",
        buttonText: "Contact Sales",
        features: [
            "All Pro features",
            "Custom integrations",
            "Dedicated account manager",
            "Unlimited projects",
            "Advanced security features",
            "Custom SLAs and support",
        ],
        link: "https://stripe.com/enterprise-plan-link",
        priceId: "price_enterprise_plan_id"
    },
];
