<template>
  <section id="experience" class="section">
    <div class="container">
      <p class="section-label">experience</p>
      <div class="divider" />
      <h2 class="section-title">
        Where I've <span class="accent">worked.</span>
      </h2>

      <div class="exp__list">
        <div v-for="(job, i) in jobs" :key="i" class="exp__item">
          <div class="exp__header">
            <div>
              <h3 class="exp__role">{{ job.role }}</h3>
              <p class="exp__company">
                {{ job.company }}
                <span v-if="job.note" class="exp__note">· {{ job.note }}</span>
              </p>
            </div>
            <span class="exp__period">{{ job.period }}</span>
          </div>

          <ul class="exp__bullets">
            <li v-for="(point, j) in job.points" :key="j" class="exp__bullet">
              {{ point }}
            </li>
          </ul>

          <div class="exp__tags">
            <span v-for="tag in job.tags" :key="tag" class="exp__tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const jobs = [
  {
    role: "Frontend Developer",
    company: "Buzzable",
    note: "present",
    period: "2025 — Now",
    points: [
      "Building and maintaining the frontend for a community and events platform focused on connecting people and scaling meaningful communities.",
      "Working in a fast-moving product-focused team in San Francisco, contributing to core platform features and user experience.",
    ],
    tags: ["React", "TypeScript", "Next"],
    featured: false,
  },
  {
    role: "Software Engineer",
    company: "Teknohub Solutions Management Limited",
    note: "present",
    period: "09/2022 — Now",
    points: [
      "Sole frontend engineer on the ARM Investment Vendor Portal — designed, built, and shipped the full React application in under 3 months, now serving 1,000+ vendors onboarding at 5+ daily.",
      "Integrated directly with Business Central APIs to power real-time vendor data, transactions, and onboarding flows, acting as the bridge between ARM's backend team and the BC platform.",
      "Introduced Stunk into the production codebase, reducing state complexity and improving maintainability across the portal.",
      "Set up and maintained CI/CD pipelines using GitHub Actions, streamlining deployment for a 5-person engineering team.",
      "Conducted code reviews for 3 engineers, enforcing frontend best practices and maintaining codebase consistency.",
    ],
    tags: [
      "React",
      "TanStack Query",
      "Stunk",
      "Tailwind",
      "HeroUI",
      "GitHub Actions",
    ],
  },
  {
    role: "Software Engineer — Frontend & Mobile",
    company: "Prognosis Technologies Limited",
    period: "06/2017 — 2022",
    points: [
      "Progressed from Frontend & Mobile Developer to Software Engineer over 5 years, expanding from UI development into full-stack delivery across web, mobile, and backend.",
      "Built and consumed REST APIs in C# (.NET), working directly on the database layer to power internal frontend applications.",
      "Developed cross-platform mobile applications using React Native, shipping to both iOS and Android alongside web counterparts.",
      "Delivered UI/UX mockup designs for Mlab, Lashma, and Leadway projects in Figma and Adobe XD.",
      "Contributed to a team of 8 engineers across full product cycles in a structured, high-standard engineering culture.",
    ],
    tags: ["React", "Vue", "React Native", "C# / .NET", "Figma", "Adobe XD"],
  },
];
</script>

<style scoped>
.exp__list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.exp__item {
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.exp__item:first-child {
  border-top: 1px solid var(--color-border);
}

.exp__item:hover {
  padding-left: 1rem;
}

.exp__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.exp__role {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
}

.exp__company {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-accent);
  letter-spacing: 0.04em;
}

.exp__note {
  color: var(--color-text-muted);
}

.exp__period {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
  white-space: nowrap;
  margin-top: 0.2rem;
}

.exp__bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.exp__bullet {
  font-size: 0.925rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  padding-left: 1rem;
  position: relative;
}

.exp__bullet::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 0.65rem;
  top: 0.3rem;
}

.exp__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.exp__tag {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--color-text-muted);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 0.25rem 0.65rem;
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.exp__tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .exp__header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .exp__item:hover {
    padding-left: 0;
  }
}
</style>
