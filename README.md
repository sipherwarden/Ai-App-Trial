# Trinity Guest Connect

Production-ready Next.js church guest welcome site and secure staff follow-up dashboard for Trinity Assembly of God.

## Features
- Public welcome website (`/`), guest sign-in (`/sign-in`), returning guest (`/returning`), thank-you (`/thank-you`), kiosk (`/kiosk`)
- Secure admin login and protected admin pages
- Guest management dashboard and details
- Prayer requests and follow-up notes
- CSV export for staff
- Prisma + SQLite (designed for future PostgreSQL migration)
- Zod server-side validation

## Tech Stack
Next.js App Router, TypeScript, Tailwind CSS, Prisma ORM, SQLite, Zod.

## Setup
```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma migrate dev --name init
npm run seed
npm run dev
```

## Environment Variables
- `DATABASE_URL` (SQLite in dev)
- `SESSION_SECRET` (set a long random secret)

## Default Admin Login (Dev)
- Email: `admin@trinityguestconnect.local`
- Password: `ChangeMe123!`

## Placeholder Content to Update
- `[Add service time]`
- `[Add church address]`
- `[Add phone number]`
- `[Add email address]`

## Security & Privacy Notes
- Guest data is admin-only.
- Use HTTPS and strong `SESSION_SECRET` in production.
- Change default admin password immediately.

## Troubleshooting
- If Prisma client missing: `npx prisma generate`
- If database missing: rerun migration and seed commands.
