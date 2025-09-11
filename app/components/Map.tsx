"use client";
import dynamic from "next/dynamic";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { StoryblokBlok } from "@/lib/types";

type Marker = {
  _uid: string;
  label?: string;
  lat: number;
  lng: number;
};

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export const Map = ({ blok }: { blok: StoryblokBlok & { markers?: Marker[]; zoom?: number } }) => {
  const markers = Array.isArray(blok.markers) ? blok.markers : [];
  const centerLat = markers[0]?.lat ?? 25.0330;
  const centerLng = markers[0]?.lng ?? 121.5654;
  const zoom = typeof blok.zoom === "number" ? blok.zoom : 12;

  return (
    <section {...storyblokEditable(blok as unknown as SbBlokData)} className=" bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {blok.headline && (
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-zinc-900">{blok.headline}</h2>
        )}
        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
          <LeafletMap markers={markers} centerLat={centerLat} centerLng={centerLng} zoom={zoom} />
        </div>
        {markers.length > 1 && (
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-zinc-700">
            {markers.map((m) => (
              <li key={m._uid} className=" mt-10 rounded-md border border-zinc-200 bg-white px-3 py-2">
                <span className="font-medium text-zinc-900">{m.label ?? "Stop"}</span>
                <span className="text-zinc-500"> — {m.lat}, {m.lng}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};


