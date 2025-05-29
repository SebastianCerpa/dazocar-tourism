# Chile Tourism Website

A modern, responsive website for a tourism company in Chile, showcasing various tours, services, and destinations.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Database Setup

This project uses PostgreSQL with Prisma ORM to manage the database. Follow these steps to set up the database:

#### Prerequisites

- PostgreSQL installed and running on your machine
- Node.js and npm installed

#### Setup Instructions

1. **Install dependencies**

```bash
npm install
```

2. **Configure your database**

Create a PostgreSQL database named `chile_tourism`. The default connection string in the `.env` file is:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/chile_tourism"
```

If your PostgreSQL setup uses different credentials, update the `.env` file accordingly.

3. **Generate Prisma client**

```bash
npm run prisma:generate
```

4. **Run database migrations**

```bash
npm run prisma:migrate
```

5. **Seed the database with initial data**

```bash
npm run db:seed
```

6. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

The database includes the following models:

- **ServiceCategory**: Categories of services (e.g., Traditional Tours, Traditional Vineyards)
- **Service**: Individual services within each category (e.g., City Tour, Valparaíso Tour)
- **ContactSubmission**: Stores contact form submissions from users
- **User**: Admin users for potential future admin panel

## API Routes

The application includes the following API routes:

- **GET /api/service-categories**: Retrieves all service categories with their services
- **POST /api/contact**: Handles contact form submissions

## Development Tools

- **Prisma Studio**: A visual database editor for viewing and editing data
  ```bash
  npm run prisma:studio
  ```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
