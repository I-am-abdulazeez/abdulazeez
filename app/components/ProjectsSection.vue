<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="section-label">projects</p>
      <div class="divider" />
      <h2 class="section-title">
        Things I've <span class="accent">built.</span>
      </h2>

      <div class="projects__grid">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          class="project__card"
          :class="{ 'project__card--featured': project.featured }"
        >
          <div class="project__top">
            <span
              class="project__status"
              :class="`project__status--${project.statusType}`"
            >
              {{ project.status }}
            </span>
            <span class="project__arrow">↗</span>
          </div>

          <h3 class="project__name">{{ project.name }}</h3>
          <p class="project__desc">{{ project.description }}</p>

          <div class="project__footer">
            <div class="project__tags">
              <span v-for="tag in project.tags" :key="tag" class="project__tag">
                {{ tag }}
              </span>
            </div>

            <div v-if="project.stars" class="project__stars">
              <span class="star-icon">★</span>
              {{ project.stars }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    name: "Stunk",
    description:
      "Framework-agnostic state management library for JavaScript and TypeScript. Used in production across multiple client projects. 8 contributors, 488 weekly downloads.",
    status: "Live · Open Source",
    statusType: "live",
    url: "https://stunk.dev",
    stars: "160+",
    tags: ["TypeScript", "Open Source", "MIT"],
    featured: true,
  },
  {
    name: "Nester Verify",
    description:
      "Sole frontend engineer on a real-time KYC and identity verification platform. Complete and actively maintained in production.",
    status: "Live",
    statusType: "live",
    url: "https://nester-verify-v2.netlify.app/",
    tags: ["React", "TypeScript", "TanStack", "Stunk", "Tailwind", "Chakra UI"],
    featured: false,
  },
  {
    name: "Leadway Health Platforms",
    description:
      "Built 5+ internal platforms — Sales, Rider, Pharmacy, AutoPayment, Pharmacy App. etc — processing 6,000+ daily transactions across Leadway Health.",
    status: "Live · Freelance",
    statusType: "live",
    url: "#",
    tags: ["React", "Stunk", "Tailwind", "HeroUI"],
    featured: false,
  },
  {
    name: "ARM Investment Vendor Portal",
    description:
      "Designed and shipped the full vendor portal in under 3 months. Serving 1,000+ vendors with separate admin and vendor dashboards.",
    status: "Live",
    statusType: "live",
    url: "https://vendorportal.arm.com.ng/",
    tags: ["React", "TanStack Query", "Stunk", "Tailwind", "HeroUI"],
    featured: false,
  },
  {
    name: "Mastan",
    description:
      "Full school management system covering student records, scheduling, and admin workflows. Currently in active development.",
    status: "In Development",
    statusType: "wip",
    url: "https://mastan-app.vercel.app/",
    tags: ["React", "TypeScript"],
    featured: false,
  },
  {
    name: "School Notification System",
    description:
      "Vue + Quasar app enabling school admins to send real-time notifications to students and staff.",
    status: "Shipped",
    statusType: "shipped",
    url: "#",
    tags: ["Vue", "Quasar", "TypeScript", "Mobile app", "Firebase"],
    featured: false,
  },
];
</script>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
}

.project__card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2rem;
  background: var(--color-bg);
  transition: background var(--transition-base);
  cursor: pointer;
}

.project__card:hover {
  background: var(--color-bg-card);
}

.project__card:hover .project__arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

.project__card--featured {
  grid-column: span 2;
}

.project__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project__status {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
}

.project__status--live {
  color: var(--color-accent);
  background: var(--color-accent-glow);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.project__status--wip {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.project__status--shipped {
  color: var(--color-text-muted);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
}

.project__arrow {
  font-size: 1rem;
  color: var(--color-text-muted);
  opacity: 0;
  transition: all var(--transition-base);
}

.project__name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-text-primary);
}

.project__desc {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  flex: 1;
}

.project__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  padding-top: 0.75rem;
}

.project__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.project__tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.project__tag:not(:last-child)::after {
  content: "·";
  margin-left: 0.4rem;
  color: var(--color-border-hover);
}

.project__stars {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
}

.star-icon {
  color: #f59e0b;
  font-size: 0.65rem;
}

@media (max-width: 640px) {
  .project__card--featured {
    grid-column: span 1;
  }
}
</style>
