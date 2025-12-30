# PersonalSite 2026

Built with the latest stack:
- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Prisma 7** (with `prisma.config.ts`)
- **PostgreSQL**
- **Auth.js v5** (NextAuth) via `next-auth@beta`
- **Resend** for emails

## Getting Started

1. **Environment Variables**:
   Create a `.env` file in the root directory with the following keys:
   ```env
   DATABASE_URL="postgresql://user:password@host:port/dbname"
   AUTH_SECRET="your_generated_secret" # run `npx auth secret` to generate
   AUTH_RESEND_KEY="re_..."
   EMAIL_FROM="onboarding@resend.dev"
   ```

2. **Database Setup**:
   Since this project uses Prisma 7, configuration is in `prisma.config.ts`.
   Run the migration to push the schema to your DB:
   ```bash
   npx prisma db push
   # or
   npx prisma migrate dev
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Features implemented
- Responsive Landing Page with Framer Motion animations.
- Glassmorphism Navbar with Auth state integration.
- Auth.js with Prisma Adapter (User, Account, Session models).
- Glassmorphism and modern gradient aesthetics.
