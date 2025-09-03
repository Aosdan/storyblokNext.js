"use client";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import { useEffect, useState } from "react";

import { StoryblokStory } from "@/lib/types";
const HomePage = () => {
  const [story, setStory] = useState<StoryblokStory | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories/home", {
          version: process.env.NODE_ENV === "development" ? "draft" : "published",
          resolve_relations: "recommended_tours.tours",
        });
        setStory(data.story ?? null);
      } catch {
        setError("Failed to load content.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchStory();
  }, []);

  if (isLoading) return <div className="container mx-auto px-4 py-8">Loading…</div>;
  if (error || !story) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600 font-semibold">{error ?? "No published home content found."}</p>
        <p className="text-sm text-gray-600 mt-2">Publish the &quot;home&quot; story in Storyblok or set environment tokens on Vercel.</p>
      </div>
    );
  }

  return <StoryblokComponent blok={story.content} />;
};

export default HomePage;