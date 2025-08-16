# Deployment Guide - Mohamed Abarri Portfolio

## 🚀 Deploy to Vercel

This portfolio is optimized for deployment on Vercel. Follow these steps to deploy your portfolio:

### 1. Prerequisites
- GitHub account with your portfolio repository
- Vercel account (free tier available)

### 2. Deploy Steps

#### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the following settings:
   - **Framework Preset**: Nuxt.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output`
   - **Install Command**: `npm install`

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### 3. Environment Variables
No environment variables are required for this portfolio.

### 4. Domain Configuration
1. In your Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain: `mohamedabarri.dev`
4. Update your DNS settings as instructed by Vercel

### 5. SEO Optimization
The portfolio includes:
- ✅ Meta tags for all pages
- ✅ Open Graph images
- ✅ Twitter Card support
- ✅ Robots.txt file
- ✅ Canonical URLs
- ✅ Structured data (via Nuxt Content)

### 6. Performance Optimization
- ✅ Static site generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Service worker (if needed)

### 7. Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test contact forms
- [ ] Verify SEO meta tags
- [ ] Check page load speeds
- [ ] Test dark/light mode toggle

### 8. Monitoring
- Set up Vercel Analytics for performance monitoring
- Configure error tracking if needed
- Set up uptime monitoring

## 🔧 Build Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 📁 Project Structure
```
├── app/
│   ├── components/     # Vue components
│   ├── pages/         # Page components
│   ├── layouts/       # Layout components
│   └── assets/        # CSS and static assets
├── content/           # Markdown content
├── public/           # Static files
└── nuxt.config.ts    # Nuxt configuration
```

## 🌐 Live URLs
- **Portfolio**: https://mohamedabarri.dev
- **ABARRI TECH**: https://abarri.tech
- **Drawnaq**: https://drawnaq.com
- **EmailWand**: https://emailwand.com

## 📞 Support
For deployment issues, check:
1. Vercel documentation
2. Nuxt.js deployment guide
3. GitHub repository issues

---

**Ready to deploy!** 🎉
