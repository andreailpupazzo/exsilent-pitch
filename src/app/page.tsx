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

function Wave() {
  // Resolved state of the hero waveform (canvas version arrives in phase 3).
  const pts = Array.from({ length: 241 }, (_, i) => {
    const x = (i / 240) * 1200;
    const y = 100 + Math.sin(i / 9) * 38 * Math.sin((i / 240) * Math.PI);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden className="absolute inset-x-0 bottom-0 h-40 w-full opacity-60">
      <polyline points={pts} fill="none" stroke="var(--sodium)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* 4.1 Hero */}
      <header className="relative overflow-hidden pb-48 pt-[clamp(5rem,14vh,9rem)]">
        <div className="shell">
          <div className="col-span-12 stack lg:col-span-10">
            <p className="eyebrow">ExSilent · Ytango Mix · UK private market</p>
            <h1 className="t-4">Your best years, heard in&nbsp;full.</h1>
            <p className="t-1 muted">The world&rsquo;s first hearing aid with the microphone and receiver in the canal. It sounds like hearing, not like a hearing aid.</p>
            <a href="#problem" className="t--1 mt-6 inline-flex w-fit items-center gap-3 text-bone">
              Scroll <span aria-hidden className="accent">↓</span>
            </a>
          </div>
        </div>
        <Wave />
      </header>

      {/* 4.2 Problem */}
      <Section id="problem" label="The problem">
        <div className="cols-2">
          <Reveal className="stack">
            <h2 className="t-2">The market problem</h2>
            <ul className="stack t-1">
              <li><span className="num accent">2,407,653</span> hearing aids were supplied in the UK in 2025.</li>
              <li><span className="num accent">78%</span> of them came free from the NHS.</li>
              <li>Five companies make <span className="num accent">99%</span> of the world&rsquo;s hearing aids.</li>
              <li>Nobody has heard of us.</li>
            </ul>
          </Reveal>
          <Reveal step={1} className="stack">
            <h2 className="t-2">The human problem</h2>
            <blockquote className="t-1 muted">A hearing aid is the first object most people buy that tells them they are getting old. That is why they wait years.</blockquote>
          </Reveal>
        </div>
        <Reveal>
          <blockquote className="display t-3 mt-24 max-w-[22ch]">Everything worth hearing happens in a noisy room.</blockquote>
        </Reveal>
      </Section>

      {/* 4.3 Segments */}
      <Section id="segments" label="Who we are for">
        <p className="t-2 display max-w-[30ch]">The only two segments in this market that will buy from a brand they have never heard of.</p>
        <div className="cols-2 mt-16">
          <Reveal className="stack">
            <h3 className="t-2">Spirited Forerunners</h3>
            <p className="num muted">3.8m people · 56+ but they feel 53</p>
            <p>42% have hearing problems. 25% are open to a new brand, against a market average of 13%. World explorers, early adopters, they invest in their health regardless of price. They delay until they really need one, then decide in weeks.</p>
            <p><span className="num accent t-1">21,546</span> expected buyers in year one, more than any other segment.</p>
          </Reveal>
          <Reveal step={1} className="stack">
            <h3 className="t-2">Fashion Baby-boomers</h3>
            <p className="num muted">4.2m people · 56+ but they feel 44</p>
            <p>48% have hearing problems, the highest of all seven segments. 21% are open to a new brand, which is the largest open group in the market at 423,360 people. Stylish, social, ageless. They pay for design even from a brand they do not know.</p>
            <p><span className="num accent t-1">17,781</span> expected buyers in year one.</p>
          </Reveal>
        </div>
        <dl className="cols-4 mt-20 rule pt-10">
          {[["15%", "of UK adults"], ["34%", "of expected buyers"], ["39,327", "buyers in year one"], ["22.8%", "openness, against a 13% market average"]].map(([v, l], i) => (
            <Reveal key={l} step={i} className="flex flex-col-reverse gap-2">
              <dt className="muted">{l}</dt>
              <dd className="display t-3 num">{v}</dd>
            </Reveal>
          ))}
        </dl>
        <p className="t-1 mt-16">Size is not market. Waiting Elderly contain 5,250,000 people with hearing loss and produce fewer buyers than a segment less than half their size.</p>
      </Section>

      {/* 4.4 Why they buy */}
      <Section id="why" label="Why they buy">
        <ol className="stack gap-12">
          {[
            ["MaRiC", "The world’s first hearing aid with microphone and receiver in the canal. Nothing to see, and nothing that sounds processed.", "The claim"],
            ["Nano-coating", "Rain, sweat and dust do not stop it. It travels.", "Evidence"],
            ["AirTap", "A pat on the ear changes the setting, without stopping the conversation.", "Evidence"],
            ["Five colours", "Chosen like a pair of frames, not prescribed like a device.", "Evidence"],
          ].map(([h, b, tag], i) => (
            <Reveal as="li" key={h} step={i} className={`grid gap-2 md:grid-cols-[14rem_1fr] md:gap-10 ${i === 0 ? "" : "rule pt-10"}`}>
              <div>
                <p className="eyebrow">{tag}</p>
                <h3 className={i === 0 ? "t-3" : "t-2"}>{h}</h3>
              </div>
              <p className={i === 0 ? "t-1" : ""}>{b}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="panel mt-20 p-[clamp(1.5rem,4vw,3rem)] stack">
          <p className="eyebrow">Business model</p>
          <p className="display t-3 num">€500 once, then €14 a&nbsp;month.</p>
          <p className="muted">Remote tuning anywhere in the world, software updates sent straight to the device, early access to what comes next.</p>
        </Reveal>
      </Section>

      {/* 4.5 Restaurant test — static visual version; audio arrives in phase 4 */}
      <Section id="test" label="The restaurant test">
        <div className="cols-2">
          <div className="stack">
            <p className="eyebrow">In a noisy restaurant</p>
            <p className="display t-2 num" aria-label="Sentence partly masked by noise">Th_ f_r_y t_ N_x_s l_a_es at t_n p_st s_v_n.</p>
            <fieldset className="stack t--1">
              <legend className="muted mb-2">Which sentence did you hear?</legend>
              {["The ferry to Naxos leaves at ten past seven.", "The fairy to Naxos leaves at ten past eleven.", "The very best taxis leave at ten to seven.", "The ferry to Lesbos leaves at twenty past seven."].map((s, i) => (
                <label key={s} className="flex gap-3"><input type="radio" name="heard" id={`heard-${i}`} disabled /> {s}</label>
              ))}
            </fieldset>
          </div>
          <div className="stack">
            <p className="eyebrow">With the Ytango Mix</p>
            <p className="display t-2">The ferry to Naxos leaves at ten past seven.</p>
          </div>
        </div>
        <p className="t-1 mt-16 muted">A hearing aid does not make the world louder, it changes the ratio between the voice you want and the noise you do not.</p>
      </Section>

      {/* 4.6 Journey */}
      <Section id="journey" label="The journey">
        <ol className="stack gap-0">
          {journey.map(([stage, need, act], i) => (
            <Reveal as="li" key={stage} className="rule grid gap-3 py-8 md:grid-cols-[4rem_14rem_1fr_1fr] md:gap-8">
              <span className="num accent t-1">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t-1 font-sans font-medium">{stage}</h3>
              <p className="muted">{need}</p>
              <p>{act}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 4.7 Go to market */}
      <Section id="gtm" label="Go to market">
        <h2 className="t-3">We cannot buy attention. We can buy density.</h2>
        <p className="t-1 mt-8 muted">Five companies own 99% of this market and can outspend us on media without noticing. So we do not compete for awareness. We concentrate distribution until our customers start meeting each other, and let them do the selling.</p>
        <div className="cols-3 mt-16">
          {[
            ["Partners", "€100,000", "20 to 25 independent audiologists across three metro clusters. Postcode exclusivity for 18 months, a share of the monthly service so they care about month twelve, and an ExSilent specialist working alongside them for the first 90 days."],
            ["Website", "€100,000", "The verification channel. The three-minute test, the independent measurements, and a bookable slot within 48 hours."],
            ["Platform", "€200,000", "The app and the €14 service. Remote tuning, updates, upgrades, and the one moment where we ask for a referral."],
          ].map(([h, b, t], i) => (
            <Reveal key={h} step={i} className="rule stack pt-8">
              <h3 className="t-2">{h}</h3>
              <p className="num accent t-1">{b}</p>
              <p>{t}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-12 muted"><span className="num text-bone">€100,000</span> of the €500,000 budget is deliberately unspent. The only channel that would absorb it is mass media, and half a million in UK mass media against companies this size buys invisibility.</p>
      </Section>

      {/* 4.8 Numbers */}
      <Section id="numbers" label="The numbers">
        <figure className="stack">
          <figcaption className="muted t--1">Revenue by year, € millions</figcaption>
          <div className="flex h-64 items-end gap-[clamp(0.5rem,3vw,2rem)]">
            {years.map((r) => (
              <div key={r.y} className="flex h-full flex-1 flex-col justify-end gap-2">
                <span className="num t--1">€{r.rev.toFixed(2)}m</span>
                <div className="bg-sodium" style={{ height: `${(r.rev / 5.31) * 80}%` }} />
                <span className="num muted t--1">Year {r.y}</span>
              </div>
            ))}
          </div>
        </figure>
        <div className="table-wrap mt-12">
          <table>
            <thead><tr><th>Year</th><th>New customers</th><th>Installed base</th><th>Revenue</th></tr></thead>
            <tbody>
              {years.map((r) => (
                <tr key={r.y}><td>{r.y}</td><td>{r.n}</td><td>{r.base}</td><td>€{r.rev.toFixed(2)}m</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="t-1 mt-10">Five-year revenue <span className="num accent">€16.0m</span>, of which <span className="num accent">€7.2m</span> is recurring service. By year five, <span className="num accent">52%</span> of revenue is money already earned.</p>

        <Reveal className="mt-20 bg-sodium p-[clamp(1.5rem,5vw,4rem)] text-basalt stack">
          <h2 className="t-3">We double sales without growing.</h2>
          <p className="t-1 max-w-[50ch]">Hold market share flat at 5% for five years and never gain a single point. Year five still returns <span className="num">€2.48m</span> against <span className="num">€1.31m</span> in year one, because every customer keeps paying <span className="num">€168</span> a year. Everything above that is upside.</p>
        </Reveal>

        <dl className="cols-3 mt-16">
          {[["€254", "acquisition cost, year one"], ["€1,340", "five-year customer value"], ["5.3", "value to cost ratio"]].map(([v, l]) => (
            <div key={l} className="rule flex flex-col-reverse gap-2 pt-6"><dt className="muted">{l}</dt><dd className="display t-3 num">{v}</dd></div>
          ))}
        </dl>
        <p className="mt-8">If word of mouth works, acquisition cost falls below <span className="num">€100</span> by year five on the same budget.</p>
        <p className="t--1 muted mt-10">Assumptions: 39,327 expected buyers a year in the two target segments, held flat; €500 device and €168 a year of service; 5% annual churn on the installed base; share rising from 5% to 13%.</p>
      </Section>

      {/* 4.9 Lessons */}
      <Section id="lessons" label="Lessons learned">
        <ol className="cols-3">
          {[
            ["We hunted the biggest segment first.", "Waiting Elderly hold 5.25 million people with hearing loss and produce fewer buyers than a segment less than half their size. Size is not market."],
            ["We designed a free trial, then cut it.", "A free week is a cost. A word from a peer is free and more convincing."],
            ["We wanted national coverage.", "We cut it to three cities, because below a certain density our customers never meet each other and word of mouth never starts."],
          ].map(([h, b], i) => (
            <Reveal as="li" key={h} step={i} className="rule stack pt-8">
              <span className="num accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t-1 font-sans font-medium">{h}</h3>
              <p className="muted">{b}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 4.10 Objections */}
      <Section id="questions" label="Your questions">
        <h2 className="t-3 mb-16">The questions you are about to ask</h2>
        <div className="stack gap-0">
          {objections.map(([q, a]) => (
            <Reveal key={q} className="rule grid gap-4 py-10 md:grid-cols-2 md:gap-12">
              <h3 className="t-1 display">{q}</h3>
              <p>{a}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4.11 Ask */}
      <section id="ask" className="section min-h-[90vh] content-center">
        <div className="shell">
          <div className="col-span-12 stack lg:col-span-10">
            <p className="t-1 muted">We are not asking for a national launch.</p>
            <p className="display t-3 num">One city. Twenty-five audiologists. One year. <span className="accent">€500,000.</span></p>
            <p className="t-1">Judge us on one number: conversion from first fitting to purchase.<br />Clear 40% in twelve months and you fund the second city.<br />Miss it and you have lost one city, not a rollout.</p>
            <h2 className="t-4 mt-16">Will you give us the first city?</h2>
          </div>
        </div>
      </section>

      <footer className="shell rule py-10 t--1 muted">
        <p className="col-span-12">ExSilent Ytango Mix · Marketing &amp; Sales Innovation Game · Copenhagen Business School · Team 3. Figures from the UK market booklet supplied with the case.</p>
      </footer>
    </>
  );
}
