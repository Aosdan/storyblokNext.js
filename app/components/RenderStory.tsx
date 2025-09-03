"use client";
import { StoryblokComponent } from "@storyblok/react";

import { StoryblokContent } from "@/lib/types";

export const RenderStory = ({ content }: { content: StoryblokContent }) => {
  return <StoryblokComponent blok={content} />;
};


