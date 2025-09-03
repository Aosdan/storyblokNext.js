"use client";
import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
export const Hero = ({ blok }: { blok: StoryblokBlok }) => {
  return (
    <section 
    {...storyblokEditable(blok as unknown as SbBlokData)} className= "bg-white mx-auto px-4 w-full pt-32">

      <h1 className="text-gray-600 text-center text-5xl md:text-7xl font-bold text-shadow-lg/20">{blok.headline}</h1>
      <p className="text-center text-x1">{blok.content}</p>
    </section>
  );
};