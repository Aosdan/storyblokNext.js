"use client";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { StoryblokBlok } from "@/lib/types";

// Minimal placeholder so Storyblok doesn't error if 'marker' is rendered directly
export const Marker = ({ blok }: { blok: StoryblokBlok }) => {
  return (
    <div {...storyblokEditable(blok as unknown as SbBlokData)} className="hidden" />
  );
};


