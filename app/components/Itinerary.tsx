"use client";
import Image from "next/image";
import { StoryblokBlok, StoryblokImage } from "@/lib/types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

type ItineraryDay = {
  _uid: string;
  dayTitle?: string;
  description?: string;
  image?: StoryblokImage | string;
  location?: string;
  lat?: number;
  lng?: number;
};

export const Itinerary = ({ blok }: { blok: StoryblokBlok & { days?: ItineraryDay[] } }) => {
  const days = Array.isArray(blok.days) ? blok.days : [];

  return (
    <section {...storyblokEditable(blok as unknown as SbBlokData)} className="bg-gray-800 py-12 md:py-16">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {blok.headline && (
          <h2 className=" text-center text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-zinc-900 text-gray-800">
            {blok.headline}
          </h2>
        )}
        <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {days.map((day, idx) => {
            const title = day.dayTitle ?? `Day ${idx + 1}`;
            const desc = day.description ?? "";
            const imgSrc = (typeof day.image === "string" ? day.image : day.image?.filename) ?? "";

            return (
              <li key={day._uid} className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={title}
                    width={640}
                    height={480}
                    className="w-full aspect-[4/3] object-cover"
                  />
                ) : null}
                <div className="p-5 sm:p-6">
                  <h3 className= "text-lg font-semibold text-zinc-900 leading-snug">{title}</h3>
                  {day.location && (
                    <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{day.location}</p>
                  )}
                  {desc && (
                    <p className="mt-3 text-zinc-700 text-sm leading-relaxed">{desc}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};



