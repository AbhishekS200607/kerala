# 🌿 Kerala Spice & Coffee Exports — Complete Website Build Specification
> **For AI Code Generation** | Stack: HTML + Tailwind CSS (CDN) + Vanilla JS + SVG Icons Only
> Version: 1.0 | Author: AetherStack | Client: Kerala Spice & Coffee Exports

---

## 📋 PROJECT OVERVIEW

| Field | Value |
|---|---|
| Business | Spices & Coffee Beans Export Company |
| Location | Kerala, India |
| Goal | Attract international bulk buyers (UAE, Europe, Middle East) |
| Stack | HTML5, Tailwind CSS (CDN), Vanilla JS, SVG icons only |
| No external icon libraries | Use inline SVG only (no FontAwesome, no Lucide CDN) |
| No frameworks | Pure HTML/CSS/JS files |

---

## 🎨 DESIGN SYSTEM

### Color Palette (Tailwind Custom Config via CDN script config)

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: {
            green:      '#2D5016',  /* Deep plantation green — primary */
            greenLight: '#4A7C2F',  /* Medium green — hover states */
            greenMuted: '#EEF4E8',  /* Very light green — backgrounds */
            brown:      '#6B3A1F',  /* Warm spice brown — accents */
            brownLight: '#C08B5C',  /* Golden brown — highlights */
            cream:      '#FBF8F3',  /* Off-white cream — page bg */
            gold:       '#D4A843',  /* Harvest gold — CTA buttons */
            goldDark:   '#B8892A',  /* Gold hover */
            charcoal:   '#1C1C1C',  /* Near-black text */
            muted:      '#6B7280',  /* Gray text */
          }
        },
        fontFamily: {
          display: ['"Playfair Display"', 'Georgia', 'serif'],
          body:    ['"DM Sans"', 'sans-serif'],
          mono:    ['"JetBrains Mono"', 'monospace'],
        },
        borderRadius: {
          nav: '9999px',   /* Navbar pill shape */
          card: '1rem',
          btn: '0.625rem',
        },
        boxShadow: {
          card:  '0 4px 24px rgba(45,80,22,0.08)',
          cardHover: '0 8px 40px rgba(45,80,22,0.16)',
          cta:   '0 4px 16px rgba(212,168,67,0.35)',
        }
      }
    }
  }
</script>
```

### Typography

```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

- **Display/Headings**: Playfair Display (serif, elegant, trustworthy)
- **Body/UI**: DM Sans (clean, modern, readable at small sizes)
- **h1**: `font-display text-5xl font-bold text-brand-green`
- **h2**: `font-display text-3xl font-semibold text-brand-charcoal`
- **h3**: `font-display text-xl font-semibold`
- **Body**: `font-body text-base text-brand-muted leading-relaxed`

### Design Aesthetic

- **Theme**: Natural luxury — think premium tea/spice brand, not flashy e-commerce
- **Background**: `#FBF8F3` cream base with subtle green accents
- **Cards**: White with `1px solid #E8EFE0` border + soft shadow
- **Sections alternate**: cream bg → light green muted bg → cream
- **Imagery**: Use placeholder gradient divs styled as product images when no real images
- **Texture feel**: Add a subtle grain overlay using CSS pseudo-element on hero

---

## 📁 FILE STRUCTURE

```
kerala-spice-exports/
│
├── index.html              ← Home page
├── products.html           ← Products catalogue page
├── about.html              ← About Us page
├── contact.html            ← Contact page
├── inquiry.html            ← Bulk Inquiry / Quote form page
│
├── css/
│   └── custom.css          ← Custom overrides beyond Tailwind
│
├── js/
│   └── main.js             ← Navbar scroll, mobile menu, form handler, WhatsApp
│
├── assets/
│   ├── logo.svg            ← Company logo SVG
│   └── images/             ← Product placeholder images (or real photos)
│       ├── cardamom.jpg
│       ├── pepper.jpg
│       ├── cloves.jpg
│       ├── ginger.jpg
│       ├── turmeric.jpg
│       ├── robusta.jpg
│       ├── arabica.jpg
│       └── green-coffee.jpg
│
└── KERALA_SPICE_EXPORT_WEBSITE_SPEC.md   ← This file
```

