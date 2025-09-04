"use client";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import { useEffect, useState } from "react";
import { RecommendedTour } from "../components/RecommendedTour";
import { StoryblokStory } from "@/lib/types";

const ToursPage = () => {
  const [story, setStory] = useState<StoryblokStory | null>(null);
  const [tours, setTours] = useState<StoryblokStory[]>([]);

  useEffect(() => {
    const fetchToursPage = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get("cdn/stories/tours", { 
        version: (process.env.NODE_ENV === "development") ? "draft" : "published", });
      setStory(data.story);
    };
    const fetchAllTours = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get("cdn/stories", {
        version: (process.env.NODE_ENV === "development") ? "draft" : "published",
        starts_with: "tours/",
        excluding_slugs: "tours",
      });
      setTours(data.stories || []);
    };
    fetchToursPage();
    fetchAllTours();
  }, []);

  if (!story) return null;
  return (
    <main className="bg-white">
      <StoryblokComponent blok={story.content} />
      <div className=" grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
      {tours.map((tour: StoryblokStory) => (
        <RecommendedTour story={tour} key={tour.id || tour.uuid || tour.content._uid} />
      ))}
      </div>
    </main>
  );
};
  

export default ToursPage;