<template>
  <section class="hero-section flex flex-center text-white">
    <div class="hero-content text-center">
      <h1 class="text-h2 text-weight-bold q-mb-md">
        Clube Cultural e Recreativo XV de Novembro
      </h1>
      <p class="text-h5">Tradição, Esporte e Comunidade desde 1946</p>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({ name: "HeroSection" });
</script>

<style lang="scss" scoped>
.hero-section {
  height: 90vh; /* Altura da seção, pode ajustar */
  // Imagem de fundo e gradiente para escurecer
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("~assets/background-hero.jpg");
  background-size: cover; // Cobre toda a área
  background-position: center; // Centraliza a imagem
  background-attachment: fixed; // Faz a imagem ter efeito parallax (opcional, mas fica ótimo)
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content {
  max-width: 800px;
  padding: 0 20px;
  h1,
  p {
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); // Sombra para o texto se destacar mais
  }
}

// Responsividade para telas menores
@media (max-width: $breakpoint-sm-max) {
  .hero-section {
    height: 70vh; // Menor altura em mobile
  }
  .hero-content h1 {
    font-size: 2.5rem; // Tamanho de fonte menor
  }
  .hero-content p {
    font-size: 1.2rem; // Tamanho de fonte menor
  }
}
</style>
