import Image from "next/image";
import { renderRichText, type StoryblokRichTextNode } from "@storyblok/react/rsc";
import { StoryblokBlok } from "@/lib/types";

export const Tour = ({ blok }: { blok: StoryblokBlok }) => {
    const title = (blok?.name ?? "Untitled") as string;
    const imageSrc = (blok?.image?.filename || blok?.image || "") as string;
    const intro = (blok?.introduction ?? "") as string;

    return (
        <main className="container mx-auto px-4 w-full py-16 w-full pt-32 pb-32">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            {imageSrc ? (
                <Image className="mt-12" src={imageSrc} alt={title} width={1000} height={600} />
            ) : null}
            <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">{intro}</p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div
                    className=" prose md:props-lg m-16 max-w-none"
                    dangerouslySetInnerHTML={{ __html: renderRichText(blok?.body as StoryblokRichTextNode<string | TrustedHTML>) ?? "" }}
                />
            </div>
        </main>
    );
};