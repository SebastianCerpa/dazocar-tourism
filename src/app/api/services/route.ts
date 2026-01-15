import { NextResponse } from "next/server";

// Service data
const services = [
  {
    id: 1,
    name: "Personalized Service",
    description:
      "Tailored travel experiences designed specifically for your preferences and interests. Our personalized service includes private guides, customized itineraries, and exclusive access to unique locations throughout Chile.",
    image: "/images/serv-personalizado.png",
  },
  {
    id: 2,
    name: "Family Service",
    description:
      "Family-friendly adventures designed with children and parents in mind. These services include age-appropriate activities, family accommodations, and guides experienced in working with children of all ages.",
    image: "/images/serv-family.png",
  },
  {
    id: 3,
    name: "Business Service",
    description:
      "Professional services for corporate clients including team-building retreats, conference planning, and executive tours. We handle all logistics while maintaining the highest standards of professionalism and comfort.",
    image: "/images/serv-business.jpg",
  },
];

export async function GET() {
  // Simulate a small delay like a real API
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NextResponse.json({
    success: true,
    data: services,
    count: services.length,
  });
}

// Optional: Add a GET by ID endpoint
export async function POST(request: Request) {
  const { id } = await request.json();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return NextResponse.json(
      { success: false, error: "Service not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: service,
  });
}
