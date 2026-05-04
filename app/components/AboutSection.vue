<template>
  <section id="about" class="section">
    <div class="container">
      <p class="section-label">about me</p>
      <div class="divider" />

      <div class="about__grid">
        <div class="about__bio">
          <h2 class="section-title">
            I build things<br />for the <span class="accent">web.</span>
          </h2>

          <p class="about__text">
            I'm a Senior Frontend Engineer based in Lagos, Nigeria, with 7+
            years of experience crafting production-grade web and mobile
            applications. I've worked across fintech, insurance, edtech, and
            enterprise — always focused on engineering depth and frontend
            quality.
          </p>

          <p class="about__text">
            Beyond client work, I created
            <a href="https://stunk.dev" target="_blank" class="about__link"
              >Stunk</a
            >
            — a framework-agnostic state management library for JavaScript and
            TypeScript, now with 160+ GitHub stars and used in production across
            multiple projects.
          </p>

          <p class="about__text">
            I thrive in fast-moving, product-focused teams where I can own the
            frontend, drive tech stack decisions, and ship work I'm genuinely
            proud of.
          </p>
        </div>

        <div class="about__meta">
          <div class="about__card">
            <p class="about__card-label">currently at</p>
            <a
              href="https://buzzable.app"
              target="_blank"
              class="about__card-value accent"
            >
              Buzzable ↗
            </a>
          </div>

          <div class="about__card">
            <p class="about__card-label">based in</p>
            <p class="about__card-value">Lagos, Nigeria</p>
          </div>

          <div class="about__card">
            <p class="about__card-label">experience</p>
            <p class="about__card-value">7+ years</p>
          </div>

          <div class="about__card">
            <p class="about__card-label">open source</p>
            <a
              href="https://stunk.dev"
              target="_blank"
              class="about__card-value accent"
            >
              stunk.dev ↗
            </a>
          </div>

          <div class="about__card">
            <p class="about__card-label">education</p>
            <p class="about__card-value">
              B.Sc Economics<br />
              <span class="about__card-sub">University of Lagos</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 5rem;
  align-items: start;
}

.about__bio {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about__text {
  color: var(--color-text-secondary);
  font-size: 0.975rem;
  line-height: 1.85;
}

.about__link {
  color: var(--color-accent);
  border-bottom: 1px solid var(--color-accent-dim);
  transition: opacity var(--transition-fast);
}

.about__link:hover {
  opacity: 0.7;
}

.about__meta {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 1px solid var(--color-border);
  padding-left: 2rem;
  position: sticky;
  top: 6rem;
}

.about__card {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--color-border);
}

.about__card:last-child {
  border-bottom: none;
}

.about__card-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.about__card-value {
  font-size: 0.9rem;
  color: var(--color-text-primary);
  font-weight: 400;
  line-height: 1.5;
}

.about__card-sub {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about__meta {
    border-left: none;
    border-top: 1px solid var(--color-border);
    padding-left: 0;
    padding-top: 2rem;
    position: static;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .about__card {
    border-bottom: none;
    border-right: 1px solid var(--color-border);
    padding: 1rem;
  }
}
</style>