---

## 🧭 NAVBAR COMPONENT (Shared across all pages)

### Specifications

- **Shape**: Pill/rounded navbar — `rounded-full` — floats centered at top with padding
- **Position**: `sticky top-4 z-50` — hovers over page with margin from edge
- **Background**: `bg-white/90 backdrop-blur-md` — frosted glass on scroll
- **Shadow on scroll**: Add class `shadow-card` via JS on scroll > 10px
- **Max width**: `max-w-6xl mx-auto`
- **Mobile**: Hamburger menu with smooth slide-down drawer

### Navbar HTML Structure

```html
<header class="sticky top-4 z-50 px-4">
  <nav class="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-full 
              border border-green-100 px-6 py-3 flex items-center justify-between
              shadow-card transition-all duration-300" id="navbar">

    <!-- LOGO -->
    <a href="index.html" class="flex items-center gap-2">
      <!-- Inline SVG Logo -->
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#2D5016"/>
        <path d="M18 8 C14 12 10 16 12 22 C14 28 22 28 24 22 C26 16 22 12 18 8Z" fill="#4A7C2F"/>
        <path d="M18 10 L18 26" stroke="#EEF4E8" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M14 16 Q18 14 22 16" stroke="#EEF4E8" stroke-width="1" stroke-linecap="round" fill="none"/>
        <path d="M13 20 Q18 18 23 20" stroke="#EEF4E8" stroke-width="1" stroke-linecap="round" fill="none"/>
      </svg>
      <div>
        <span class="font-display font-bold text-brand-green text-base leading-tight block">Kerala Spice</span>
        <span class="font-body text-brand-brownLight text-xs tracking-widest uppercase">& Coffee Exports</span>
      </div>
    </a>

    <!-- DESKTOP NAV LINKS -->
    <ul class="hidden md:flex items-center gap-1">
      <li><a href="index.html" class="nav-link px-4 py-2 rounded-full font-body text-sm font-medium text-brand-charcoal hover:bg-brand-greenMuted hover:text-brand-green transition-all">Home</a></li>
      <li><a href="products.html" class="nav-link px-4 py-2 rounded-full font-body text-sm font-medium text-brand-charcoal hover:bg-brand-greenMuted hover:text-brand-green transition-all">Products</a></li>
      <li><a href="about.html" class="nav-link px-4 py-2 rounded-full font-body text-sm font-medium text-brand-charcoal hover:bg-brand-greenMuted hover:text-brand-green transition-all">About Us</a></li>
      <li><a href="contact.html" class="nav-link px-4 py-2 rounded-full font-body text-sm font-medium text-brand-charcoal hover:bg-brand-greenMuted hover:text-brand-green transition-all">Contact</a></li>
    </ul>

    <!-- CTA BUTTON -->
    <div class="hidden md:flex items-center gap-2">
      <a href="inquiry.html" class="bg-brand-gold hover:bg-brand-goldDark text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-cta transition-all duration-200 hover:scale-105">
        Get Quote
      </a>
    </div>

    <!-- MOBILE HAMBURGER -->
    <button id="menu-toggle" class="md:hidden p-2 rounded-full hover:bg-brand-greenMuted transition-all" aria-label="Toggle menu">
      <!-- Hamburger SVG -->
      <svg id="icon-open" width="22" height="22" viewBox="0 0 22 22" fill="none" class="text-brand-charcoal">
        <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg id="icon-close" width="22" height="22" viewBox="0 0 22 22" fill="none" class="text-brand-charcoal hidden">
        <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </nav>

  <!-- MOBILE DRAWER -->
  <div id="mobile-menu" class="hidden md:hidden mt-2 mx-auto max-w-6xl bg-white rounded-3xl border border-green-100 shadow-card p-6">
    <ul class="flex flex-col gap-1">
      <li><a href="index.html" class="block px-4 py-3 rounded-xl font-body text-sm font-medium text-brand-charcoal hover:bg-brand-greenMuted">Home</a></li>
      <li><a href="products.html" class="block px-4 py-3 rounded-xl font-body text-sm font-medium text-brand-charcoal hover:bg-brand-greenMuted">Products</a></li>
      <li><a href="about.html" class="block px-4 py-3 rounded-xl font-body text-sm font-medium text-brand-charcoal hover:bg-brand-greenMuted">About Us</a></li>
      <li><a href="contact.html" class="block px-4 py-3 rounded-xl font-body text-sm font-medium text-brand-charcoal hover:bg-brand-greenMuted">Contact</a></li>
    </ul>
    <a href="inquiry.html" class="mt-4 block text-center bg-brand-gold text-white font-semibold py-3 rounded-full shadow-cta">Get Quote</a>
  </div>
</header>
```

