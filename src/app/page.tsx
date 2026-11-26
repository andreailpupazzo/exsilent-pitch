import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

// Phase 1: layout shell only. Content sections arrive in phase 2.
export default function Home() {
  return (
    <Section id="shell" label="Shell">
      <Reveal>
        <h2 className="text-[length:var(--step-4)]">ExSilent</h2>
      </Reveal>
    </Section>
  );
}
