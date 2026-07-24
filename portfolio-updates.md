# Portfolio Update Guide — princejetro.com.ng

Based on what's live now vs. what you've actually built recently. Organized by page/file so you know exactly where each edit goes.

---

## 1. `index.html` — Hero / Top of Homepage

**Add:** IED 2026 win. This is your strongest recent credibility signal and it's not on the site at all. Put it as a small badge/banner right under your name or above "View My Work."

**Draft copy (badge style):**
```
🏆 Winner — Best Innovative Project, IED 2026 (LagSciPrep)
```

**Draft copy (if you want a line in the hero subtext instead):**
```
Founder & CEO of Tutorial Haven. Recently won Best Innovative Project
at IED 2026 with LagSciPrep. I build impactful tech solutions for
education and beyond.
```

---

## 2. `index.html` — Featured Projects → LagSciPrep card

**Current stats shown:** 195+ active students, 100% daily retention

**Update to:**
```
380+ registered users · 4,300+ CBT sessions · 1,800+ exam attempts
17,500+ past questions · 300+ WhatsApp community members
```

**Draft card description (replace existing paragraph):**
```
LagSciPrep is a comprehensive Computer-Based Testing (CBT) platform
developed specifically for science students at the University of
Lagos — winner of Best Innovative Project at IED 2026. It features
objective questions across biology, chemistry, physics, and more,
with 380+ registered users, 4,300+ CBT sessions run, and a growing
17,500+ question bank. The platform offers customizable mock exams,
real-time progress tracking, and detailed result analytics to help
students prepare effectively.
```

---

## 3. `index.html` — Featured Projects → Tutorial Haven card

**Current stat shown:** 615+ active students

**Update to:** ~900+ students (if that's still accurate — confirm current number before publishing)

**Also add a line about the tutor directory system**, since that's the active operational focus right now:
```
Now running a full tutor directory and vetting pipeline — document
check, video/voice intro, and CBT quiz — connecting verified tutors
with students across Lagos for in-person and online tutoring.
```

**Optional addition:** mention the Vibe Coding summer program (Aug 31 start) if you want portfolio visitors to be able to discover/join it.

---

## 4. `projects.html` — New Project Cards to Add

You've shipped four projects since the site was last touched that aren't listed anywhere:

### CampusAlert
```
Title: CampusAlert
Tag: The Forge 2026
Description: A campus safety and infrastructure reporting platform
built with Zeroday, letting students flag safety issues and broken
infrastructure in real time.
Stack: Django, React/Vite, PostgreSQL
Link: https://campusalert-ten.vercel.app
```

### Bridgr
```
Title: Bridgr
Tag: OPay Innovation Challenge
Description: A multi-currency cross-border payment platform
targeting the UK/US → Nigeria/Ghana remittance corridor, built to
make sending money home faster and cheaper.
Stack: Django, PostgreSQL, Payment APIs
Link: (add live/demo link if available)
```

### AgriVoice
```
Title: AgriVoice
Tag: Wetech AI Hackathon
Description: A multilingual voice-AI assistant for Nigerian farmers,
accessible via phone/USSD — built for low-literacy, low-connectivity
users who need agricultural guidance without needing a smartphone.
Stack: Django, Voice AI, USSD integration
Link: (add live/demo link if available)
```

### iHaveLight
```
Title: iHaveLight
Tag: Near Launch
Description: A hyperlocal electricity-access marketplace connecting
Lagos solar/inverter hosts with neighbors who need a place to charge
devices or work. Built with Paystack-powered wallet escrow, NIN
verification, and tiered listing types (Drop & Go vs Private Space).
Trademark filed via UNILAG's ITMO.
Stack: Django, React/Vite, Paystack API
Link: (add waitlist or landing page link)
```

> Note: you'll need actual screenshots for these (same as the other cards use `images/projectname.png`). Grab a screenshot of each live app/demo and drop it in `/images/`.

---

## 5. `index.html` or `about.html` — Zeroday mention

Your team isn't referenced anywhere despite leading it across 4+ hackathons this year. Worth one line, either in the About section or as a small "Team" note near the hackathon story section:

```
Most of my recent hackathon work is built with Zeroday, a team I
lead across competitions — CampusAlert, Bridgr, AgriVoice, and more.
```

---

## 6. `index.html` — "Latest Experience" section

Currently spotlights Squad Hackathon/OjaPass (77th place) as the headline story. With an actual **award win** now on record, consider either:

- **Option A:** Replace this section's headline story with the IED 2026 / LagSciPrep win
- **Option B:** Keep OjaPass as "first hackathon" story but add a second highlight block above it for IED 2026, since that's more recent and a win (not just a ranking)

**Draft copy for IED 2026 block:**
```
🏆 IED 2026 · Best Innovative Project · Lagos, Nigeria

### LagSciPrep Won Best Innovative Project at IED 2026

What started as a CBT tool for UNILAG science students turned into
an award-winning platform — recognized for its impact on how
students prepare for exams. The win opened doors, including a
conversation with Delta40 Venture Studio about where LagSciPrep
goes next.
```
(Cut the Delta40 line if you'd rather keep that private until something's confirmed.)

---

## Priority order (if you want to do this in stages)

1. IED 2026 win — hero badge + Latest Experience section (highest impact, quick edit)
2. Updated LagSciPrep + Tutorial Haven stats (quick edit, just numbers)
3. New project cards: CampusAlert, Bridgr, AgriVoice, iHaveLight (needs screenshots — takes longest)
4. Zeroday mention (quick, optional)

---

## Where these live in your file structure (based on the site)

- `index.html` — homepage: hero, featured projects, latest experience, about, skills
- `about.html` — full About page
- `projects.html` — full projects list
- `skills.html` — skills page
- `contact.html` — contact page
- `images/` — where your project screenshots live (e.g. `images/Tutorial-Haven.png`)