### Active Nav Link JS

```js
// In main.js — auto-highlight current page nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('bg-brand-greenMuted', 'text-brand-green', 'font-semibold');
  }
});
```

---

## 🔝 STICKY WHATSAPP BUTTON (All Pages — Global Component)

Place just before closing `</body>` on every HTML file.

```html
<!-- STICKY WHATSAPP BUTTON -->
<a href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20your%20spice%20and%20coffee%20export%20products.%20Please%20send%20me%20your%20price%20list."
   target="_blank"
   class="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
   aria-label="Chat on WhatsApp">
  <!-- WhatsApp SVG icon -->
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  <span>WhatsApp Us</span>
</a>
```

**Replace `91XXXXXXXXXX` with the actual phone number.**

---

## 📄 PAGE 1: HOME (index.html)

### Section 1 — Hero

```
Layout: Two-column on desktop (text left, decorative visual right) | Single column mobile
Background: bg-brand-cream with a subtle diagonal green gradient overlay on right half
Height: min-h-screen
```

**Content:**
- **Eyebrow tag**: `TRUSTED KERALA EXPORT PARTNER` (small caps, brand-green)
- **H1**: "Premium Indian Spices & Coffee Beans — Exported Worldwide from Kerala"
- **Subheading**: "Direct-from-plantation sourcing. Export-grade quality. Reliable bulk supply to UAE, Europe, and the Middle East."
- **Buttons**:
  - Primary: `Get Quote on WhatsApp` → WhatsApp link (gold button, rounded-full)
  - Secondary: `Request Price List` → `inquiry.html` (outlined green button)
- **Trust badges row** (3 inline badges with SVG icons):
  - ✅ APEDA Registered
  - ✅ FSSAI Certified
  - ✅ 100% Export Grade
- **Right side**: Stacked product preview cards (CSS-only, no real image needed initially) OR a decorative SVG illustration of spices/coffee

**Hero Background Texture (CSS):**
```css
.hero-section {
  background-color: #FBF8F3;
  background-image: 
    radial-gradient(circle at 80% 20%, rgba(74,124,47,0.08) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(107,58,31,0.05) 0%, transparent 50%);
}
```

### Section 2 — Product Preview Strip

```
3 cards: Spices overview | Coffee Beans | Export Standards
Each card: icon (SVG) + heading + 1-line description + "View Products →" link
Background: bg-brand-greenMuted
Layout: 3-column grid on desktop, stacked on mobile
```

### Section 3 — Why Choose Us

```
Heading: "Why International Buyers Trust Us"
Layout: 2-column grid (icon + text pairs), 4 points:
  - Direct Plantation Sourcing
  - Export-Grade Packaging (25kg / 50kg bags)
  - Competitive FOB / CIF Pricing
  - Timely Shipment & Documentation
```

**SVG Icons to build inline (simple, geometric):**
- Leaf icon, box/package icon, price-tag icon, ship/truck icon

### Section 4 — Product Highlight Carousel (or Static Grid)

```
Show 4–5 product cards in a horizontal scroll on mobile, grid on desktop
Each card: placeholder image bg (gradient), product name, origin badge, MOQ
```

### Section 5 — Testimonial / Trust Section

