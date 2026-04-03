<template>
  <section id="contact" class="section">
    <div class="container">
      <p class="section-label">contact</p>
      <div class="divider" />

      <div class="contact__inner">
        <div class="contact__left">
          <h2 class="section-title">
            Let's work<br />
            <span class="accent">together.</span>
          </h2>
          <p class="contact__text">
            I'm currently open to new opportunities — full-time roles, freelance
            engagements, or just a good conversation about frontend engineering.
            My inbox is always open.
          </p>

          <a href="mailto:abdulazeezolamide50@gmail.com" class="contact__email">
            abdulazeezolamide50@gmail.com
          </a>
        </div>

        <div class="contact__right">
          <div class="contact__links">
            <a
              v-for="link in links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              class="contact__link"
            >
              <span class="contact__link-label">{{ link.label }}</span>
              <span class="contact__link-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const links = [
  {
    label: "GitHub",
    url: "https://github.com/I-am-abdulazeez",
  },
  {
    label: "Stunk — open source",
    url: "https://stunk.dev",
  },
  {
    label: "abdulazeezolamide50@gmail.com",
    url: "mailto:abdulazeezolamide50@gmail.com",
  },
  {
    label: "oabdulazeez70@gmail.com",
    url: "mailto:oabdulazeez70@gmail.com",
  },
  {
    label: "+234 9036340011",
    url: "tel:+2349036340011",
  },
];
</script>

<style scoped>
.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
}

.contact__text {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.85;
  margin-bottom: 2rem;
  max-width: 400px;
}

.contact__email {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-accent);
  letter-spacing: 0.04em;
  border-bottom: 1px solid var(--color-accent-dim);
  padding-bottom: 2px;
  transition: opacity var(--transition-fast);
}

.contact__email:hover {
  opacity: 0.7;
}

.contact__links {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
}

.contact__link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.contact__link:hover {
  padding-left: 0.5rem;
}

.contact__link:hover .contact__link-label {
  color: var(--color-accent);
}

.contact__link:hover .contact__link-arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

.contact__link-label {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.04em;
  transition: color var(--transition-fast);
}

.contact__link-arrow {
  font-size: 0.9rem;
  color: var(--color-accent);
  opacity: 0;
  transition: all var(--transition-base);
}

@media (max-width: 768px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
