import { NextResponse } from "next/server";
import { getStoryblokApi } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic";

export async function GET() {
  const region = process.env.STORYBLOK_REGION || "eu";
  const version = (process.env.STORYBLOK_VERSION as "draft" | "published") || "draft";
  const hasToken = Boolean(process.env.STORYBLOK_ACCESS_TOKEN);

  if (!hasToken) {
    return NextResponse.json(
      {
        ok: false,
        reason: "Missing STORYBLOK_ACCESS_TOKEN",
        region,
        version,
      },
      { status: 500 }
    );
  }

  try {
    const api = getStoryblokApi();
    const me = await api.get("cdn/spaces/me");
    return NextResponse.json({
      ok: true,
      region,
      version,
      space: {
        id: me.data.space.id,
        name: me.data.space.name,
        domain: me.data.space.domain,
        language_codes: me.data.space.language_codes,
      },
    });
  } catch (error: unknown) {
    const errorObj = error as { response?: { status?: number; data?: { message?: string } }; message?: string };
    const status = errorObj?.response?.status || 500;
    const message = errorObj?.response?.data?.message || errorObj?.message || "Unknown error";
    return NextResponse.json(
      {
        ok: false,
        region,
        version,
        status,
        message,
      },
      { status }
    );
  }
}
