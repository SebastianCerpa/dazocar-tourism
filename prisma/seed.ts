import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Clear existing data
  await prisma.service.deleteMany();
  await prisma.serviceCategory.deleteMany();
  console.log('Cleared existing data');

  // Create service categories with their services
  const traditionalTours = await prisma.serviceCategory.create({
    data: {
      title: 'Traditional Tours',
      description: 'Explore the best of Chile with our guided tours',
      services: {
        create: [
          {
            name: 'City Tour / Santiago',
            description: 'Explore the vibrant capital of Chile with our guided city tour. Discover the perfect blend of historical landmarks and modern architecture.',
            details: 'Our Santiago City Tour offers two options to fit your schedule: a 4-hour half-day experience covering the main attractions, or an 8-hour full-day immersion that includes lunch at a local restaurant and visits to additional sites. You\'ll explore Plaza de Armas, San Cristobal Hill, Bellavista neighborhood, and more with our knowledgeable guides who provide cultural and historical context throughout the journey.',
            schedules: '4h half day (9:00 AM - 1:00 PM) – 8h full day (9:00 AM - 5:00 PM)',
            image: '/images/city-tour.jpg',
            thumbnailImage: '/images/chile-landscape.jpg'
          },
          {
            name: 'Valparaíso / Viña del Mar Tour',
            description: 'Visit the colorful coastal cities of Valparaíso and Viña del Mar in this full-day excursion from Santiago.',
            details: 'This full-day tour takes you to Chile\'s central coast to explore two contrasting cities. In Valparaíso, a UNESCO World Heritage site, you\'ll wander through labyrinthine streets adorned with colorful street art and ride the historic funiculars. Then continue to the garden city of Viña del Mar with its beautiful beaches, parks, and elegant architecture. The tour includes transportation, guided visits, and time to enjoy local cuisine at recommended restaurants.',
            schedules: 'Full day tour (8:30 AM - 6:30 PM)',
            image: '/images/valparaiso.jpg',
            thumbnailImage: '/images/valparaiso.jpg'
          },
          {
            name: 'Mountain Tours',
            description: 'Experience the majestic Andes mountains with panoramic tours to Farellones Park or Valle Nevado.',
            details: 'Our mountain tours offer breathtaking views of the Andes and exciting activities year-round. During winter (June-August), enjoy world-class skiing and snowboarding at Valle Nevado or Farellones. In summer, the mountains transform into hiking paradises with trails for all difficulty levels. The panoramic tour includes transportation with stops at scenic viewpoints, while adventure packages can include equipment rental and instruction for winter sports or guided hiking experiences.',
            schedules: 'Panoramic Tour available year-round (8:00 AM - 5:00 PM)',
            image: '/images/torres.jpg',
            thumbnailImage: '/images/torres.jpg'
          },
          {
            name: 'Transfer in/out',
            description: 'Convenient and reliable airport transfers to and from your accommodation in Santiago.',
            details: 'Our professional transfer service ensures a smooth start and end to your Chilean adventure. We offer punctual airport pickups with drivers holding welcome signs, comfortable vehicles ranging from sedans to minivans depending on your group size, and 24/7 availability to accommodate any flight schedule. All our drivers speak English and can provide basic information about Santiago during your transfer.',
            schedules: 'Available 24/7, scheduled according to your flight times',
            image: '/images/serv-business.jpg',
            thumbnailImage: '/images/serv-business.jpg'
          }
        ]
      }
    }
  });

  const traditionalVineyards = await prisma.serviceCategory.create({
    data: {
      title: 'Traditional Vineyards',
      description: 'Discover Chile\'s world-renowned wine regions and vineyards',
      services: {
        create: [
          {
            name: 'Concha y Toro',
            description: 'Visit one of Chile\'s most famous wineries and taste their world-renowned wines.',
            details: 'Concha y Toro offers two tour experiences: The Traditional Tour (1:15 duration) includes a walk through the gardens of the summer residence, a visit to the external part of the manor house, the variety garden, and Pirque\'s old cellars, plus a tasting of 3 wines. The Premium Tour (2 hours) adds access to the interior of the manor house, a visit to the new technological wine cellar, and a tasting of 4 premium reserve wines paired with cheese.',
            schedules: 'Traditional – duration 1:15. Premium – approx. 2h',
            image: '/images/viñedos.jpg',
            thumbnailImage: '/images/viñedos.jpg'
          },
          {
            name: 'Undurraga',
            description: 'Experience one of Chile\'s oldest vineyards with a tour that combines tradition and innovation.',
            details: 'At Undurraga Vineyard, the Traditional Tour (1:15 duration) takes you through the beautiful gardens, the family\'s original house, and traditional cellars, concluding with a tasting of 3 wines from their classic line. The Premium Tour (2 hours) extends the experience with a visit to the modern production facilities and barrel room, finishing with a guided tasting of 4 premium wines accompanied by selected cheeses and gourmet crackers.',
            schedules: 'Traditional – duration 1:15. Premium – approx. 2h',
            image: '/images/viñedos.jpg',
            thumbnailImage: '/images/viñedos.jpg'
          },
          {
            name: 'Santa Rita',
            description: 'Discover the perfect blend of wine tradition and Chilean history at this historic estate.',
            details: 'Santa Rita Vineyard offers a Traditional Tour (1:15 duration) that includes a visit to the historic Doña Paula Restaurant, the neo-gothic chapel, and classic wine cellars, followed by a tasting of 3 wines. The Premium Tour (2 hours) adds a visit to the Andean Museum with its pre-Columbian art collection, a tour of the premium production area, and a tasting of 4 reserve wines paired with artisanal cheeses in an exclusive tasting room.',
            schedules: 'Traditional – duration 1:15. Premium – approx. 2h',
            image: '/images/viñedos.jpg',
            thumbnailImage: '/images/viñedos.jpg'
          },
          {
            name: 'Cousiño Macul',
            description: 'Tour the oldest family-owned winery in Chile, operating continuously since 1856.',
            details: 'Cousiño Macul offers a Traditional Tour (1:15 duration) through their historic cellars and vineyards, explaining their traditional winemaking methods passed down through generations, with a tasting of 3 classic wines. The Premium Tour (2 hours) provides a more comprehensive experience including a visit to the family\'s private cellar, the modern production facility, and concludes with a guided tasting of 4 premium wines paired with selected cheeses and charcuterie.',
            schedules: 'Traditional – duration 1:15. Premium – approx. 2h',
            image: '/images/viñedos.jpg',
            thumbnailImage: '/images/viñedos.jpg'
          },
          {
            name: 'Alyan',
            description: 'Experience a unique sunset night tour at this boutique winery with spectacular views.',
            details: 'The Alyan Sunset Night Tour offers a magical experience as the sun sets over the vineyards. This special evening tour includes a guided walk through the vineyards during golden hour, followed by a visit to the production facilities illuminated for the evening. The experience culminates with a wine tasting under the stars on their panoramic terrace, featuring 4 premium wines paired with local appetizers. This tour provides a unique perspective on Chilean winemaking and stunning photo opportunities.',
            schedules: 'Sunset night tour (times vary seasonally, typically 6:00 PM - 9:00 PM)',
            image: '/images/viñedos.jpg',
            thumbnailImage: '/images/viñedos.jpg'
          }
        ]
      }
    }
  });

  console.log('Database seeding completed successfully!');
  console.log(`Created ${await prisma.serviceCategory.count()} service categories`);
  console.log(`Created ${await prisma.service.count()} services`);
}

main()
  .catch((e) => {
    console.error('Error during database seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });