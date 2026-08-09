# RASOI MAHAL - The Royal Taste of India 👑

> A complete, production-ready, ultra-luxurious Indian fine-dining platform built with **Next.js 15 (App Router)** and **Spring Boot (Java 21)**.

---

## 📌 Project Overview
**RASOI MAHAL** is an opulent web platform representing a premium multi-cuisine Indian restaurant inspired by Royal Rajasthan, Mughal court architecture, and authentic Indian hospitality. The project is strictly divided into two independent services: a Next.js 15 frontend and a Java 21 Spring Boot REST API backend.

---

## 🌟 Key Features
- **Royal Indian Design Identity**: Rich palette featuring Royal Maroon (`#4A0E17`), Royal Gold (`#D4AF37`), Deep Saffron (`#FF9933`), Ivory (`#FFFDF6`), and Charcoal Black (`#121212`).
- **Complete 18 Pages**: Home, About, Our Story, Menu, Chef, Private Dining, Events, Wedding Catering, Corporate Catering, Gallery, Reservation, Testimonials, Blog (List & Post), FAQs, Contact, Privacy Policy, Terms, and 404 Page.
- **In-App AI Concierge Chatbot**: Intelligent multi-topic conversational assistant for table reservations, Jain/veg options, chef recommendations, catering inquiries, and direct WhatsApp handoff (`NEXT_PUBLIC_WHATSAPP_NUMBER`).
- **Interactive Menu & Dish Modals**: Categorized by North Indian, South Indian, Punjabi, Maharashtrian, Gujarati, Rajasthani, Hyderabadi, Tandoor, Jain Menu, Beverages, with live search, spice level indicators, and dietary badges.
- **Table Reservation System**: Multi-step booking wizard connected to Spring Boot REST API (`POST /api/v1/reservations`) with local fallback.
- **Spring Boot Java Backend**: Multi-layered REST APIs for Reservations, Contact, Newsletter, and Health Checks with DTO validation, global exception handler, and CORS setup.
- **Visual FX & Animations**: Floating spice particle canvas, luxury loading screen, Rajasthani SVG jaali pattern dividers, hover lifts, and smooth page transitions.
- **Complete SEO & Accessibility**: JSON-LD Structured Data (`Restaurant`, `LocalBusiness`, `FAQPage`), Open Graph metadata, `sitemap.ts`, `robots.ts`, and full keyboard navigation.

---

## 🛠️ Technology Stack

### Frontend (`/frontend`)
- **Framework**: Next.js 16 / Next.js 15 (App Router, React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Custom CSS Variables
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: Playfair Display, Cinzel, Plus Jakarta Sans (Google Fonts)

### Backend (`/backend`)
- **Framework**: Spring Boot 3.2.x
- **Language**: Java 21
- **Build Tool**: Apache Maven
- **Validation**: Jakarta Validation (`spring-boot-starter-validation`)
- **Architecture**: Controller-Service-DTO-Model Layered Architecture

---

## 📁 Folder Structure

```
Restaurant-Website/
├── frontend/                     # Next.js 15 Application
│   ├── src/
│   │   ├── app/                  # App Router Pages & Metadata
│   │   │   ├── page.tsx          # Home Page
│   │   │   ├── about/            # About Page
│   │   │   ├── our-story/        # Our Story Page
│   │   │   ├── menu/             # Menu Page
│   │   │   ├── chef/             # Chef Page
│   │   │   ├── private-dining/   # Private Dining Page
│   │   │   ├── events/           # Events Page
│   │   │   ├── wedding-catering/ # Wedding Catering Page
│   │   │   ├── corporate-catering/# Corporate Catering Page
│   │   │   ├── gallery/          # Gallery Page
│   │   │   ├── reservation/      # Reservation Page
│   │   │   ├── testimonials/     # Testimonials Page
│   │   │   ├── blog/             # Blog System
│   │   │   ├── faqs/             # FAQs Page
│   │   │   ├── contact/          # Contact Page
│   │   │   ├── privacy-policy/   # Privacy Policy Page
│   │   │   ├── terms/            # Terms of Service Page
│   │   │   ├── not-found.tsx     # Custom Royal 404
│   │   │   ├── sitemap.ts        # Dynamic SEO Sitemap
│   │   │   └── robots.ts         # Robots Configuration
│   │   ├── components/
│   │   │   ├── chatbot/          # AI Concierge Chatbot Widget
│   │   │   ├── layout/           # Navbar & Footer
│   │   │   ├── menu/             # Menu Filter & Dish Modals
│   │   │   ├── reservation/      # Reservation Form
│   │   │   ├── seo/              # Restaurant JSON-LD Schema
│   │   │   └── ui/               # SpiceParticles, JaaliPattern, RoyalLoader
│   │   ├── data/                 # Menu, Chefs, Events, Blogs, FAQs datasets
│   │   └── types/                # TypeScript Interfaces
│   └── package.json
│
└── backend/                      # Spring Boot Java 21 REST API
    ├── src/main/java/com/rasoimahal/api/
    │   ├── config/               # CorsConfig.java
    │   ├── controller/           # Reservation, Contact, Newsletter, Health Controllers
    │   ├── dto/                  # Request & Response DTOs
    │   ├── service/              # Reservation, Contact, Newsletter Services
    │   ├── exception/            # GlobalExceptionHandler.java
    │   └── RasoiMahalApplication.java
    └── pom.xml
```

---

## ⚡ Installation & Local Setup

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Backend Setup
```bash
cd backend
mvn clean spring-boot:run
```
The REST API will start on `http://localhost:8080/api/v1`.

---

## 🔑 Environment Variables

Create `.env.local` inside `frontend/`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1
```

---

## 🚀 Deployment Guide
- **Frontend**: Deploy on **Vercel** or **AWS Amplify** (`cd frontend && vercel`).
- **Backend**: Deploy on **Railway**, **Render**, or **GCP Cloud Run** using Docker.

---

## 🔮 Future Improvements
- Real-time table selection map (interactive 3D floor plan layout).
- Online payment gateway integration for advance catering deposits (Razorpay / Stripe).
- Multi-language support (Hindi, French, Japanese, German).
