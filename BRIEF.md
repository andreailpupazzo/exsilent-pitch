# ExSilent Ytango Mix — Pitch Site

Brief for Claude Code. Read this whole file before writing any code.

---

## 0. Skills — use them, do not improvise

Before writing anything, list the skills available in this session and use the
ones that apply. Specifically:

- **Any frontend design or aesthetic skill.** Load it before writing a single line
  of CSS and follow it. Section 3 of this brief sets the constraints; the skill
  sets the craft. If they disagree on craft, the skill wins. If they disagree on
  content or numbers, this brief wins.
- **The pitch-grilling skill ("grill me") or any adversarial-review skill.** Run it
  at the end of phase 2, with section 4 as the material and the three board
  members in section 1 as the audience. Fix whatever it breaks before adding any
  motion. A beautiful page with a weak argument loses this pitch.
- **Any copywriting or editorial skill.** Use it to tighten only. Do not rewrite
  the copy in section 4: it is final and every figure in it is verified against
  the case.

Tell me which skills you loaded and what each one changed.

---

## 1. What this is

A single-page scrollytelling website that presents a go-to-market strategy for
**ExSilent**, a Dutch hearing-aid manufacturer entering the UK private market with
the **Ytango Mix**.

It is a pitch delivered as a website, not a brochure and not a slide export. The
reader scrolls once, top to bottom, and arrives at a specific ask.

**Audience:** a board of directors. Three people, three different things they care
about:

- CEO — wants coherence and a clear "why". Values competence.
- Marketing director — wants clear goals reached through clear methods.
- Sales manager — wants a clear B2B channel strategy and a conversion rate he can move.

**The job of the page:** make the board say yes to funding one city for one year.

**Tone:** confident, specific, numerate. No marketing fluff, no stock-phrase
transitions. Every claim carries a number or a named source.

---

## 2. Stack

- Next.js 15, App Router, TypeScript, `src/` directory
- Tailwind CSS v4
- `framer-motion` for scroll-triggered reveals and sticky sequences
- `lenis` for smooth scrolling
- No database, no auth, no API routes. Everything is static.
- Deploy: Vercel, auto on push to `main`

Keep dependencies to those four. Do not add a UI kit, an icon library with
thousands of glyphs, or an animation library beyond framer-motion. Draw the few
icons needed inline as SVG.

**Later, if ever needed:** Supabase only becomes relevant if the booking form
should actually store leads or the hearing-test results should be saved. Until
then the form is a visual element with a disabled submit and a note.

---

## 3. Design direction

This is a premium consumer-technology brand for affluent, active people aged 56+
who travel. It must read as **travel and audio**, never as **medical**. If a
section starts to look like a clinic or a pharmacy, it is wrong.

- **Mood:** dark, editorial, spacious. Think a high-end headphone brand or an
  expedition outfitter, not a hearing-aid catalogue.
- **Palette:** define 5 or 6 tokens in `:root`. A deep near-black base with a
  slight warm bias, two greys, an off-white for text, and ONE accent. Pick an
  accent that reads as warm signal rather than clinical blue. Commit to a single
  dark theme and set every colour explicitly, including `color-scheme: dark`.
- **Type:** one display face used large and sparingly, one body face. Link from
  Google Fonts with a real fallback stack. Running text near 65 characters.
  `text-wrap: balance` on headings. `font-variant-numeric: tabular-nums` on all
  figures.
- **Accessibility matters here specifically**, because the audience is 56+: body
  text no smaller than 17px, generous line height, high contrast, visible focus
  states, and respect `prefers-reduced-motion` on every animation.
- **No photographs of people.** Use typography, colour, motion and canvas
  graphics. If imagery is wanted later it must be properly licensed.
- Avoid: purple-to-blue gradient heroes, Inter as the display face, emoji as
  section markers, the same rounded card repeated everywhere, everything centred.

### Motion

Effects should feel engineered, not decorative. Budget them:

- **Hero:** a canvas sound-wave that responds to scroll. Starts as a dense,
  noisy, chaotic waveform and resolves into a clean one as the user scrolls the
  first screen. This is the product thesis rendered as motion. Pause it under
  `prefers-reduced-motion` and show the resolved state.
- **Journey section:** sticky viewport, the seven stages advance as the user
  scrolls through a tall container.
- **Numbers section:** figures count up once on entry, bars grow once. Never loop.
- Everything else: short fade-and-rise reveals, 300 to 500 ms, staggered. One
  reveal pattern reused everywhere, not a different one per section.
- Everything meaningful must be readable at rest. Nothing starts at opacity 0
  waiting for an observer that might not fire.

---

## 4. Page structure and content

Use this copy. It is final. Do not rewrite it, do not add filler paragraphs.

### 4.1 Hero

- Eyebrow: `ExSilent · Ytango Mix · UK private market`
- Headline: **Your best years, heard in full.**
- Subline: The world's first hearing aid with the microphone and receiver in the
  canal. It sounds like hearing, not like a hearing aid.
