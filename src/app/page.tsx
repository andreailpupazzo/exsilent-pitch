import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

// Phase 1: layout shell only. Content sections arrive in phase 2.
export default function Home() {
  return (
    <Section id="shell" index="00" label="Shell">
      <Reveal>
        <h2 className="text-5xl md:text-7xl">ExSilent</h2>
      </Reveal>
    </Section>
  );
}
