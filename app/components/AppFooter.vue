<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">© {{ year }} Olanrewaju Abdul'Azeez</p>
      <p class="footer__built">
        built with <span class="accent">Nuxt</span> · deployed on
        <span class="accent">abdulazeez.xyz</span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
  margin-top: 4rem;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__copy,
.footer__built {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