- Scroll cue.
- Behind it: the canvas waveform described above.

### 4.2 The problem

Two blocks side by side at desktop, stacked on mobile.

**The market problem**
- 2,407,653 hearing aids were supplied in the UK in 2025.
- 78% of them came free from the NHS.
- Five companies make 99% of the world's hearing aids.
- Nobody has heard of us.

**The human problem**
> A hearing aid is the first object most people buy that tells them they are
> getting old. That is why they wait years.

Pull quote, full width, large:
> **Everything worth hearing happens in a noisy room.**

### 4.3 Who we are for

The only two segments in this market that will buy from a brand they have never
heard of.

**Spirited Forerunners** — 3.8m people, 56+ but they feel 53. 42% have hearing
problems. 25% are open to a new brand, against a market average of 13%. World
explorers, early adopters, they invest in their health regardless of price. They
delay until they really need one, then decide in weeks. 21,546 expected buyers in
year one, more than any other segment.

**Fashion Baby-boomers** — 4.2m people, 56+ but they feel 44. 48% have hearing
problems, the highest of all seven segments. 21% are open to a new brand, which
is the largest open group in the market at 423,360 people. Stylish, social,
ageless. They pay for design even from a brand they do not know. 17,781 expected
buyers in year one.

Summary strip, as four stat tiles:
- `15%` of UK adults
- `34%` of expected buyers
- `39,327` buyers in year one
- `22.8%` openness, against a 13% market average

Closing line: Size is not market. Waiting Elderly contain 5,250,000 people with
hearing loss and produce fewer buyers than a segment less than half their size.

### 4.4 Why they buy

Four proof points. One is the claim, three are the evidence.

1. **MaRiC** — the world's first hearing aid with microphone and receiver in the
   canal. Nothing to see, and nothing that sounds processed.
2. **Nano-coating** — rain, sweat and dust do not stop it. It travels.
3. **AirTap** — a pat on the ear changes the setting, without stopping the
   conversation.
4. **Five colours** — chosen like a pair of frames, not prescribed like a device.

Then, separately and visually distinct, the business model element:
**€500 once, then €14 a month.** Remote tuning anywhere in the world, software
updates sent straight to the device, early access to what comes next.

### 4.5 The restaurant test (interactive)

The centrepiece. Build it as a working demo, not a mock-up.

A card with a short sentence hidden from view, a **Play** button and two modes.

- **Mode 1 — "In a noisy restaurant":** play the sentence using the browser
  `speechSynthesis` API at low volume (`utterance.volume = 0.3`, `rate = 1.05`)
  while a Web Audio graph plays generated restaurant noise at high gain.
  Build the noise from a looping buffer of brown noise, plus two or three
  band-passed modulated layers that suggest babble. Then show four possible
  sentences and ask the user which one they heard. Most people get it wrong.
- **Mode 2 — "With the Ytango Mix":** same sentence, `utterance.volume = 1`,
  noise gain dropped to roughly 15%. The sentence is now obvious. Reveal the
  correct answer.
- Caption underneath: a hearing aid does not make the world louder, it changes
  the ratio between the voice you want and the noise you do not.

Requirements:
- Audio only ever starts from a user click, never on load.
- If `speechSynthesis` or `AudioContext` is unavailable, fall back to a visual
  version: the sentence rendered with letters progressively replaced by blanks in
  mode 1, complete in mode 2. The section must work with the sound off.
- A visible mute control, and stop all audio when the section leaves the viewport.
- Keep all audio code in one client component, cleaned up on unmount.

### 4.6 The journey

Sticky section, seven stages, advancing on scroll. For each: stage name, what the
customer needs, what we do.

1. **Trigger** — he waited until hearing loss started limiting his travels.
   A three-minute online test, at home, not in a clinic.
2. **Orientation** — he assumes the big brands are better. Independent
   measurements against the Big Five, in tech and travel media, close to the
   decision.
3. **Proof** — he will not trust a brand he does not know. He hears MaRiC against
   a Big Five aid in the chair, before he pays.
4. **Fitting** — an independent audiologist, appointment within 48 hours, not a
   chain owned by a competitor.
5. **Purchase** — same visit, no second decision. He walks out hearing before his
   next trip.
6. **Use** — "From a busy market abroad to dinner with new friends, I catch every
   word." This is where the value is actually created.
7. **Service and referral** — remote tuning anywhere in the world. We ask for the
   recommendation once, after the first trip that worked.

### 4.7 Go to market

Headline: **We cannot buy attention. We can buy density.**

Body: Five companies own 99% of this market and can outspend us on media without
noticing. So we do not compete for awareness. We concentrate distribution until
our customers start meeting each other, and let them do the selling.

Three channel cards, with their budget:
- **Partners — €100,000.** 20 to 25 independent audiologists across three metro
  clusters. Postcode exclusivity for 18 months, a share of the monthly service so
  they care about month twelve, and an ExSilent specialist working alongside them
  for the first 90 days.
