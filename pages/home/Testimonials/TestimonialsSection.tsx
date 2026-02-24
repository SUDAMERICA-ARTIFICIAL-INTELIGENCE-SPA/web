import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

const testimonials = [
    {
        author: { name: "Ana López", handle: "@analopez", avatar: "https://i.pravatar.cc/150?img=1" },
        text: "This product completely transformed how our team works. Highly recommended.",
    },
    {
        author: { name: "Carlos M.", handle: "@carlosm", avatar: "https://i.pravatar.cc/150?img=2" },
        text: "Best investment we've made. The UX is flawless and the support is incredible.",
    },
    {
        author: { name: "Sara K.", handle: "@saraK", avatar: "https://i.pravatar.cc/150?img=3" },
        text: "We cut our onboarding time in half. Our clients are impressed every single time.",
    },
    {
        author: { name: "David R.", handle: "@davidr", avatar: "https://i.pravatar.cc/150?img=4" },
        text: "Incredible product. The automation alone has saved us hundreds of hours a month.",
    },
    {
        author: { name: "Mia Chen", handle: "@miachen", avatar: "https://i.pravatar.cc/150?img=5" },
        text: "I was skeptical at first but now I can't imagine working without it. Simply brilliant.",
    },
    {
        author: { name: "Lucas B.", handle: "@lucasb", avatar: "https://i.pravatar.cc/150?img=6" },
        text: "Game-changing. Our team's productivity increased by 40% in the first month.",
    },
]

export default function Testimonials() {
    return (
        <TestimonialsSection
            title="Trusted by teams worldwide"
            description="See what our customers say about their experience."
            testimonials={testimonials}
        />
    )
}
