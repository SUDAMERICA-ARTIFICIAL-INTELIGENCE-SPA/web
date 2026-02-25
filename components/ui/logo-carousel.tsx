import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type LogoItem = string | { src: string; alt?: string };

type AnimatedCarouselProps = {
  title?: string;
  logoCount?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  logos?: LogoItem[] | null;
  containerClassName?: string;
  titleClassName?: string;
  carouselClassName?: string;
  logoClassName?: string;
  itemsPerViewMobile?: number;
  itemsPerViewDesktop?: number;
  spacing?: string;
  padding?: string;
  logoContainerWidth?: string;
  logoContainerHeight?: string;
  logoImageWidth?: string;
  logoImageHeight?: string;
  logoMaxWidth?: string;
  logoMaxHeight?: string;
};

export const AnimatedCarousel = ({
  title = "Empresas que confían en nosotros",
  logoCount = 15,
  autoPlay = true,
  autoPlayInterval = 1000,
  logos = null,
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 4,
  itemsPerViewDesktop = 6,
  spacing = "gap-10",
  padding = "py-20 lg:py-40",
  logoContainerWidth = "w-48",
  logoContainerHeight = "h-24",
  logoImageWidth = "w-full",
  logoImageHeight = "h-full",
  logoMaxWidth = "",
  logoMaxHeight = "",
}: AnimatedCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const logoItems: LogoItem[] =
    logos ||
    Array.from(
      { length: logoCount },
      (_, i) =>
        `https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0100x100?text=Logo+${i + 1}`,
    );

  const logoImageSizeClasses =
    `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  const getSrc = (logo: LogoItem) =>
    typeof logo === "string" ? logo : logo.src;
  const getAlt = (logo: LogoItem, index: number) =>
    typeof logo === "string"
      ? `Logo ${index + 1}`
      : (logo.alt ?? `Logo ${index + 1}`);

  return (
    <div className={`w-full ${padding} ${containerClassName}`}>
      <div className="container mx-auto">
        <div>
          <div>
            <Carousel setApi={setApi} className={`w-full ${carouselClassName}`}>
              <CarouselContent>
                {logoItems.map((logo, index) => (
                  <CarouselItem
                    className={`basis-1/${itemsPerViewMobile} lg:basis-1/${itemsPerViewDesktop}`}
                    key={index}
                  >
                    <div
                      className={`flex rounded-md ${logoContainerWidth} ${logoContainerHeight} items-center justify-center p-4 hover:bg-accent transition-colors ${logoClassName}`}
                    >
                      <img
                        src={getSrc(logo)}
                        alt={getAlt(logo, index)}
                        className={`${logoImageSizeClasses} object-contain filter brightness-0 dark:brightness-0 dark:invert`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
