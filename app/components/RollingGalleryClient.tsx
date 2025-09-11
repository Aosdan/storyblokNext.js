"use client";
import React from "react";
// Import the JS component and cast to any to avoid incorrect inferred types
import RollingGalleryImpl from "@/components/RollingGallery";

export type RollingGalleryProps = {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
};

export default function RollingGalleryClient(props: RollingGalleryProps) {
  const Component = RollingGalleryImpl as unknown as React.ComponentType<RollingGalleryProps>;
  return <Component {...props} />;
}


