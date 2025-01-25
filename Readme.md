Here’s a polished `README.md` for your hackathon project, incorporating deployment steps, testing results, and project activities:

```markdown
# Furniture Bazaar E-commerce

A dynamic furniture marketplace built with **Next.js** (frontend) and **Sanity.io** (backend).  
**Live Demo**: [furniture-bazaar.vercel.app](https://furniture-bazaar.vercel.app/)  

---

## 🛋️ Project Overview  
A responsive e-commerce platform featuring:  
- Dynamic product listings with filters (category, price).  
- Real-time search and cart functionality.  
- Product detail pages with related items.  
- Integration with Sanity CMS for content management.  

---

## 🚀 Features  
- **Product Listing**: Sort by price/category, real-time search.  
- **Cart & Checkout**: Persistent cart using `localStorage`.  
- **Responsive Design**: Optimized for mobile/desktop.  
- **CMS Integration**: Manage products via Sanity Studio.  

---

## 🛠️ Tech Stack  
- **Frontend**: Next.js, TypeScript, Tailwind CSS.  
- **Backend**: Sanity.io (GROQ queries).  
- **Testing**: Lighthouse, Thunder Client.  

---

## ⚙️ Installation  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Jawad-Chaudhary/Hackathon--Jam--2024/tree/main/Day1-2-3-4-5-6-7/hackathon-jam
   cd hackathon-jam
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env.local` file:  
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Run Locally**  
   ```bash
   npm run dev
   ```

---

## 🚀 Deployment  
1. **Deploy Frontend to Vercel**:  
   - Connect your GitHub repo to Vercel.  
   - Add Sanity environment variables in Vercel's dashboard.  

2. **Deploy Sanity Studio**:  
   ```bash
   cd studio
   sanity deploy
   ```

---

## 🧪 Testing & Results  

### **Test Cases**  
15 test cases executed (all passed). Key scenarios:  
- Cart persistence after refresh.  
- Real-time search with filters.  
- Sanity API response time (<500ms).  

📊 **Full Test Report**: [tests/reports/testing_report_furniture_bazaar.csv](https://github.com/Jawad-Chaudhary/Hackathon--Jam--2024/blob/main/Day1-2-3-4-5-6-7/Tests/Reports/testing_report_furniture_bazaar.csv)  

### **Lighthouse Scores**  
| Category       | Score |  
|----------------|-------|  
| Performance    | 100    |  
| Accessibility  | 88     |  
| SEO            | 100    |  

![Lighthouse Report](file:///D:/C-O-D-E/Quater%202/Next.js/Off-Class/Hackathon%20-Jam%20-2024/Hackathon--Jam--2024/Day1-2-3-4-5-6-7/Tests/Reports/lighthouse-report.pdf)  

---

## 📂 Repository Structure  
```
.
├── public                      # Static assets (images, fonts, icons)
├── scripts/
│   └── importSanityData.mjs    # ES Module script for bulk data import to Sanity CMS
│                               # (Handles product/category seeding)
└── src/
    ├── app/
    │   ├── account/            # User profile/account management
    │   │   └── page.tsx        # - Account dashboard (orders, settings)
    │   ├── asgaard-sofa/       # Product-specific landing page
    │   │   └── page.tsx        # - Marketing page for featured product
    │   ├── blog/               # Content marketing section
    │   │   └── page.tsx        # - Blog post listings (Sanity-powered)
    │   ├── cart/               # Shopping cart management
    │   │   └── page.tsx        # - Cart view with price calculations
    │   ├── checkout/           # Purchase finalization
    │   │   └── page.tsx        # - Payment gateway integration (Stripe)
    │   ├── contact/            # Customer support
    │   │   └── page.tsx        # - Contact form with email integration
    │   ├── context/            # Global state management
    │   │   ├── CartContext.tsx # - Cart operations (add/remove items)
    │   │   └── ProductContext.tsx # - Product data caching layer
    │   ├── product/            # Core product functionality
    │   │   └── [slug]/         # Dynamic routing
    │   │       └── page.tsx    # - Product details with slug-based SSG
    │   ├── shop/               # Main shopping interface
    │   │   └── page.tsx        # - Product grid with filters/sorting
    ├── components/
    │   ├── blog/               # Blog UI elements
    │   │   └── blog.tsx        # - Article rendering with Sanity block content
    │   ├── homepage/           # Landing page components
    │   │   ├── hero.tsx        # - Full-width promotional banner
    │   │   └── top-sale.tsx    # - Discounted products carousel
    │   ├── shop/               # Product display components
    │   │   ├── hero.tsx        # - Category-specific header image
    │   │   └── item.tsx        # - Product card component
    │   ├── ClientProductDetails.tsx # Hydrates product page with client-side features
    │   ├── header-page.tsx     # Page-specific header variants
    │   ├── header.tsx          # Main site header (logo/navigation)
    │   └── navbar.tsx          # Responsive navigation menu
    └── sanity/                 # CMS configuration
        └── schemaTypes/        # Content modeling
            ├── index.ts        # Schema registry
            └── product.ts      # Product schema definition (fields/validation)  
```

---

## 🛠️ Best Practices  
- **Performance**: Image compression, lazy loading.  
- **Security**: Input sanitization, environment variables.  
- **Modularity**: Reusable React components.  

---

## 🧠 Challenges & Solutions  
- **Cart State Loss**: Fixed by switching to `localStorage`.  
- **Slow API Responses**: Optimized Sanity GROQ queries.  

--- 

**Developed by [Jawad-Chaudhary]** | [GitHub Repo](https://github.com/Jawad-Chaudhary/Hackathon--Jam--2024)  
``` 

### Key Highlights:  
1. **Clear Setup Instructions**: Simplified steps for local/remote deployment.  
2. **Testing Transparency**: Direct links to test reports and Lighthouse scores.  
3. **Visual Structure**: Organized sections for quick navigation.  
4. **Reproducibility**: Environment variables and folder hierarchy explained.  

Let me know if you'd like to add screenshots, license info, or contribution guidelines! 📦✨