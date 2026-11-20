<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="section-label">projects</p>
      <div class="divider" />
      <h2 class="section-title">
        Things I've <span class="accent">built.</span>
      </h2>

      <div class="projects__grid">
        <component
          :is="project.url ? 'a' : 'div'"
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          :target="project.url ? '_blank' : undefined"
          :rel="project.url ? 'noopener noreferrer' : undefined"
          class="project__card"
          :class="{
            'project__card--featured': project.featured,
            'project__card--static': !project.url,
          }"
        >
          <div v-if="project.image" class="project__media">
            <img
              :src="project.image"
              :alt="`Screenshot of ${project.name}`"
              class="project__image"
              loading="lazy"
              @error="hideImage"
            />
          </div>

          <div class="project__body">
          <div class="project__top">
            <span
              class="project__status"
              :class="`project__status--${project.statusType}`"
            >
              {{ project.status }}
            </span>
            <span v-if="project.url" class="project__arrow" aria-hidden="true">↗</span>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ project.stars }}
            </div>
          </div>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Project = {
  description: string;
  featured?: boolean;
  image?: string;
  name: string;
  stars?: string;
  status: string;
  statusType: "live" | "wip";
  tags: string[];
  url?: string;
};

const projects: Project[] = [
  {
    description:
      "Framework-agnostic state management library for JavaScript and TypeScript. Used in production across multiple client projects. 8 contributors, 488 weekly downloads.",
    featured: true,
    image: "/projects/stunk.png",
    name: "Stunk",
    stars: "173+",
    status: "Live, Open Source",
    statusType: "live",
    tags: ["TypeScript", "Open Source", "MIT"],
    url: "https://stunk.dev",
  },
  {
    description:
      "Currently building Buzzable, an event and community platform that helps organizers create, grow, engage, and monetize their audiences. Features include real-time chat, AI-assisted event creation, QR code check-in, wallet flows, and brand sponsorship matching.",
    image: "/projects/buzzable.png",
    name: "Buzzable",
    status: "Currently Building",
    statusType: "wip",
    tags: ["React", "Vite", "TypeScript", "Stream Chat", "WebSockets"],
    url: "https://buzzable.com",
  },
  {
    description:
      "Social marketplace where shoppers discover and buy from brands with public trust signals. Brands build their reputation through endorsements and ratings, and close sales through in-app chat with photo sharing, referrals and private customer labels.",
    image: "/projects/ibrid.png",
    name: "iBrid",
    status: "Live",
    statusType: "live",
    tags: ["Marketplace", "Chat", "Referrals"],
    url: "https://useibrid.com",
  },
  {
    description:
      "Real-time KYC and identity verification platform. Live in production and actively supported.",
    image: "/projects/nester-verify.png",
    name: "Nester Verify",
    status: "Live, Supported",
    statusType: "live",
    tags: ["React", "TypeScript", "TanStack", "Stunk", "Tailwind", "Chakra UI"],
    url: "https://nesterverify.com/",
  },
  {
    description:
      "Website for an agribusiness with farms in Osun State and an office in Lagos. Presents produce and livestock, takes orders through WhatsApp, and showcases agricultural investment packages and training.",
    image: "/projects/farms-mart.png",
    name: "Olanrewaju Farms Mart",
    status: "Live",
    statusType: "live",
    tags: ["Business Website", "WhatsApp Ordering"],
    url: "https://olanrewaju-farms-mart.vercel.app/",
  },
  {
    description:
      "Full school management system covering student records, scheduling, and admin workflows. Currently in active development.",
    image: "/projects/mastan.png",
    name: "Mastan",
    status: "In Development",
    statusType: "wip",
    tags: ["React", "TypeScript"],
    url: "https://mastan-app.vercel.app/",
  },
  {
    description:
      "Built 5+ internal platforms: Sales, Rider, Pharmacy, AutoPayment, Pharmacy App, processing 6,000+ daily transactions across Leadway Health.",
    name: "Leadway Health Platforms",
    status: "Live, Freelance",
    statusType: "live",
    tags: ["React", "Stunk", "Tailwind", "HeroUI"],
  },
  {
    description:
      "Designed and shipped the full vendor portal in under 3 months. Serving 1,000+ vendors with separate admin and vendor dashboards.",
    name: "ARM Investment Vendor Portal",
    status: "Live",
    statusType: "live",
    tags: ["React", "TanStack Query", "Stunk", "Tailwind", "HeroUI"],
  },
];

function hideImage(event: Event) {
  const media = (event.target as HTMLElement).closest(".project__media");
  if (media) (media as HTMLElement).style.display = "none";
}
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
  background: var(--color-bg);
  transition: background var(--transition-base);
  cursor: pointer;
}

.project__card:hover {
  background: var(--color-bg-card);
}

.project__card--static {
  cursor: default;
}

.project__media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}

.project__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform var(--transition-slow);
}

.project__card:hover .project__image {
  transform: scale(1.03);
}

.project__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 2rem 2rem;
}

@media (prefers-reduced-motion: reduce) {
  .project__image {
    transition: none;
  }
}

.project__card:hover .project__arrow,
.project__card:focus-visible .project__arrow {
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

.project__stars {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
}

.project__stars svg {
  color: #f59e0b;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .project__card--featured {
    grid-column: span 1;
  }
}
</style>
