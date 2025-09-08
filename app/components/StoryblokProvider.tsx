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
import { Itinerary } from "./Itinerary";
import { Map } from "./Map";
import { Marker } from "./Marker";
import { Day } from "./Day";
const accessToken =
  process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || process.env.STORYBLOK_ACCESS_TOKEN;
const region = process.env.NEXT_PUBLIC_STORYBLOK_REGION as "us" | "eu" | undefined;

storyblokInit({
  accessToken,
  use: [apiPlugin],
  apiOptions: {
    region,
  },
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommendedTours: RecommendedTours,
    recommended_tours: RecommendedTours,
    itinerary: Itinerary,
    map: Map,
    marker: Marker,
    day: Day,
  },
  enableFallbackComponent: true,
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
    return <>{children}</>;
  };