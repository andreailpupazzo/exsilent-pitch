import { Reveal } from "@/components/Reveal";

/* Scroll story that follows the spoken pitch, beat by beat:
   Beginning (why / how / what) → Middle (ready, doubt, proof, model, channels, results, cost of waiting) → End (ask). */

function Wave({ className = "" }: { className?: string }) {
  const pts = Array.from({ length: 241 }, (_, i) => {
    const x = (i / 240) * 1200;
    const y = 150 + Math.sin(i / 8) * 90 * Math.sin((i / 240) * Math.PI);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden className={className}>
      <polyline className="wave-line wave-breathe" pathLength={1} points={pts} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function Beat({ id, eyebrow, title, children, className = "" }: { id: string; eyebrow: string; title: React.ReactNode; children?: React.ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className={`section ${className}`}>
      <div className="wrap">
        <div className="mb-[clamp(2.5rem,5vw,4rem)] flex flex-col gap-5">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-t`} className="t-3 max-w-[20ch]">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

/** Horizontal bar, drawn to scale against `max`. */
function Bar({ label, value, display, max, tone = "bg-ink" }: { label: string; value: number; display: string; max: number; tone?: string }) {
  return (
    <div className="grid gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <span className="muted">{label}</span>
        <span className="display t-2 num">{display}</span>
      </div>
      <div className="h-5 rounded-full bg-paper">
        <div className={`grow-x h-full rounded-full ${tone}`} style={{ width: `${(value / max) * 100}%` }} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="wrap flex items-center justify-between py-5">
        <span className="display text-xl">ExSilent</span>
        <a href="#ask" className="pill py-2.5 text-[0.95rem]">Our ask</a>
      </div>

      {/* BEGINNING */}
      <header className="wrap pb-[var(--section-space)] pt-[clamp(2rem,6vw,5rem)]">
        <div className="flex flex-col gap-7">
          <p className="eyebrow">ExSilent · Ytango Mix · UK private market</p>
          <h1 className="t-4 max-w-[13ch]">Their best years are still ahead.</h1>
          <p className="t-1 muted max-w-[40ch]">Spirited Forerunners believe it. Today, many of them miss half of those years, <strong className="text-ink">one conversation at a time.</strong></p>
        </div>
        <div className="card-signal mt-[clamp(3rem,6vw,5rem)] overflow-hidden rounded-[var(--radius)]">
          <Wave className="block h-[clamp(12rem,28vw,22rem)] w-full text-ink" />
        </div>
      </header>

      <Beat id="why" eyebrow="That is why we exist" title="Hearing should never hold anyone back from living fully.">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="card card-ink flex flex-col gap-5">
            <span className="chip">Why</span>
            <p className="t-1">Hearing should never hold anyone back from living fully.</p>
          </Reveal>
          <Reveal step={1} className="card flex flex-col gap-5">
            <span className="chip">How</span>
            <p className="t-1">The world&rsquo;s first behind-the-ear aid with microphone and receiver in the canal. It sounds like natural hearing.</p>
            <p className="muted">Sold through a process built for people who decide fast.</p>
          </Reveal>
          <Reveal step={2} className="card card-signal flex flex-col gap-5">
            <span className="chip">What</span>
            <p className="display t-2">The Ytango Mix, for the UK private market.</p>
          </Reveal>
        </div>
      </Beat>


      {/* CONTEXT — starting reasoning, from the UK market booklet */}
      <Beat id="context" eyebrow="Where we started" title="We play only where people pay for themselves.">
        <div className="grid gap-4">
          <Reveal className="card flex flex-col gap-8">
            <p className="muted t--1">UK hearing aids sold in 2025 · 2,407,653</p>
            <div className="grow-x flex h-14 overflow-hidden rounded-full" role="img" aria-label="NHS 78%, private 22%">
              <div className="flex w-[78%] items-center bg-ink pl-5 font-semibold text-paper">NHS 78%</div>
              <div className="flex w-[22%] items-center justify-center bg-signal font-semibold">22%</div>
            </div>
            <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              <div><dd className="display t-2 num">520,818</dd><dt className="muted">sold privately, where ExSilent sells</dt></div>
              <div><dd className="display t-2 num text-signal">+10%</dd><dt className="muted">private growth vs 2024</dt></div>
              <div><dd className="display t-2 num">16% → 22%</dd><dt className="muted">users buying privately, 2022 → 2025</dt></div>
              <div><dd className="display t-2 num">99%</dd><dt className="muted">of hearing aids made by the Big Five</dt></div>
            </dl>
          </Reveal>
        </div>
        <Reveal className="card card-ink mt-4 flex flex-col gap-6">
          <span className="chip">How we got to 21,546</span>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["3,800,000", "Spirited Forerunners"], ["1,596,000", "× 42% with hearing loss"], ["399,000", "× 25% open to a new brand"], ["21,546", "× 5.4% buying in year one"]].map(([v, l], i) => (
              <li key={l} className="flex flex-col gap-1">
                <span className={`display t-2 num ${i === 3 ? "text-signal" : ""}`}>{v}</span>
                <span className="muted">{l}</span>
              </li>
            ))}
          </ol>
          <p className="muted t--1">Source: UK market booklet, Marketing &amp; Sales Innovation Game, 2026.</p>
        </Reveal>
      </Beat>

      {/* MIDDLE */}
      <Beat id="ready" eyebrow="Forerunners are ready" title="Almost double the market is open to a new brand.">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="card flex flex-col gap-8">
            <p className="muted t--1">Open to a new hearing-aid brand</p>
            <Bar label="Spirited Forerunners" value={25} display="25%" max={25} tone="bg-signal" />
            <Bar label="UK market average" value={13} display="13%" max={25} />
          </Reveal>
          <Reveal step={1} className="card card-ink flex flex-col justify-between gap-8">
            <span className="chip">The largest segment in the UK</span>
            <p><span className="display t-4 num block">21,546</span><span className="muted">buyers</span></p>
          </Reveal>
        </div>
        <Reveal className="mt-[clamp(4rem,9vw,7rem)] flex flex-col gap-4">
          <p className="t-1 muted">They have one doubt. Big brands feel safer.</p>
          <p className="display t-3 max-w-[16ch]">So we do not argue. <span className="text-signal">We prove.</span></p>
        </Reveal>
      </Beat>

      <Beat id="proof" eyebrow="How we prove it" title="From doubt to fitted in three steps.">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["3 min", "Online test", "They hear a noisy restaurant and get a result.", ""],
            ["48 h", "Independent audiologist", "Fits the aid within 48 hours. Not a Big Five chain.", "card-ink"],
            ["Anywhere", "Remote tuning", "Works anywhere in the world, so they never plan a trip around a clinic again.", "card-signal"],
          ].map(([big, h, b, c], i) => (
            <Reveal as="li" key={h} step={i} className={`card flex flex-col gap-5 ${c}`}>
              <span className="chip">Step {i + 1}</span>
              <p className="display t-3 num">{big}</p>
              <h3 className="t-1 font-bold">{h}</h3>
              <p className="muted">{b}</p>
            </Reveal>
          ))}
        </ol>
      </Beat>

      <Beat id="model" eyebrow="The model is simple" title={<>€500 once. €14 a month. <span className="text-signal">No discounts.</span></>}>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="card flex flex-col gap-5">
            <span className="chip">Why no discounts</span>
            <p className="t-1">For this segment, price signals quality.</p>
          </Reveal>
          <Reveal step={1} className="card card-ink flex flex-col gap-5">
            <span className="chip">Audiologists share the service</span>
            <p className="t-1">So they care about <strong className="text-signal">month twelve</strong>, not just day one.</p>
          </Reveal>
        </div>
      </Beat>

      <Beat id="channels" eyebrow="Three channels" title="€400,000. Each channel has one job.">
        <Reveal className="card flex flex-col gap-8">
          <div className="grow-x flex h-14 overflow-hidden rounded-full" role="img" aria-label="Budget split: Website €100,000, Partners €100,000, Platform €200,000">
            <div className="flex w-1/4 items-center bg-mist pl-5 font-semibold outline outline-2 -outline-offset-2 outline-ink/15">25%</div>
            <div className="flex w-1/4 items-center bg-ink pl-5 font-semibold text-paper">25%</div>
            <div className="flex w-1/2 items-center bg-signal pl-5 font-semibold">50%</div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Website", "€100,000", "Verifies."],
              ["Partners", "€100,000", "Prove and sell."],
              ["Platform", "€200,000", "Keeps customers."],
            ].map(([h, v, job]) => (
              <div key={h} className="flex flex-col gap-2">
                <span className="muted">{h}</span>
                <span className="display t-2 num">{v}</span>
                <span className="t-1 font-semibold">{job}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Beat>

      <Beat id="results" eyebrow="Does it work?" title={<>Lifetime value up <span className="text-signal">53%</span> since round one.</>}>
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="card flex flex-col gap-8">
            <p className="muted t--1">Customer lifetime value, € millions</p>
            <Bar label="Round one" value={38} display="€38.0m" max={67} />
            <Bar label="Today · number one in the room" value={58.7} display="€58.7m" max={67} tone="bg-ink" />
            <Bar label="Lifespan pushed to 4 years" value={67} display="€67m" max={67} tone="bg-signal" />
          </Reveal>
          <Reveal step={1} className="card card-ink flex flex-col gap-6">
            <span className="chip">Where it comes from</span>
            <dl className="grid gap-5">
              <div><dd className="display t-2 num">41,700</dd><dt className="muted">customers</dt></div>
              <div><dd className="display t-2 num">€402</dd><dt className="muted">each, per year</dt></div>
              <div><dd className="display t-2 num">3.49 → 4 years</dd><dt className="muted">average stay, today and target</dt></div>
            </dl>
          </Reveal>
        </div>
        <Reveal className="card card-signal mt-4 grid gap-4 md:grid-cols-[auto_1fr] md:items-end md:gap-12">
          <p className="display t-4 num">+€8.5m</p>
          <p className="t-1">from customers we already have.</p>
        </Reveal>
      </Beat>

      <Beat id="waiting" eyebrow="And if we do nothing?" title="The private market grows 10% a year without us.">
        <Reveal className="card card-ink grid gap-8 md:grid-cols-2 md:items-center">
          <p className="display t-4 num text-signal">+10%</p>
          <p className="t-1">Every Forerunner we do not convince goes back to the NHS or the Big Five, <strong className="text-paper">and stays there for years.</strong></p>
        </Reveal>
      </Beat>

      {/* END */}
      <section id="ask" aria-labelledby="ask-t" className="wrap pb-6 pt-[var(--section-space)]">
        <div className="card card-ink flex flex-col gap-10 py-[clamp(4rem,10vw,8rem)]">
          <p className="eyebrow">Our ask is simple</p>
          <h2 id="ask-t" className="t-3 max-w-[18ch]">Adopt this approach. Approve <span className="text-signal num">€400,000</span> for our three channels.</h2>
          <dl className="grid gap-4 md:grid-cols-3">
            {[["4 years", "customers who stay"], ["€67m", "lifetime value"], ["Every quarter", "reported to you"]].map(([v, l]) => (
              <div key={l} className="rounded-[calc(var(--radius)*0.75)] bg-white/10 p-6">
                <dd className="display t-2 num">{v}</dd>
                <dt className="muted">{l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label="Closing" className="wrap py-[var(--section-space)]">
        <p className="t-1 muted">Their best years are ahead. Let&rsquo;s make sure they hear every word.</p>
        <p className="display t-4 mt-6 max-w-[12ch]">Your best years, heard in <span className="text-signal">full.</span></p>
      </section>

      <footer className="wrap py-10 t--1 muted">
        <p>ExSilent Ytango Mix · Marketing &amp; Sales Innovation Game · Copenhagen Business School · Team 3.</p>
      </footer>
    </>
  );
}
