import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

const testimonials = [
    {
        author: { name: "Ana López", handle: "@analopez", avatar: "https://i.pravatar.cc/150?img=1" },
        text: "Automatizamos tareas repetitivas y mejoramos nuestra respuesta al cliente en días.",
    },
    {
        author: { name: "Carlos M.", handle: "@carlosm", avatar: "https://i.pravatar.cc/150?img=2" },
        text: "La inversión se pagó sola el primer mes gracias al ahorro operativo.",
    },
    {
        author: { name: "Sara K.", handle: "@saraK", avatar: "https://i.pravatar.cc/150?img=3" },
        text: "Reducimos tiempos de onboarding y aumentamos la tasa de cierre comercial.",
    },
    {
        author: { name: "David R.", handle: "@davidr", avatar: "https://i.pravatar.cc/150?img=4" },
        text: "La automatización nos devolvió cientos de horas al mes.",
    },
    {
        author: { name: "Mia Chen", handle: "@miachen", avatar: "https://i.pravatar.cc/150?img=5" },
        text: "No sabía de tecnología, pero el equipo nos acompañó de principio a fin.",
    },
    {
        author: { name: "Lucas B.", handle: "@lucasb", avatar: "https://i.pravatar.cc/150?img=6" },
        text: "Nuestra productividad subió de forma visible sin contratar más personal.",
    },
]

export default function Testimonials() {
    return (
        <TestimonialsSection
            title="Empresas que ya dieron el salto"
            description="Testimonios de clientes que hoy venden más y operan mejor."
            testimonials={testimonials}
        />
    )
}
