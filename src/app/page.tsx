import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const years = [
  { y: 1, n: "1,966", base: "1,966", rev: 1.31 },
  { y: 2, n: "2,753", base: "4,621", rev: 2.15 },
  { y: 3, n: "3,539", base: "7,929", rev: 3.1 },
  { y: 4, n: "4,326", base: "11,859", rev: 4.16 },
  { y: 5, n: "5,113", base: "16,379", rev: 5.31 },
];

const journey = [
  ["Trigger", "He waited until hearing loss started limiting his travels.", "A three-minute online test, at home, not in a clinic."],
  ["Orientation", "He assumes the big brands are better.", "Independent measurements against the Big Five, in tech and travel media, close to the decision."],
  ["Proof", "He will not trust a brand he does not know.", "He hears MaRiC against a Big Five aid in the chair, before he pays."],
  ["Fitting", "An independent audiologist.", "Appointment within 48 hours, not a chain owned by a competitor."],
  ["Purchase", "Same visit, no second decision.", "He walks out hearing before his next trip."],
  ["Use", "“From a busy market abroad to dinner with new friends, I catch every word.”", "This is where the value is actually created."],
  ["Service and referral", "Remote tuning anywhere in the world.", "We ask for the recommendation once, after the first trip that worked."],
];

const objections = [
  ["“Where is the portfolio diversification? You have one product.”", "We diversify revenue, not SKUs. One device, four revenue lines: the device, the monthly service, upgrades, travel accessories. A small company that adds products adds complexity; one that adds recurring revenue adds resilience. The service platform is also the infrastructure on which a second product, later, costs us almost nothing to launch."],
  ["“How do I raise conversion from the hearing specialist?”", "Three levers, and they are yours to pull. Postcode exclusivity, so he is not comparing us with the product on the shelf beside us. A share of the €14 a month, so he cares about month twelve. And one of our specialists working beside him for the first 90 days, because a salesperson pitching a radical innovation alone carries the personal risk of looking foolish, and most will not take it."],
  ["“What if one of the Big Five copies MaRiC?”", "They will. Which is why the moat is not the device. It is the installed base paying every month and the exclusivity agreements with the audiologists. The technology buys us time. The service buys us the annuity."],
  ["“Three cities is not a UK strategy.”", "Not yet. It is a learning plan. We scale when revenue per practice is predictable, not when the calendar says so. Expanding a channel before that point is the standard way a small company burns its cash."],
];

