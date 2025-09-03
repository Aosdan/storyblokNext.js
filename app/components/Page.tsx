"use client";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import type { SbBlokData } from "@storyblok/js";

import { StoryblokBlok } from "@/lib/types";

export const Page = ({ blok }: { blok: StoryblokBlok }) => {
  return (
    <main {...storyblokEditable(blok as unknown as SbBlokData)}>
      {blok.blocks?.map((block: StoryblokBlok) => (
        <StoryblokComponent key={block._uid} blok={block} />
      ))}
    </main>
  );
};