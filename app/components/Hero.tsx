"use client";
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
export const Hero = ({ blok }: { blok: StoryblokBlok }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const images = (Array.isArray((blok as any).images) ? (blok as any).images : []) as Array<{ filename: string; alt?: string }>;

  useEffect(() => {
    if (!sliderRef.current || images.length <= 1) return;
    const container = sliderRef.current;
    const advance = () => {
      const slideWidth = container.clientWidth;
      const next = (index + 1) % images.length;
      setIndex(next);
      container.scrollTo({ left: next * slideWidth, behavior: "smooth" });
    };
    const id = setInterval(advance, 4000);
    return () => clearInterval(id);
  }, [index, images.length]);

  return (
    <section 
    {...storyblokEditable(blok as unknown as SbBlokData)} className= "bg-white w-full pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-left text-zinc-900 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">{blok.headline}</h1>
            {typeof blok.content === 'string' && (
              <p className="mt-4 text-left text-base sm:text-lg text-zinc-600">{blok.content}</p>
            )}
          </div>
          <div>
            {images.length > 0 && (
              <div ref={sliderRef} className="overflow-x-auto snap-x snap-mandatory no-scrollbar rounded-xl shadow-sm">
                <div className="flex">
                  {images.map((img, i) => (
                    <div key={i} className="snap-start min-w-full">
                      <Image
                        src={img.filename}
                        alt={img.alt || `slide-${i}`}
                        width={1600}
                        height={900}
                        className="w-full h-[36vh] md:h-[48vh] object-cover rounded-xl"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};