- **Website — €100,000.** The verification channel. The three-minute test, the
  independent measurements, and a bookable slot within 48 hours.
- **Platform — €200,000.** The app and the €14 service. Remote tuning, updates,
  upgrades, and the one moment where we ask for a referral.

Note below: €100,000 of the €500,000 budget is deliberately unspent. The only
channel that would absorb it is mass media, and half a million in UK mass media
against companies this size buys invisibility.

### 4.8 The numbers

The section that decides the pitch. Animated bar or area chart plus a table.

| Year | New customers | Installed base | Revenue |
|------|---------------|----------------|---------|
| 1 | 1,966 | 1,966 | €1.31m |
| 2 | 2,753 | 4,621 | €2.15m |
| 3 | 3,539 | 7,929 | €3.10m |
| 4 | 4,326 | 11,859 | €4.16m |
| 5 | 5,113 | 16,379 | €5.31m |

Five-year revenue €16.0m, of which €7.2m is recurring service. By year five, 52%
of revenue is money already earned.

Then the key panel, visually the strongest thing on the page:

> **We double sales without growing.**
> Hold market share flat at 5% for five years and never gain a single point.
> Year five still returns €2.48m against €1.31m in year one, because every
> customer keeps paying €168 a year. Everything above that is upside.

Unit economics strip: acquisition cost €254 in year one, five-year customer value
€1,340, a ratio of 5.3. If word of mouth works, acquisition cost falls below €100
by year five on the same budget.

Assumptions, in small print, visible and not hidden behind a toggle: 39,327
expected buyers a year in the two target segments, held flat; €500 device and
€168 a year of service; 5% annual churn on the installed base; share rising from
5% to 13%.

### 4.9 Lessons learned

Three short blocks. Keep the honesty; it is the point.

1. **We hunted the biggest segment first.** Waiting Elderly hold 5.25 million
   people with hearing loss and produce fewer buyers than a segment less than half
   their size. Size is not market.
2. **We designed a free trial, then cut it.** A free week is a cost. A word from a
   peer is free and more convincing.
3. **We wanted national coverage.** We cut it to three cities, because below a
   certain density our customers never meet each other and word of mouth never
   starts.

### 4.10 The questions you are about to ask

Four objections, each with its answer. Lay them out as a two-column list or an
accordion that is open at rest. This section exists to show the board we already
know what they will say.

**"Where is the portfolio diversification? You have one product."**
We diversify revenue, not SKUs. One device, four revenue lines: the device, the
monthly service, upgrades, travel accessories. A small company that adds products
adds complexity; one that adds recurring revenue adds resilience. The service
platform is also the infrastructure on which a second product, later, costs us
almost nothing to launch.

**"How do I raise conversion from the hearing specialist?"**
Three levers, and they are yours to pull. Postcode exclusivity, so he is not
comparing us with the product on the shelf beside us. A share of the €14 a month,
so he cares about month twelve. And one of our specialists working beside him for
the first 90 days, because a salesperson pitching a radical innovation alone
carries the personal risk of looking foolish, and most will not take it.

**"What if one of the Big Five copies MaRiC?"**
They will. Which is why the moat is not the device. It is the installed base
paying every month and the exclusivity agreements with the audiologists. The
technology buys us time. The service buys us the annuity.

**"Three cities is not a UK strategy."**
Not yet. It is a learning plan. We scale when revenue per practice is
predictable, not when the calendar says so. Expanding a channel before that point
is the standard way a small company burns its cash.

### 4.11 The ask

Full-screen closing section.

> We are not asking for a national launch.
> **One city. Twenty-five audiologists. One year. €500,000.**
> Judge us on one number: conversion from first fitting to purchase.
> Clear 40% in twelve months and you fund the second city.
> Miss it and you have lost one city, not a rollout.

Closing line, large: **Will you give us the first city?**

Footer: ExSilent Ytango Mix · Marketing & Sales Innovation Game · Copenhagen
Business School · Team 3. Figures from the UK market booklet supplied with the
case.

---

## 5. Build order

1. Tokens, fonts, layout shell, and the single reveal component, using the design
   skill. Commit.
2. All sections with real copy, static, no motion. Read the whole page once at
   this point and fix anything cramped or unreadable. **Then run the
   pitch-grilling skill against the finished copy, as the board in section 1, and
   fix the argument before going further.** Commit.
3. Motion: hero canvas, sticky journey, counting numbers. Commit.
4. The restaurant test last, because it is the only part that can fail on a
   given machine. Build the visual fallback before the audio path. Commit.

Deploy after step 2 so there is always a working URL.

## 6. Checks before each deploy

- Reads correctly at 390px wide with no sideways scroll.
- Works with sound blocked and with `prefers-reduced-motion` on.
- Every number on the page matches the tables in this brief.
- Keyboard focus is visible on every control.
- Nothing is stuck invisible waiting for a scroll event.