```
3 short testimonial cards (placeholder names: "Ahmed Al-Rashidi, Dubai Importer", etc.)
Background: brand-green
Text: white
Star rating SVG (5 stars inline SVG)
```

### Section 6 — CTA Banner

```
Full-width banner: "Ready to Place a Bulk Order?"
Two buttons: WhatsApp + Inquiry Form
Background: gradient from brand-green to brand-greenLight
```

### Section 7 — Footer

```
4 columns:
  Col 1: Logo + company description + social links (placeholder SVG icons)
  Col 2: Quick Links (all pages)
  Col 3: Products list links
  Col 4: Contact info (phone, email, address Kerala)
Bottom bar: © 2025 Kerala Spice & Coffee Exports. All Rights Reserved.
Background: brand-charcoal (#1C1C1C)
Text: white / gray-400
```

---

## 📄 PAGE 2: PRODUCTS (products.html)

### Layout

- **Hero strip** at top: green bg, title "Our Export Products", breadcrumb
- **Category tabs**: "All | 🌿 Spices | ☕ Coffee Beans" — JS-powered filter
- **Product grid**: 3 columns desktop, 2 tablet, 1 mobile

### Product Card Component

```html
<div class="product-card bg-white rounded-card border border-[#E8EFE0] shadow-card hover:shadow-cardHover transition-all duration-300 overflow-hidden group" data-category="spice">

  <!-- Product Image Placeholder -->
  <div class="h-48 bg-gradient-to-br from-brand-greenMuted to-green-100 flex items-center justify-center relative overflow-hidden">
    <img src="assets/images/cardamom.jpg" alt="Green Cardamom" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    <!-- Origin Badge -->
    <span class="absolute top-3 left-3 bg-brand-green text-white text-xs font-body font-semibold px-2.5 py-1 rounded-full">Kerala, India</span>
  </div>

  <!-- Card Body -->
  <div class="p-5">
    <h3 class="font-display font-semibold text-brand-charcoal text-lg">Green Cardamom</h3>
    <p class="font-body text-brand-muted text-sm mt-1 leading-relaxed">Premium export-grade green cardamom sourced from high-altitude plantations of Idukki, Kerala. Rich aroma, bold flavor.</p>
    
    <!-- Meta Tags Row -->
    <div class="mt-3 flex flex-wrap gap-2">
      <span class="bg-brand-greenMuted text-brand-green text-xs font-semibold px-2.5 py-1 rounded-full">MOQ: 100kg</span>
      <span class="bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">25kg / 50kg bags</span>
    </div>

    <!-- Actions -->
    <div class="mt-4 flex gap-2">
      <a href="https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20inquire%20about%20Green%20Cardamom" 
         target="_blank"
         class="flex-1 bg-[#25D366] text-white text-sm font-semibold text-center py-2.5 rounded-btn hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-1.5">
        <!-- Small WhatsApp SVG -->
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/></svg>
        Enquire
      </a>
      <a href="inquiry.html" class="flex-1 border border-brand-green text-brand-green text-sm font-semibold text-center py-2.5 rounded-btn hover:bg-brand-greenMuted transition-colors">
        Get Quote
      </a>
    </div>
  </div>
</div>
```

### Products Data (8 Total)

| # | Name | Category | MOQ | Packaging | Description |
|---|---|---|---|---|---|
| 1 | Green Cardamom (Export Grade) | spice | 100kg | 25kg / 50kg | High-altitude Idukki cardamom, rich aroma |
| 2 | Black Pepper (Whole) | spice | 100kg | 25kg / 50kg | Wayanad black pepper, bold and pungent |
| 3 | Cloves (Whole) | spice | 50kg | 25kg / 50kg | Premium hand-picked dried cloves |
| 4 | Dry Ginger | spice | 100kg | 25kg / 50kg | Sun-dried Kerala ginger, export-grade |
| 5 | Turmeric Fingers | spice | 100kg | 25kg / 50kg | High-curcumin Kerala turmeric |
| 6 | Robusta Coffee Beans | coffee | 200kg | 25kg / 50kg jute bags | Full-bodied robust flavour, plantation-fresh |
| 7 | Arabica Coffee Beans | coffee | 200kg | 25kg / 50kg jute bags | Mild, aromatic high-altitude Arabica |
| 8 | Green Coffee Beans (Unroasted) | coffee | 200kg | 25kg / 50kg | Export-ready raw green beans for roasters |

