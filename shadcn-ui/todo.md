# CumpleFactura Development Plan

## 1. Architecture & Setup
- [x] Create mandatory folder structure (`/pages`, `/layouts`, `/services`, etc.)
- [x] Configure routing in `App.tsx`
- [x] Define global types in `src/types`
- [x] Create Mock Data service in `src/services`

## 2. Layout Components
- [x] `Navbar` (Responsive, Links: Inicio, Cómo funciona, Plugin, Precios, Gestorías)
- [x] `Footer` (4 columns: Brand, Product, Resources, Legal)
- [x] `MainLayout` wrapper

## 3. Pages Implementation
- [x] **Home (`/`)**
    - [x] Hero Section
    - [x] "What is" Section
    - [x] "For whom" Section
    - [x] "How it works" (3 steps)
    - [x] Benefits
    - [x] CTA
- [x] **How it Works (`/como-funciona`)**
    - [x] Detailed flow
    - [x] Security section
- [x] **Plugin Landing (`/woocommerce-verifactu`)**
    - [x] Plugin features
    - [x] Installation guide
- [x] **Pricing (`/precios`)**
    - [x] 3 Cards (Basic, Pro, Gestorías)
- [x] **Gestorías (`/gestorias`)**
    - [x] Partner program info
- [x] **Resources (`/recursos`)**
    - [x] Guides & FAQ list

## 4. Constraints Check
- [x] Ensure no file > 300 lines
- [x] Verify modularity
- [x] Check "SaaS Modern" design (clean, airy, shadows)