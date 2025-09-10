"use client";
import Image from "next/image";
import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
export const Hero = ({ blok }: { blok: StoryblokBlok }) => {
  return (
    <section 
    {...storyblokEditable(blok as unknown as SbBlokData)} className= "bg-white w-full pt-28 md:pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-zinc-900 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">{blok.headline}</h1>
        {Array.isArray((blok as any).images) && (blok as any).images.length > 0 && (
          <div className="mt-6 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            <div className="flex gap-4 w-full">
              {(blok as any).images.map((img: any, i: number) => (
                <div key={i} className="snap-center w-full shrink-0">
                  <Image
                    src={img.filename}
                    alt={img.alt || `slide-${i}`}
                    width={1600}
                    height={900}
                    className="w-full rounded-xl object-cover aspect-[16/9]"
                    sizes="(min-width: 768px) 768px, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {typeof blok.content === 'string' && (
          <p className="mt-4 text-base sm:text-lg text-zinc-600">{blok.content}</p>
        )}
      </div>
    </section>
  );
};