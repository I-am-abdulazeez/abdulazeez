<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <a href="#" class="nav__logo">aa<span class="accent">.</span></a>

      <ul class="nav__links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav__link">{{ link.label }}</a>
        </li>
      </ul>

      <a href="mailto:abdulazeezolamide50@gmail.com" class="nav__cta">
        hire me
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false);

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 40;
  });
});
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem 0;
  transition: all var(--transition-slow);
}

.nav--scrolled {
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
  transition: color var(--transition-fast);
}

.nav__logo:hover {
  color: var(--color-accent);
}

.nav__links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
}

.nav__link {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.05em;
  transition: color var(--transition-fast);
  position: relative;
}

.nav__link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.nav__link:hover {
  color: var(--color-accent);
}

.nav__link:hover::after {
  width: 100%;
}

.nav__cta {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: 0.5rem 1.2rem;
  border-radius: 2px;
  transition: all var(--transition-base);
}

.nav__cta:hover {
  background: var(--color-accent-glow);
}

@media (max-width: 640px) {
  .nav__links {
    display: none;
  }
}
</style>
