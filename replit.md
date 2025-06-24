# DevMani Traders - Financial Services Platform

## Overview

DevMani Traders Pvt Ltd is a comprehensive financial services web application built as a full-stack solution. The application serves as the digital presence for a financial services firm that is an authorized partner of Kotak Securities, offering futures and options trading, IPOs, mutual funds, fixed deposits, insurance, and bonds.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **Tailwind CSS** with **shadcn/ui** component library for styling
- **TanStack React Query** for server state management and API calls
- **React Hook Form** with **Zod** validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with `/api` prefix
- Custom middleware for request logging and error handling
- Modular route structure with separate API router

### Database Architecture
- **PostgreSQL** as the primary database
- **Drizzle ORM** for database operations and schema management
- **Neon Database** (serverless PostgreSQL) for hosting
- Automated migrations with Drizzle Kit

## Key Components

### Database Schema
The application uses a simple contact message system:
- **messages** table: Stores contact form submissions with fields for name, email, phone, service, message, consent, and timestamp
- Type-safe schema definitions using Drizzle with Zod integration

### API Endpoints
- `POST /api/messages`: Contact form submission endpoint with validation
- Comprehensive error handling for validation errors and server issues
- JSON response format with success/error states

### UI Components
- Professional design system using shadcn/ui components
- Responsive design with mobile-first approach
- Component library includes forms, buttons, cards, dialogs, and layout components
- Custom icons for financial services (charts, wallets, etc.)

### Page Structure
- **Home Page**: Complete landing page with hero section, services, testimonials, and contact
- **Service Detail Pages**: Dynamic routing for individual service information
- **404 Page**: Custom not-found page
- Consistent header and footer layout across all pages

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using React Hook Form + Zod schema
3. API request sent to `/api/messages` endpoint
4. Server validates data against shared schema
5. Message stored in PostgreSQL database
6. Success/error response returned to client
7. Toast notification displayed to user

### Page Navigation
1. User navigates using Wouter router links
2. Client-side routing updates URL and renders appropriate component
3. Dynamic service pages load based on URL parameters
4. Shared layout components (header/footer) persist across routes

## External Dependencies

### Core Libraries
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **express**: Web application framework
- **react**: Frontend library
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **tailwindcss**: Utility-first CSS framework

### UI/UX Libraries
- **@radix-ui/***: Unstyled, accessible UI primitives
- **lucide-react**: Icon library
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **class-variance-authority**: Utility for component variants

### Development Tools
- **typescript**: Type safety
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Development Environment
- **Replit** as the primary development and hosting platform
- **Node.js 20** runtime environment
- **PostgreSQL 16** database module
- Vite dev server on port 5000 with hot module replacement

### Production Build
- Vite builds the client-side application to `dist/public`
- esbuild bundles the server application to `dist/index.js`
- Static assets served from the built public directory
- Production server runs the bundled Express application

### Database Management
- Environment variable `DATABASE_URL` for database connection
- Migration files stored in `/migrations` directory
- Multiple migration script formats (`.js`, `.cjs`, `.ts`) for flexibility
- Automated schema synchronization with `drizzle-kit push`

## Recent Changes

- Updated financial services to financial products with new offerings:
  - Added: Futures and Options Trading, IPOs, Fixed Deposit, Insurance, Bonds
  - Removed: Broking Services, Wealth Management
- Changed contact email to contactus@devmanitraders.com throughout the site
- Updated header logo with official DevMani Traders branding
- Fixed contact navigation to scroll directly to contact section
- Modified grid layout to display 6 products in 3-column responsive design

## Changelog

- June 24, 2025: Initial setup and development
- June 24, 2025: Updated product offerings and contact information

## User Preferences

Preferred communication style: Simple, everyday language.