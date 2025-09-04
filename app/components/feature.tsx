"use client";
import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

export const Feature = ({ blok }: { blok: StoryblokBlok }) => {
    return (
        <div {...storyblokEditable(blok as unknown as SbBlokData)} className="font-mono bg-gray-500 p-8 rounded-sm shadow">
            <h3 className="font-bold text-3xl">{blok.headline}</h3>
            <p className=" mt-6 text-lg">{blok.content}</p>
        </div>
    );
};
