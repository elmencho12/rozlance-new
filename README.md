# ROZLANCE - Full LinkedIn Clone 🇵🇰

### Rozgar Ka Naya Andaaz - Founder Ubaid Bin Mushtaq

Ye hai Rozlance ka complete LinkedIn clone module. Is ZIP mein 10 models + 2 APIs + 1 Feed page included hai.

---

## 📦 Installation Steps (Urdu + English)

### Step 1: Extract ZIP
```bash
# ZIP ko download karne ke baad
# rozlance-new folder mein extract karo
unzip rozlance-linkedin-clone.zip -d ./rozlance-new/
# ya manually extract karo
```

### Step 2: Copy Files
Sab files already sahi folders mein hain:
- `models/` -> 10 new mongoose models
- `app/api/posts/route.js` -> Posts feed API with JWT
- `app/api/connections/route.js` -> Connections API
- `app/feed/page.jsx` -> Full LinkedIn feed UI

### Step 3: User.js Update Karo (IMPORTANT!)
```bash
# Open USER_FIELDS_TO_ADD.txt and copy fields into models/User.js
```
Fields: headline, about, avatar, bannerImage, location, openToWork, profileViews, connectionsCount etc.

### Step 4: Git Push
```bash
git add .
git commit -m "feat: add full LinkedIn clone - 10 models + feed + APIs - Rozlance 🇵🇰"
git push origin main
```

### Step 5: Vercel Deploy
- Vercel dashboard kholo
- Project -> Redeploy
- Check logs: agar error nahi toh mubarak ho!

### Step 6: Test Karo
- Visit: https://your-domain.com/feed
- Login with JWT token
- Create post, check likes, connections

---

## ✅ Included Models (10)
1. Experience 2. Education 3. Skill 4. Post 5. Comment 6. Connection 7. Company 8. Job 9. Notification 10. Message

## 🔌 API Routes (2)
- GET/POST /api/posts - JWT protected feed
- GET/POST /api/connections - Connection requests

## 📱 Pages (1)
- /feed - LinkedIn-style feed with Ubaid's profile (128 viewers)

---

## Stack
Next.js 14, Mongoose, JWT, Tailwind, Dark Mode

Built with ❤️ in Lahore, Pakistan
#Rozlance #RozgarKaNayaAndaaz

Need help? DM Ubaid on LinkedIn.
