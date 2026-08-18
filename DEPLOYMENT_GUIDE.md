# 🚀 Netlify Deployment Guide - Hase Chittara Art App

## ✅ Prerequisites
- GitHub account (free)
- Netlify account (free) - sign up at [netlify.com](https://netlify.com)

---

## 📦 Method 1: Deploy via GitHub (RECOMMENDED - Auto-updates)

### Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com)
   - Click "+" → "New repository"
   - Name: `hasechittara-app` (or any name)
   - Keep it Public (free) or Private (also free)
   - Don't add README, .gitignore, or license
   - Click "Create repository"

2. **Push your code from terminal:**

```bash
# Navigate to your project
cd "/Users/rashmithakl/Documents/staticapp-cicd copy/Hasechittara-app"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ready for Netlify"

# Add your GitHub repository (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. **Go to Netlify:**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Click "Sign up" → Sign up with GitHub (easiest)

2. **Deploy your site:**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access GitHub
   - Select your `hasechittara-app` repository

3. **Build settings (auto-detected):**
   ```
   Build command: npm run build
   Publish directory: dist
   ```
   - These should be auto-filled
   - Click "Deploy site"

4. **Wait for deployment (1-2 minutes)**
   - Netlify will:
     - Install dependencies
     - Build your app
     - Deploy to CDN
   - You'll get a URL like: `random-name-12345.netlify.app`

### Step 3: Test Your Site
- Click the URL to open your site
- Test navigation, cart, checkout
- Everything should work perfectly!

---

## 📦 Method 2: Drag & Drop Deploy (QUICKEST - Manual updates)

### Step 1: Build Locally

```bash
cd "/Users/rashmithakl/Documents/staticapp-cicd copy/Hasechittara-app"
npm install
npm run build
```

This creates a `dist` folder with your built app.

### Step 2: Deploy to Netlify

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the **`dist`** folder onto the page
3. Done! You get an instant URL

**Note:** For updates, you need to rebuild and re-drag the `dist` folder.

---

## 🌐 Step 4: Add Your GoDaddy Domain (After Deployment)

### In Netlify Dashboard:

1. Click "Domain settings"
2. Click "Add custom domain"
3. Enter your GoDaddy domain (e.g., `yourartapp.com`)
4. Click "Verify"

### In GoDaddy:

1. Log in to [godaddy.com](https://godaddy.com)
2. Go to **My Products** → **Domains**
3. Click your domain → **DNS**
4. Update these records:

**Delete any existing A or CNAME records for @ and www, then add:**

```
Type  | Name | Value                          | TTL
------|------|--------------------------------|------
A     | @    | 75.2.60.5                     | 600
CNAME | www  | your-site-name.netlify.app    | 600
```

**Replace `your-site-name` with your actual Netlify subdomain.**

5. Click "Save"

### Wait for DNS Propagation
- Takes 10 minutes to 48 hours (usually ~1 hour)
- Check status in Netlify dashboard
- Netlify will automatically provision FREE SSL certificate

---

## 🎨 Step 5: Enable Live Payments (After Deployment)

### Get Razorpay Account:

1. Sign up at [dashboard.razorpay.com](https://dashboard.razorpay.com)
2. Complete KYC verification
3. Go to Settings → API Keys
4. Copy your **Key ID** (starts with `rzp_live_` or `rzp_test_`)

### Update Your Code:

Edit `src/components/CheckoutModal.jsx` line 10:

```javascript
const RAZORPAY_KEY_ID = 'rzp_live_YOUR_KEY_HERE'
```

### Redeploy:

**If using GitHub method:**
```bash
git add src/components/CheckoutModal.jsx
git commit -m "Add Razorpay live key"
git push
```
Netlify auto-deploys in 1-2 minutes!

**If using drag-drop method:**
```bash
npm run build
```
Then drag the new `dist` folder to Netlify.

---

## 📊 What You Get (FREE Forever):

✅ **Hosting:** Unlimited sites  
✅ **Bandwidth:** 100 GB/month  
✅ **Build minutes:** 300 minutes/month  
✅ **SSL Certificate:** Automatic & free  
✅ **CDN:** Global, super fast  
✅ **Custom domain:** Supported  
✅ **Continuous deployment:** Auto-updates from GitHub  
✅ **Forms:** 100 submissions/month (bonus!)  

---

## 🔄 How to Update Your Site After Deployment

### If using GitHub method (auto-deploy):
```bash
# Make your changes
git add .
git commit -m "Update message"
git push
```
✅ Netlify automatically rebuilds and deploys!

### If using drag-drop method:
```bash
npm run build
```
Then drag the new `dist` folder to Netlify.

---

## 🆘 Troubleshooting

### Build fails on Netlify?
- Check build logs in Netlify dashboard
- Common fix: Make sure `package.json` has all dependencies

### Site shows blank page?
- Check browser console for errors
- Make sure `dist` folder was published (not root)

### 404 errors on page refresh?
- Fixed by `netlify.toml` redirects (already configured!)

### Domain not working?
- Wait longer (DNS can take 24-48 hours)
- Verify DNS records match exactly
- Check [whatsmydns.net](https://whatsmydns.net) to see propagation

---

## 📞 Need Help?

- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Netlify Support: [support.netlify.com](https://support.netlify.com)
- Community Forum: [answers.netlify.com](https://answers.netlify.com)

---

## 🎉 You're Done!

Your art heritage app is now:
- ✅ Deployed globally on CDN
- ✅ Free hosting (no EC2 costs!)
- ✅ Auto SSL certificate
- ✅ Ready for custom domain
- ✅ Ready for live payments

**Congratulations! 🚀**
