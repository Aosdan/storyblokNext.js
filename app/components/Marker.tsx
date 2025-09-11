"use client";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { StoryblokBlok } from "@/lib/types";

export const Marker = ({ blok }: { blok: StoryblokBlok }) => {
  return (
    <div {...storyblokEditable(blok as unknown as SbBlokData)} className="hidden" />
  );
};


