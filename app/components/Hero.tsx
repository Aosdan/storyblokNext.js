"use client";
import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
export const Hero = ({ blok }: { blok: StoryblokBlok }) => {
  return (
    <section 
    {...storyblokEditable(blok as unknown as SbBlokData)} className= "bg-white w-full pt-28 md:pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-zinc-900 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">{blok.headline}</h1>
        {typeof blok.content === 'string' && (
          <p className="mt-4 text-base sm:text-lg text-zinc-600">{blok.content}</p>
        )}
      </div>
    </section>
  );
};