### Category Filter JS Logic

```js
// js/main.js
const filterBtns = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active-filter'));
    btn.classList.add('active-filter');

    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
```

---

## 📄 PAGE 3: ABOUT US (about.html)

### Sections

1. **Hero strip**: green bg, title "About Kerala Spice & Coffee Exports"
2. **Story section**: 2-col (text left, decorative map/illustration right)
   - Founded in Kerala, serving international buyers since [year]
   - Direct sourcing from certified farmers and plantation owners
   - Commitment to APEDA, FSSAI, and international quality standards
3. **Stats row** (4 numbers):
   - `500+` Tons Exported Annually
   - `20+` Countries Served
   - `15+` Years of Experience
   - `100%` Export Grade Certified
4. **Values grid** (4 cards): Quality | Transparency | Reliability | Sustainability
5. **Certifications row**: APEDA | FSSAI | ISO (badge SVG placeholders)
6. **CTA**: "Start a Partnership" → inquiry.html

---

## 📄 PAGE 4: CONTACT (contact.html)

### Layout: 2 columns (info left, form right)

**Left column:**
- Company address (Kerala, India)
- Phone number with click-to-call link
- Email with mailto link
- **Large WhatsApp CTA button** (green, full-width on mobile)
- **Google Maps embed** (Kerala, India placeholder iframe)
- Business hours

**Right column — Contact Form:**

```html
<form id="contact-form" class="space-y-4">
  <div>
    <label class="block font-body text-sm font-medium text-brand-charcoal mb-1.5">Full Name *</label>
    <input type="text" name="name" required placeholder="Your name"
           class="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-greenMuted transition-all">
  </div>
  <div>
    <label class="block font-body text-sm font-medium text-brand-charcoal mb-1.5">Country *</label>
    <input type="text" name="country" required placeholder="e.g. United Arab Emirates"
           class="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-greenMuted transition-all">
  </div>
  <div>
    <label class="block font-body text-sm font-medium text-brand-charcoal mb-1.5">Product Required *</label>
    <select name="product" required
            class="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-greenMuted transition-all bg-white">
      <option value="">Select product...</option>
      <option>Green Cardamom</option>
      <option>Black Pepper (Whole)</option>
      <option>Cloves</option>
      <option>Dry Ginger</option>
      <option>Turmeric Fingers</option>
      <option>Robusta Coffee Beans</option>
      <option>Arabica Coffee Beans</option>
      <option>Green Coffee Beans (Unroasted)</option>
      <option>Multiple Products</option>
    </select>
  </div>
  <div>
    <label class="block font-body text-sm font-medium text-brand-charcoal mb-1.5">Quantity Required</label>
    <input type="text" name="quantity" placeholder="e.g. 500 kg, 1 Metric Ton"
           class="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-greenMuted transition-all">
  </div>
  <div>
    <label class="block font-body text-sm font-medium text-brand-charcoal mb-1.5">Message</label>
    <textarea name="message" rows="4" placeholder="Tell us about your requirement..."
              class="w-full px-4 py-3 rounded-xl border border-gray-200 font-body text-sm focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-greenMuted transition-all resize-none"></textarea>
  </div>
  <button type="submit"
          class="w-full bg-brand-green hover:bg-brand-greenLight text-white font-body font-semibold py-3.5 rounded-full transition-all duration-200 hover:shadow-cta">
    Send Inquiry
  </button>
</form>
```

