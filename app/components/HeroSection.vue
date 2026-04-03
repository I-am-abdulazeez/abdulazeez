<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__tag fade-in">
        <span class="dot" />
        <span>available for new opportunities</span>
      </div>

      <h1 class="hero__name fade-in fade-in-delay-1">
        Olanrewaju<br />
        Abdul<span class="accent">'</span>Azeez
      </h1>

      <p class="hero__role fade-in fade-in-delay-2">
        <span class="accent">—</span> Senior Frontend Engineer
      </p>

      <p class="hero__summary fade-in fade-in-delay-3">
        7+ years building production-grade web and mobile apps across fintech,
        insurance, edtech, and enterprise. Creator of
        <a href="https://stunk.dev" target="_blank" class="hero__link">Stunk</a>
        — an open-source state management library with 160+ GitHub stars.
      </p>

      <div class="hero__actions fade-in fade-in-delay-4">
        <a href="#projects" class="btn btn--primary">view my work</a>
        <a href="#contact" class="btn btn--ghost">get in touch</a>
      </div>

      <div class="hero__socials fade-in fade-in-delay-4">
        <a
          href="https://github.com/I-am-abdulazeez"
          target="_blank"
          class="social-link"
        >
          GitHub
        </a>
        <span class="social-sep">/</span>
        <a href="https://stunk.dev" target="_blank" class="social-link">
          stunk.dev
        </a>
        <span class="social-sep">/</span>
        <a href="mailto:abdulazeezolamide50@gmail.com" class="social-link">
          Email
        </a>
      </div>
    </div>

    <div class="hero__scroll-hint">
      <span class="scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6rem;
  position: relative;
}

.hero__inner {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero__tag {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
  margin-bottom: 2rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.hero__name {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 9vw, 7rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  word-break: break-word;
}

.hero__role {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
}

.hero__summary {
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 520px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.hero__link {
  color: var(--color-accent);
  border-bottom: 1px solid var(--color-accent-dim);
  transition: opacity var(--transition-fast);
}

.hero__link:hover {
  opacity: 0.7;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  padding: 0.75rem 1.75rem;
  border-radius: 2px;
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn--primary {
  background: var(--color-accent);
  color: #0a0a0a;
  font-weight: 500;
}

.btn--primary:hover {
  background: var(--color-accent-dim);
}

.btn--ghost {
  border: 1px solid var(--color-border-hover);
  color: var(--color-text-secondary);
}

.btn--ghost:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.hero__socials {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  transition: color var(--transition-fast);
}

.social-link:hover {
  color: var(--color-accent);
}

.social-sep {
  color: var(--color-border-hover);
  font-size: 0.7rem;
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  display: block;
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  margin: 0 auto;
  animation: scrollPulse 2s ease infinite;
}

@keyframes scrollPulse {
  0%,
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
  50% {
    opacity: 0.4;
    transform: scaleY(0.8);
  }
}
</style>
