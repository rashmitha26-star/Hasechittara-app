# 🚀 Deployment Guide - Hasechittara Art Application

This guide will help you deploy your art heritage application to Netlify for **FREE** with your custom GoDaddy domain.

---

## 📋 Prerequisites

- [x] GitHub account (sign up at [github.com](https://github.com))
- [x] Netlify account (sign up at [netlify.com](https://netlify.com))
- [x] Your GoDaddy domain
- [x] Git installed on your Mac

---

## 🔧 Step 1: Push Your Code to GitHub

### 1.1 Check if Git is initialized
Open Terminal in your project folder and run:
```bash
cd "/Users/rashmithakl/Documents/staticapp-cicd copy/Hasechittara-app"
git status
```

### 1.2 If not initialized, set up Git:
```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Art heritage application"
```

### 1.3 Create a GitHub repository:
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `hasechittara-app` (or any name you prefer)
3. Keep it **Public** (free) or **Private** (also free)
4. **DO NOT** check "Add README" or "Add .gitignore" (we already have these)
5. Click **"Create repository"**

### 1.4 Connect and push to GitHub:
GitHub will show you commands. Run these:
```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/hasechittara-app.git

# Push your code
git branch -M main
git push -u origin main
```

✅ Your code is now on GitHub!

---

## 🌐 Step 2: Deploy to Netlify

### 2.1 Sign up and connect GitHub:
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Sign up"** → Choose **"GitHub"** (easier authentication)
3. Authorize Netlify to access your GitHub

### 2.2 Import your project:
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your repository: `hasechittara-app`
4. Netlify will auto-detect settings, verify:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**

### 2.3 Wait for deployment (2-3 minutes):
- Netlify will install dependencies, build your app, and deploy
- You'll see a live URL like: `random-name-abc123.netlify.app`
- Click the URL to see your live site!

✅ Your app is now live on the internet!

---

## 🔑 Step 3: Add Razorpay Keys (Optional - for payments)

### 3.1 Get your Razorpay Test Key:
1. Go to [dashboard.razorpay.com](https://dashboard.razorpay.com)
2. Make sure you're in **"Test Mode"** (toggle at top)
3. Go to Settings → API Keys → **"Generate Test Keys"**
4. Copy your **Key ID** (looks like `rzp_test_xxxxxxxxxxxxx`)

### 3.2 Add to Netlify:
1. In Netlify dashboard, go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Key: `VITE_RAZORPAY_KEY_ID`
4. Value: paste your Razorpay key
5. Click **"Create variable"**

### 3.3 Redeploy:
1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

✅ Payments are now enabled in test mode!

---

## 🌍 Step 4: Connect Your GoDaddy Domain

### 4.1 Add domain in Netlify:
1. In Netlify dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your GoDaddy domain (e.g., `yourartapp.com`)
4. Netlify will show a warning - click **"Add domain"**

### 4.2 Get DNS settings from Netlify:
Netlify will show you DNS records to add. Usually:
- **Primary domain** (yourartapp.com):
  - Type: `A`
  - Name: `@`
  - Value: `75.2.60.5`

- **WWW subdomain** (www.yourartapp.com):
  - Type: `CNAME`
  - Name: `www`
  - Value: `your-site-name.netlify.app`

### 4.3 Update DNS in GoDaddy:
1. Log into [godaddy.com](https://godaddy.com)
2. Go to **My Products** → Your domain → **DNS**
3. **Add/Edit these records**:

   **For main domain:**
   - Click **"Add"** → Type: `A`, Name: `@`, Value: `75.2.60.5`, TTL: 600
   
   **For www:**
   - Click **"Add"** → Type: `CNAME`, Name: `www`, Value: `your-site.netlify.app`, TTL: 600

4. **Save all records**

### 4.4 Wait for DNS propagation:
- Usually takes 10-60 minutes
- Can take up to 48 hours in rare cases
- Check status: [dnschecker.org](https://dnschecker.org)

### 4.5 Enable HTTPS (Automatic):
- Once DNS propagates, Netlify auto-provisions FREE SSL certificate
- Your site will be available at `https://yourartapp.com`

✅ Your custom domain is now live with HTTPS!

---

## 🔄 Step 5: Future Updates (Auto-Deploy)

From now on, any changes you push to GitHub will **automatically deploy**:

```bash
# Make changes to your code
# Then commit and push:
git add .
git commit -m "Updated gallery images"
git push

# Netlify will automatically rebuild and deploy (2-3 minutes)
```

---

## 📊 Going Live with Real Payments

When you're ready to accept real money:

### 5.1 Complete Razorpay KYC:
1. In Razorpay dashboard, complete business verification
2. Submit required documents (GST, PAN, bank details)
3. Wait for approval (usually 1-2 days)

### 5.2 Get Live API Key:
1. Switch to **"Live Mode"** in Razorpay dashboard
2. Go to Settings → API Keys → **"Generate Live Keys"**
3. Copy **Live Key ID** (looks like `rzp_live_xxxxxxxxxxxxx`)

### 5.3 Update Netlify:
1. Go to Netlify → Site settings → Environment variables
2. Edit `VITE_RAZORPAY_KEY_ID`
3. Replace test key with live key
4. Save and redeploy

✅ You're now accepting real payments!

---

## 💰 Cost Summary

| Service | Cost | What You Get |
|---------|------|--------------|
| **Netlify Hosting** | **FREE** | 100GB bandwidth, unlimited sites |
| **GitHub** | **FREE** | Code hosting, version control |
| **SSL Certificate** | **FREE** | Automatic HTTPS |
| **GoDaddy Domain** | **~$15/year** | Your custom domain |
| **Razorpay** | **~2% per transaction** | Payment processing |
| **Total Monthly** | **$0** | Only domain renewal yearly! |

---

## 🆘 Troubleshooting

### Build Failed on Netlify?
- Check the build log in Netlify dashboard
- Make sure `package.json` has all dependencies
- Try building locally first: `npm run build`

### Domain not working?
- Wait 1 hour for DNS propagation
- Check DNS records at [dnschecker.org](https://dnschecker.org)
- Make sure you updated the correct domain in GoDaddy

### Payments not working?
- Check browser console for errors (F12)
- Verify Razorpay key in Netlify environment variables
- Make sure you're using the right key (test vs live)

### Images not loading?
- Check image paths in `src/data/artworks.js`
- Make sure images are in `public/images/` folder
- Image paths should start with `/images/`

---

## 📞 Need Help?

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Razorpay Docs**: [razorpay.com/docs](https://razorpay.com/docs)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Site deployed on Netlify
- [ ] Razorpay test keys added
- [ ] Test payments working
- [ ] Custom domain connected
- [ ] DNS records updated in GoDaddy
- [ ] HTTPS enabled (automatic)
- [ ] Site accessible at custom domain
- [ ] Ready to complete Razorpay KYC for live payments

---

**🎉 Congratulations! Your art heritage application is now live and free to host!**
