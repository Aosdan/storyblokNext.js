export interface StoryblokImage {
  filename?: string;
  alt?: string;
  name?: string;
}

export interface StoryblokContent {
  _uid?: string;
  name?: string;
  headline?: string;
  subheading?: string;
  content?: string;
  introduction?: string;
  body?: unknown; // Rich text content
  image?: StoryblokImage;
  main_image?: StoryblokImage;
  price?: number;
  location?: string;
  comment?: string;
  tours?: StoryblokStory[];
  items?: StoryblokStory[];
  blocks?: StoryblokStory[];
  nestedContent?: {
    location?: string;
    [key: string]: unknown;
  };
  [key: string]: string | number | boolean | StoryblokImage | StoryblokStory[] | StoryblokImage | unknown; // More specific types
}

export interface StoryblokStory {
  id?: string;
  uuid?: string;
  _uid?: string;
  full_slug?: string;
  slug?: string;
  content: StoryblokContent;
  [key: string]: unknown; // Allow additional properties
}

export interface StoryblokBlok {
  _uid: string;
  component: string;
  headline?: string;
  subheading?: string;
  name?: string;
  content?: string;
  introduction?: string;
  comment?: string;
  tours?: StoryblokStory[];
  items?: StoryblokBlok[];
  blocks?: StoryblokBlok[];
  days?: Array<{
    _uid: string;
    dayTitle?: string;
    description?: string;
    image?: StoryblokImage | string;
    location?: string;
    lat?: number;
    lng?: number;
  }>;
  markers?: Array<{
    _uid: string;
    label?: string;
    lat: number;
    lng: number;
  }>;
  image?: StoryblokImage;
  main_image?: StoryblokImage;
  price?: number;
  location?: string;
  body?: unknown;
  [key: string]: string | number | boolean | StoryblokImage | StoryblokStory[] | StoryblokBlok[] | Record<string, unknown> | unknown | undefined;
}

export interface StoryblokComponentProps {
  blok: StoryblokBlok;
}

export interface StoryblokStoryProps {
  story: StoryblokStory;
}

export interface StoryblokContentProps {
  content: StoryblokContent;
}
