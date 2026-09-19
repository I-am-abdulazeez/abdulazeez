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
            I'm currently open to new opportunities, full-time roles, freelance
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
              <div class="contact__link-left">
                <span class="contact__link-icon" v-html="link.icon" />
                <span class="contact__link-label">{{ link.label }}</span>
              </div>
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="m9.75 10.58-2.08 1.42 2.08 1.42M14.25 10.58l2.08 1.42-2.08 1.42M12.5 9l-1 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    label: "Stunk, open source",
    url: "https://stunk.dev",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    label: "abdulazeezolamide50@gmail.com",
    url: "mailto:abdulazeezolamide50@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    label: "oabdulazeez70@gmail.com",
    url: "mailto:oabdulazeez70@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    label: "+234 9036340011",
    url: "tel:+2349036340011",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/><path d="M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23M22 9c0-3.87-3.13-7-7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
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

.contact__link-left {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.contact__link-icon {
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: color var(--transition-fast);
}

.contact__link:hover .contact__link-icon {
  color: var(--color-accent);
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
