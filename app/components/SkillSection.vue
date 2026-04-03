<template>
  <section id="skills" class="section">
    <div class="container">
      <p class="section-label">skills</p>
      <div class="divider" />
      <h2 class="section-title">
        What I <span class="accent">work with.</span>
      </h2>

      <div class="skills__grid">
        <div
          v-for="group in skillGroups"
          :key="group.category"
          class="skills__group"
        >
          <p class="skills__category">{{ group.category }}</p>
          <div class="skills__items">
            <span
              v-for="skill in group.items"
              :key="skill"
              class="skills__item"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <div class="skills__cert">
        <span class="cert__icon">✦</span>
        <div>
          <p class="cert__label">certification</p>
          <p class="cert__name">
            Microsoft Certified: Dynamics 365 Business Central Functional
            Consultant Associate
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillGroups = [
  {
    category: "Frontend",
    items: [
      "React",
      "Vue",
      "Next.js",
      "Nuxt.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Quasar",
    ],
  },
  {
    category: "State Management",
    items: ["Stunk", "TanStack Query", "Pinia"],
  },
  {
    category: "UI Libraries",
    items: ["HeroUI", "shadcn/ui", "Headless UI", "Beautiful UI"],
  },
  {
    category: "Backend & APIs",
    items: ["C# / .NET", "REST", "GraphQL", "Node.js", "SQL"],
  },
  {
    category: "Tooling & DevOps",
    items: ["GitHub Actions", "Bitbucket Pipelines", "Git"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "CorelDraw", "Photoshop"],
  },
];
</script>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.skills__group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skills__category {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-border);
}

.skills__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skills__item {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 0.35rem 0.85rem;
  border-radius: 2px;
  transition: all var(--transition-fast);
  cursor: default;
}

.skills__item:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background: var(--color-accent-glow);
}

.skills__cert {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  background: var(--color-bg-card);
  transition: border-color var(--transition-base);
}

.skills__cert:hover {
  border-color: var(--color-accent);
}

.cert__icon {
  color: var(--color-accent);
  font-size: 1rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

.cert__label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.cert__name {
  font-size: 0.9rem;
  color: var(--color-text-primary);
  line-height: 1.5;
}
</style>
