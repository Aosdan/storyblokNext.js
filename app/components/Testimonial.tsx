import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
export const Testimonial = (params: { blok: StoryblokBlok }) => {
    return (
        <div {...storyblokEditable(params.blok as unknown as SbBlokData)} className="font-mono bg-gray-500 p-8 rounded-sm shadow">
            <p className="font-bold leading-relaxed text-gray-100">{params.blok.comment}</p>
             <p className="text-lg font-semibold mt-6">{params.blok.name}</p>
        </div>
    );
};