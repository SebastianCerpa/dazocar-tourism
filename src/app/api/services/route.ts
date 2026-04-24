import { NextResponse } from "next/server";

// Service data
const services = [
  {
    id: 1,
    name: "Servicio Personalizado",
    description:
      "Experiencias de viaje personalizadas diseñadas específicamente para tus preferencias e intereses. Nuestro servicio incluye guías privados e itinerarios a tu medida.",
    image: "/images/serv-personalizado.png",
  },
  {
    id: 2,
    name: "Servicio Familiar",
    description:
      "Aventuras familiares diseñadas pensando en niños y padres. Opciones de alojamiento familiar y guías con experiencia trabajando con niños.",
    image: "/images/chile-landscape.jpg",
  },
  {
    id: 3,
    name: "Servicio Empresarial",
    description:
      "Servicios corporativos que incluyen retiros de team-building, planificación de conferencias y tours ejecutivos del más alto nivel.",
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
