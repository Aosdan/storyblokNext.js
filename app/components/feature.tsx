"use client";
import { StoryblokBlok } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

export const Feature = ({ blok }: { blok: StoryblokBlok }) => {
    return (
        <div {...storyblokEditable(blok as unknown as SbBlokData)} className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-zinc-900 font-semibold text-xl">{blok.headline}</h3>
            {typeof blok.content === 'string' && (
                <p className="mt-3 text-zinc-700">{blok.content}</p>
            )}
        </div>
    );
};
