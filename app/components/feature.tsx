"use client";
import { StoryblokBlok } from "@/lib/types";

export const Feature = ({ blok }: { blok: StoryblokBlok }) => {
    return (
        <div className="bg-gray-500 p-8 rounded-sm shadow">
            <h3 className="font-bold text-3xl">{blok.headline}</h3>
            <p className=" mt-6 text-lg">{blok.content}</p>
        </div>
    );
};
