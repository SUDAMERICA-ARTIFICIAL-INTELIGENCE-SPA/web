import { FAQ } from "@/components/ui/faq-tabs"

const categories = {
    general: "General",
    billing: "Billing",
    technical: "Technical",
}

const faqData = {
    general: [
        { question: "What is this product?", answer: "A comprehensive platform to streamline your workflow and maximize team productivity." },
        { question: "Who is it for?", answer: "Teams and individuals who want to be more productive and reduce tool fragmentation." },
        { question: "Is there a free trial?", answer: "Yes! Our Free plan lets you start immediately with no credit card required." },
    ],
    billing: [
        { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time with no penalty or hidden fees." },
        { question: "Do you offer refunds?", answer: "We offer a 30-day money-back guarantee on all paid plans." },
        { question: "Are there annual discounts?", answer: "Yes, annual billing saves you 20% compared to monthly billing." },
    ],
    technical: [
        { question: "What integrations are available?", answer: "We support 50+ integrations including Slack, GitHub, Jira, Notion, and more." },
        { question: "Is there an API?", answer: "Yes, we have a full REST and GraphQL API with comprehensive documentation." },
        { question: "How is my data secured?", answer: "We use AES-256 encryption at rest and TLS in transit. We are SOC 2 Type II compliant." },
    ],
}

export default function FAQSection() {
    return (
        <FAQ
            title="¿Tienes dudas?"
            subtitle="Preguntas frecuentes"
            categories={categories}
            faqData={faqData}
            className=""
        />
    )
}
