"use client";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import { useEffect, useState } from "react";

import { StoryblokStory } from "@/lib/types";
const HomePage = () => {
  const [story, setStory] = useState<StoryblokStory | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get("cdn/stories/home", { version: process.env.NODE_ENV === "development" ? "draft" : "published", resolve_relations: "recommended_tours.tours", });
      setStory(data.story);
    };
    fetchStory();
  }, []);

  if (!story) return null;

  return <StoryblokComponent blok={story.content} />;
};

export default HomePage;