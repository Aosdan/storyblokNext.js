"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { PropsWithChildren } from "react";
import { Tour } from "./Tour";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Grid } from "./Grid";
import { Feature } from "./feature";
import { Testimonial } from "./Testimonial";
import { RecommendedTours} from "./RecommendedTours";
const accessToken =
  process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || process.env.STORYBLOK_ACCESS_TOKEN;

storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommendedTours: RecommendedTours,
    recommended_tours: RecommendedTours,
  },
  enableFallbackComponent: true,
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
    return <>{children}</>;
  };