**Form JS (mailto fallback):**
```js
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const subject = encodeURIComponent(`Spice Export Inquiry - ${data.get('product')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nCountry: ${data.get('country')}\nProduct: ${data.get('product')}\nQuantity: ${data.get('quantity')}\nMessage: ${data.get('message')}`
  );
  window.location.href = `mailto:info@keralaspiceexports.com?subject=${subject}&body=${body}`;
});
```

**Google Maps embed (Kerala placeholder):**
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4!2d76.9!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
  width="100%" height="250" 
  class="rounded-2xl border border-green-100"
  style="border:0;" allowfullscreen="" loading="lazy">
</iframe>
```

---

## 📄 PAGE 5: INQUIRY / QUOTE (inquiry.html)

### Purpose: Dedicated bulk buyer quote request page

**Layout**: Centered single column, max-w-2xl, with a hero strip at top

**Form fields:**
1. Full Name *
2. Company Name *
3. Email Address *
4. Phone / WhatsApp Number *
5. Country *
6. Product(s) Required * (multi-select checkboxes, all 8 products listed)
7. Quantity per Product (text)
8. Incoterms Preference (FOB / CIF / CFR / Other) — dropdown
9. Packaging Preference (25kg bags / 50kg bags / Bulk) — radio
10. Target Delivery Timeline — text
11. Additional Notes — textarea

**Submit Options Row:**
```html
<div class="flex flex-col sm:flex-row gap-3 mt-6">
  <button type="submit" class="flex-1 bg-brand-green text-white font-semibold py-3.5 rounded-full hover:bg-brand-greenLight transition-all">
    Submit Inquiry via Email
  </button>
  <a href="https://wa.me/91XXXXXXXXXX?text=I+want+to+request+a+quote"
     class="flex-1 bg-[#25D366] text-white font-semibold py-3.5 rounded-full text-center hover:bg-[#1ebe5d] transition-all flex items-center justify-center gap-2">
    <!-- WhatsApp SVG -->
    Send via WhatsApp
  </a>
</div>
```

---

## ⚙️ main.js — JAVASCRIPT FEATURES

```js
// 1. NAVBAR SCROLL SHADOW
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav?.classList.toggle('shadow-cardHover', window.scrollY > 10);
});

// 2. MOBILE MENU TOGGLE
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

menuToggle?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});

// 3. ACTIVE NAV LINK
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('bg-brand-greenMuted', 'text-brand-green', 'font-semibold');
  }
});

// 4. PRODUCT FILTER (products.html only)
const filterBtns = document.querySelectorAll('[data-filter]');
const productCards = document.querySelectorAll('[data-category]');
filterBtns?.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('bg-brand-green', 'text-white'));
    btn.classList.add('bg-brand-green', 'text-white');
    productCards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
    });
  });
});

// 5. SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-6');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => {
  el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
  observer.observe(el);
});

// 6. FORM SUBMISSION
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    const entries = [...data.entries()].map(([k,v]) => `${k}: ${v}`).join('\n');
    const subject = encodeURIComponent('Bulk Export Inquiry — Kerala Spice & Coffee Exports');
    const body = encodeURIComponent(entries);
    window.location.href = `mailto:info@keralaspiceexports.com?subject=${subject}&body=${body}`;
  });
});
```

---

## 🎨 custom.css — CUSTOM STYLES

```css
/* Smooth scroll */
html { scroll-behavior: smooth; }

/* Body base */
body {
  font-family: 'DM Sans', sans-serif;
  background-color: #FBF8F3;
  color: #1C1C1C;
}

/* Hero grain texture overlay */
.hero-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.4;
  z-index: 0;
}

/* Active filter button */
.active-filter {
  background-color: #2D5016;
  color: white;
}

/* Product card transition */
.product-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.product-card:hover { transform: translateY(-4px); }

/* Divider leaf decoration */
.section-divider {
  text-align: center;
  color: #4A7C2F;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  letter-spacing: 0.5rem;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb { background: #4A7C2F; border-radius: 3px; }

/* Focus ring brand */
input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(45,80,22,0.12);
}

