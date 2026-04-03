<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <a href="#" class="nav__logo">aa<span class="accent">.</span></a>

      <ul class="nav__links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav__link" @click="closeMenu">{{
            link.label
          }}</a>
        </li>
      </ul>

      <a
        href="mailto:abdulazeezolamide50@gmail.com"
        class="nav__cta desktop-only"
      >
        hire me
      </a>

      <!-- Hamburger -->
      <button
        class="nav__hamburger"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
      >
        <span class="bar" :class="{ open: menuOpen }" />
        <span class="bar" :class="{ open: menuOpen }" />
        <span class="bar" :class="{ open: menuOpen }" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="nav__mobile" :class="{ 'nav__mobile--open': menuOpen }">
      <ul class="nav__mobile-links">
        <li v-for="(link, i) in links" :key="link.href">
          <a
            :href="link.href"
            class="nav__mobile-link"
            :style="{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }"
            @click="closeMenu"
          >
            <span class="nav__mobile-num">0{{ i + 1 }}</span>
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a
        href="mailto:abdulazeezolamide50@gmail.com"
        class="nav__mobile-cta"
        @click="closeMenu"
      >
        hire me
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false);
const menuOpen = ref(false);

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.style.overflow = menuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrolled.value = window.scrollY > 40;
  });
});

onUnmounted(() => {
  document.body.style.overflow = "";
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
  z-index: 101;
  position: relative;
}

.nav__logo:hover {
  color: var(--color-accent);
}

/* Desktop links */
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
  white-space: nowrap;
}

.nav__cta:hover {
  background: var(--color-accent-glow);
}

/* Hamburger */
.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 101;
  position: relative;
}

.bar {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--color-text-primary);
  transition: all var(--transition-base);
  transform-origin: center;
}

.bar.open:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.bar.open:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.bar.open:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* Mobile menu */
.nav__mobile {
  position: fixed;
  inset: 0;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  padding-left: 3rem;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px);
  transition: all var(--transition-slow);
  z-index: 100;
}

.nav__mobile--open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}

.nav__mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 3rem;
  width: 100%;
}

.nav__mobile-link {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  font-family: var(--font-display);
  font-size: clamp(2rem, 8vw, 3rem);
  color: var(--color-text-secondary);
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-base);
  opacity: 0;
  transform: translateY(10px);
}

.nav__mobile--open .nav__mobile-link {
  opacity: 1;
  transform: translateY(0);
  transition:
    color var(--transition-base),
    opacity 0.4s ease,
    transform 0.4s ease;
}

.nav__mobile-link:hover {
  color: var(--color-accent);
}

.nav__mobile-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-accent);
  letter-spacing: 0.1em;
}

.nav__mobile-cta {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: 0.75rem 2rem;
  border-radius: 2px;
  transition: all var(--transition-base);
}

.nav__mobile-cta:hover {
  background: var(--color-accent-glow);
}

/* Responsive */
@media (max-width: 768px) {
  .nav__links,
  .desktop-only {
    display: none;
  }

  .nav__hamburger {
    display: flex;
  }
}
</style>
