import { NextResponse } from "next/server";

// Featured destinations data for the carousel
const featuredDestinations = [
  {
    id: 1,
    image: "/images/torres.jpg",
    icon: "/images/logo.png",
    title: "Torres del Paine",
    description: "Explore the majestic peaks and glaciers of Patagonia",
    featured: true,
    order: 1,
  },
  {
    id: 2,
    image: "/images/desierto.jpg",
    icon: "/images/logo.png",
    title: "Atacama Desert",
    description: "Discover the world's driest desert and its starry skies",
    featured: true,
    order: 2,
  },
  {
    id: 3,
    image: "/images/valparaiso.jpg",
    icon: "/images/logo.png",
    title: "Valparaíso",
    description: "Explore the colorful port city and its vibrant street art",
    featured: true,
    order: 3,
  },
  {
    id: 4,
    image: "/images/viñedos.jpg",
    icon: "/images/logo.png",
    title: "Tour Viñedos",
    description: "Taste world-class wines in scenic vineyards",
    featured: true,
    order: 4,
  },
];

export async function GET() {
  try {
    // Simulate a small delay like a real API
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Return featured destinations sorted by order
    const sortedDestinations = featuredDestinations
      .toSorted((a, b) => a.order - b.order)
      .map(({ id, image, icon, title, description }) => ({
        id,
        image,
        icon,
        title,
        description,
      }));

    return NextResponse.json({
      success: true,
      data: sortedDestinations,
      count: sortedDestinations.length,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch featured destinations",
      },
      { status: 500 }
    );
  }
}