/* Stat counter style */
.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #2D5016;
  line-height: 1;
}
```

---

## 🌐 HTML `<head>` Template (Use on every page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO -->
  <title>Kerala Spice & Coffee Exports | Bulk Spices & Coffee Beans from India</title>
  <meta name="description" content="Export-grade Indian spices and coffee beans directly from Kerala plantations. Supplying bulk orders of cardamom, pepper, cloves, turmeric, Robusta & Arabica coffee to UAE, Europe, Middle East.">
  <meta name="keywords" content="spice exporter India, Kerala spices export, cardamom exporter, black pepper exporter, coffee beans export India, bulk spice supplier">
  <meta name="robots" content="index, follow">

  <!-- Open Graph -->
  <meta property="og:title" content="Kerala Spice & Coffee Exports">
  <meta property="og:description" content="Premium Indian spices & coffee beans exported worldwide from Kerala.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourwebsite.com">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              green: '#2D5016', greenLight: '#4A7C2F', greenMuted: '#EEF4E8',
              brown: '#6B3A1F', brownLight: '#C08B5C', cream: '#FBF8F3',
              gold: '#D4A843', goldDark: '#B8892A', charcoal: '#1C1C1C', muted: '#6B7280'
            }
          },
          fontFamily: {
            display: ['"Playfair Display"', 'Georgia', 'serif'],
            body: ['"DM Sans"', 'sans-serif'],
          },
          borderRadius: { nav: '9999px', card: '1rem', btn: '0.625rem' },
          boxShadow: {
            card: '0 4px 24px rgba(45,80,22,0.08)',
            cardHover: '0 8px 40px rgba(45,80,22,0.16)',
            cta: '0 4px 16px rgba(212,168,67,0.35)',
          }
        }
      }
    }
  </script>

  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/custom.css">
</head>
```

---

## 📐 SECTION SPACING RULES

| Element | Tailwind Classes |
|---|---|
| Section vertical padding | `py-16 md:py-24` |
| Section container | `max-w-6xl mx-auto px-4 sm:px-6` |
| Heading margin bottom | `mb-4` for h2, `mb-2` for h3 |
| Subtext margin | `mb-10` |
| Grid gap | `gap-6 md:gap-8` |
| Button padding | `px-6 py-3` regular, `px-8 py-4` large |

---

## ✅ FEATURE CHECKLIST

- [x] Rounded pill navbar (`rounded-full`) with frosted glass on scroll
- [x] Sticky WhatsApp floating button on all pages (bottom-right)
- [x] Mobile responsive (Tailwind responsive prefixes `sm:`, `md:`, `lg:`)
- [x] SEO meta tags on all pages
- [x] Product category filter (All / Spices / Coffee)
- [x] Inquiry form with mailto submission
- [x] Contact form with all required fields
- [x] Google Maps embed on contact page
- [x] SVG icons only (no external icon library)
- [x] Google Fonts (Playfair Display + DM Sans)
- [x] Scroll reveal animation (IntersectionObserver)
- [x] Active nav link highlight
- [x] Mobile hamburger menu
- [x] WhatsApp CTA on every product card
- [x] Product cards with MOQ + packaging info + origin badge
- [x] Footer with all links
- [x] Stats section (About page)
- [x] Trust badges (certifications)

---

## 🚀 BUILD ORDER FOR AI

Generate files in this order for best results:

1. `css/custom.css` — base styles first
2. `index.html` — home page (most complex, sets design tone)
3. `products.html` — product grid with filter
4. `about.html` — about + stats
5. `contact.html` — contact form + map
6. `inquiry.html` — quote form
7. `js/main.js` — all JS logic

---

## 📌 PLACEHOLDER REPLACEMENTS BEFORE LAUNCH

| Placeholder | Replace With |
|---|---|
| `91XXXXXXXXXX` | Actual WhatsApp number with country code |
| `info@keralaspiceexports.com` | Actual email address |
| `https://yourwebsite.com` | Actual domain |
| `[year]` in About | Company founding year |
| Product images | Real plantation photos |
| Google Maps embed URL | Actual company location coordinates |
| APEDA / FSSAI numbers | Actual certification numbers |

---

*Spec prepared by AetherStack | Ready for AI-assisted code generation*