function Wave({ className = "" }: { className?: string }) {
  // Resolved state of the hero waveform (scroll-driven canvas arrives in phase 3).
  const pts = Array.from({ length: 241 }, (_, i) => {
    const x = (i / 240) * 1200;
    const y = 150 + Math.sin(i / 8) * 90 * Math.sin((i / 240) * Math.PI);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden className={className}>
      <polyline points={pts} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function Stat({ v, l, className = "" }: { v: string; l: string; className?: string }) {
  return (
    <div className={`card flex flex-col justify-between gap-10 ${className}`}>
      <dd className="display t-3 num">{v}</dd>
      <dt className="muted">{l}</dt>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Top bar */}
      <div className="wrap flex items-center justify-between py-5">
        <span className="display text-xl">ExSilent</span>
        <a href="#ask" className="pill py-2.5 text-[0.95rem]">The ask</a>
      </div>

      {/* 4.1 Hero */}
      <header className="wrap pb-[var(--section-space)] pt-[clamp(2rem,6vw,5rem)]">
        <div className="flex flex-col gap-7">
          <p className="eyebrow">ExSilent · Ytango Mix · UK private market</p>
          <h1 className="t-4 max-w-[12ch]">Your best years, heard in&nbsp;full.</h1>
          <p className="t-1 muted">The world&rsquo;s first hearing aid with the microphone and receiver in the canal. It sounds like hearing, not like a hearing aid.</p>
          <a href="#problem" className="pill mt-2 w-fit">Scroll <span aria-hidden>↓</span></a>
        </div>
        <div className="card-signal mt-[clamp(3rem,6vw,5rem)] overflow-hidden rounded-[var(--radius)]">
          <Wave className="block h-[clamp(12rem,28vw,22rem)] w-full text-ink" />
        </div>
      </header>

      {/* 4.2 Problem */}
      <Section id="problem" eyebrow="The problem" title="Nobody has heard of us.">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="card flex flex-col gap-8">
            <span className="chip">The market problem</span>
            <dl className="grid gap-6">
              <div><dd className="display t-2 num">2,407,653</dd><dt className="muted">hearing aids were supplied in the UK in 2025.</dt></div>
              <div><dd className="display t-2 num">78%</dd><dt className="muted">of them came free from the NHS.</dt></div>
              <div><dd className="display t-2 num">99%</dd><dt className="muted">of the world&rsquo;s hearing aids are made by five companies.</dt></div>
            </dl>
          </Reveal>
          <Reveal step={1} className="card card-ink flex flex-col justify-between gap-8">
            <span className="chip">The human problem</span>
            <blockquote className="display t-2">A hearing aid is the first object most people buy that tells them they are getting old. That is why they wait years.</blockquote>
          </Reveal>
        </div>
        <Reveal>
          <blockquote className="display t-3 mt-[clamp(4rem,9vw,7rem)] max-w-[20ch]">Everything worth hearing happens in a <span className="text-signal">noisy room.</span></blockquote>
        </Reveal>
      </Section>

      {/* 4.3 Segments */}
      <Section id="segments" eyebrow="Who we are for" title="Two segments that will buy from a brand they have never heard of." lede="The only two in this market.">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="card card-ink flex flex-col gap-6">
            <span className="chip">3.8m people · 56+ but they feel 53</span>
            <h3 className="t-2">Spirited Forerunners</h3>
            <p className="muted">42% have hearing problems. 25% are open to a new brand, against a market average of 13%. World explorers, early adopters, they invest in their health regardless of price. They delay until they really need one, then decide in weeks.</p>
            <p className="mt-auto"><span className="display t-3 num block">21,546</span><span className="muted">expected buyers in year one, more than any other segment.</span></p>
          </Reveal>
          <Reveal step={1} className="card card-signal flex flex-col gap-6">
            <span className="chip">4.2m people · 56+ but they feel 44</span>
            <h3 className="t-2">Fashion Baby-boomers</h3>
            <p className="muted">48% have hearing problems, the highest of all seven segments. 21% are open to a new brand, which is the largest open group in the market at 423,360 people. Stylish, social, ageless. They pay for design even from a brand they do not know.</p>
            <p className="mt-auto"><span className="display t-3 num block">17,781</span><span className="muted">expected buyers in year one.</span></p>
          </Reveal>
        </div>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat v="15%" l="of UK adults" />
          <Stat v="34%" l="of expected buyers" />
          <Stat v="39,327" l="buyers in year one" />
          <Stat v="22.8%" l="openness, against a 13% market average" />
        </dl>
        <p className="t-1 mt-12"><strong className="font-semibold">Size is not market.</strong> <span className="muted">Waiting Elderly contain 5,250,000 people with hearing loss and produce fewer buyers than a segment less than half their size.</span></p>
      </Section>

      {/* 4.4 Why they buy */}
      <Section id="why" eyebrow="Why they buy" title="One claim, three pieces of evidence.">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="card card-ink flex flex-col justify-between gap-10 md:col-span-3 md:flex-row md:items-end">
            <div className="flex flex-col gap-4">
              <span className="chip">The claim</span>
              <h3 className="t-3">MaRiC</h3>
            </div>
            <p className="t-1 md:max-w-[34ch]">The world&rsquo;s first hearing aid with microphone and receiver in the canal. Nothing to see, and nothing that sounds processed.</p>
          </Reveal>
          {[
            ["Nano-coating", "Rain, sweat and dust do not stop it. It travels."],
            ["AirTap", "A pat on the ear changes the setting, without stopping the conversation."],
            ["Five colours", "Chosen like a pair of frames, not prescribed like a device."],
          ].map(([h, b], i) => (
            <Reveal key={h} step={i} className="card flex flex-col gap-4">
              <span className="chip">Evidence</span>
              <h3 className="t-2">{h}</h3>
              <p className="muted">{b}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="card card-signal mt-4 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Business model</p>
            <p className="display t-3 num">€500 once, then €14 a&nbsp;month.</p>
          </div>
          <p className="muted">Remote tuning anywhere in the world, software updates sent straight to the device, early access to what comes next.</p>
        </Reveal>
      </Section>

      {/* 4.5 Restaurant test — static visual version; audio arrives in phase 4 */}
      <Section id="test" eyebrow="The restaurant test" title="Can you hear it?">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card flex flex-col gap-6">
            <span className="chip">In a noisy restaurant</span>
            <p className="display t-2 num">Th_ f_r_y t_ N_x_s l_a_es at t_n p_st s_v_n.</p>
            <fieldset className="flex flex-col gap-3">
              <legend className="muted mb-3">Which sentence did you hear?</legend>
              {["The ferry to Naxos leaves at ten past seven.", "The fairy to Naxos leaves at ten past eleven.", "The very best taxis leave at ten to seven.", "The ferry to Lesbos leaves at twenty past seven."].map((s, i) => (
                <label key={s} className="flex items-center gap-3 rounded-full bg-paper px-5 py-3"><input type="radio" name="heard" id={`heard-${i}`} disabled /> {s}</label>
              ))}
            </fieldset>
          </div>
          <div className="card card-ink flex flex-col gap-6">
            <span className="chip">With the Ytango Mix</span>
            <p className="display t-2">The ferry to Naxos leaves at ten past seven.</p>
            <p className="mt-auto t-1 muted">A hearing aid does not make the world louder, it changes the ratio between the voice you want and the noise you do not.</p>
          </div>
        </div>
      </Section>

      {/* 4.6 Journey */}
      <Section id="journey" eyebrow="The journey" title="Seven stages, from first doubt to first referral.">
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {journey.map(([stage, need, act], i) => (
            <Reveal as="li" key={stage} step={i % 3} className={`card flex flex-col gap-4 ${i === 5 ? "card-signal" : ""} ${i === 6 ? "lg:col-span-3 card-ink" : ""}`}>
              <span className="display t-2 num text-signal">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t-1 font-bold">{stage}</h3>
              <p className="muted">{need}</p>
              <p>{act}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 4.7 Go to market */}
      <Section id="gtm" eyebrow="Go to market" title="We cannot buy attention. We can buy density." lede="Five companies own 99% of this market and can outspend us on media without noticing. So we do not compete for awareness. We concentrate distribution until our customers start meeting each other, and let them do the selling.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Partners", "€100,000", "20 to 25 independent audiologists across three metro clusters. Postcode exclusivity for 18 months, a share of the monthly service so they care about month twelve, and an ExSilent specialist working alongside them for the first 90 days.", ""],
            ["Website", "€100,000", "The verification channel. The three-minute test, the independent measurements, and a bookable slot within 48 hours.", ""],
            ["Platform", "€200,000", "The app and the €14 service. Remote tuning, updates, upgrades, and the one moment where we ask for a referral.", "card-ink"],
          ].map(([h, b, t, c], i) => (
            <Reveal key={h} step={i} className={`card flex flex-col gap-5 ${c}`}>
              <span className="chip">{h}</span>
              <p className="display t-3 num">{b}</p>
              <p className="muted">{t}</p>
            </Reveal>
          ))}
        </div>
        <div className="card mt-4 grid gap-6 border-2 border-dashed border-[#d9d5d0] bg-paper md:grid-cols-[auto_1fr] md:items-center md:gap-12">
          <p className="display t-3 num text-stone">€100,000</p>
          <p className="muted">of the €500,000 budget is deliberately unspent. The only channel that would absorb it is mass media, and half a million in UK mass media against companies this size buys invisibility.</p>
        </div>
      </Section>

      {/* 4.8 Numbers */}
      <Section id="numbers" eyebrow="The numbers" title="€16.0m in five years." lede={<>Of which <strong className="text-ink">€7.2m</strong> is recurring service. By year five, <strong className="text-ink">52%</strong> of revenue is money already earned.</>}>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <figure className="card flex flex-col gap-6">
            <figcaption className="muted t--1">Revenue by year, € millions</figcaption>
            <div className="flex h-72 items-end gap-[clamp(0.5rem,2vw,1.25rem)]">
              {years.map((r) => (
                <div key={r.y} className="flex h-full flex-1 flex-col justify-end gap-2 text-center">
                  <span className="num t--1 font-semibold">€{r.rev.toFixed(2)}m</span>
                  <div className={`rounded-xl ${r.y === 5 ? "bg-signal" : "bg-ink"}`} style={{ height: `${(r.rev / 5.31) * 78}%` }} />
                  <span className="num muted t--1">Y{r.y}</span>
                </div>
              ))}
            </div>
          </figure>
          <div className="card table-wrap">
            <table>
              <thead><tr><th>Year</th><th>New customers</th><th>Installed base</th><th>Revenue</th></tr></thead>
              <tbody>
                {years.map((r) => (
                  <tr key={r.y}><td>{r.y}</td><td>{r.n}</td><td>{r.base}</td><td className="font-semibold">€{r.rev.toFixed(2)}m</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Reveal className="card card-ink mt-4 flex flex-col gap-8 py-[clamp(2.5rem,7vw,6rem)]">
          <span className="chip">The key number</span>
          <h3 className="t-4 max-w-[14ch]">We double sales without <span className="text-signal">growing.</span></h3>
          <p className="t-1 muted">Hold market share flat at 5% for five years and never gain a single point. Year five still returns <strong className="num text-paper">€2.48m</strong> against <strong className="num text-paper">€1.31m</strong> in year one, because every customer keeps paying <strong className="num text-paper">€168</strong> a year. Everything above that is upside.</p>
        </Reveal>

        <dl className="mt-4 grid gap-4 md:grid-cols-3">
          <Stat v="€254" l="acquisition cost, year one" />
          <Stat v="€1,340" l="five-year customer value" />
          <Stat v="5.3" l="ratio of customer value to acquisition cost" className="card-signal" />
        </dl>
        <p className="mt-8">If word of mouth works, acquisition cost falls below <strong className="num">€100</strong> by year five on the same budget.</p>
        <p className="t--1 muted mt-6">Assumptions: 39,327 expected buyers a year in the two target segments, held flat; €500 device and €168 a year of service; 5% annual churn on the installed base; share rising from 5% to 13%.</p>
      </Section>

      {/* 4.9 Lessons */}
      <Section id="lessons" eyebrow="Lessons learned" title="Three things we got wrong first.">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["We hunted the biggest segment first.", "Waiting Elderly hold 5.25 million people with hearing loss and produce fewer buyers than a segment less than half their size. Size is not market."],
            ["We designed a free trial, then cut it.", "A free week is a cost. A word from a peer is free and more convincing."],
            ["We wanted national coverage.", "We cut it to three cities, because below a certain density our customers never meet each other and word of mouth never starts."],
          ].map(([h, b], i) => (
            <Reveal as="li" key={h} step={i} className="card flex flex-col gap-4">
              <span className="display t-2 num text-signal">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t-1 font-bold">{h}</h3>
              <p className="muted">{b}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 4.10 Objections */}
      <Section id="questions" eyebrow="Your questions" title="The questions you are about to ask.">
        <div className="grid gap-4">
          {objections.map(([q, a]) => (
            <Reveal key={q} className="card grid gap-4 md:grid-cols-2 md:gap-12">
              <h3 className="t-1 font-bold">{q}</h3>
              <p className="muted">{a}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4.11 Ask */}
      <section id="ask" aria-labelledby="ask-t" className="wrap pb-6">
        <div className="card card-ink flex min-h-[85vh] flex-col justify-center gap-8 py-[clamp(4rem,10vw,8rem)]">
          <p className="t-1 muted">We are not asking for a national launch.</p>
          <p className="display t-3 num max-w-[20ch]">One city. Twenty-five audiologists. One year. <span className="text-signal">€500,000.</span></p>
          <p className="t-1 muted">Judge us on one number: conversion from first fitting to purchase. Clear <strong className="text-paper">40%</strong> in twelve months and you fund the second city. Miss it and you have lost one city, not a rollout.</p>
          <h2 id="ask-t" className="t-4 mt-8 max-w-[14ch]">Will you give us the first city?</h2>
        </div>
      </section>

      <footer className="wrap py-10 t--1 muted">
        <p>ExSilent Ytango Mix · Marketing &amp; Sales Innovation Game · Copenhagen Business School · Team 3. Figures from the UK market booklet supplied with the case.</p>
      </footer>
    </>
  );
}
