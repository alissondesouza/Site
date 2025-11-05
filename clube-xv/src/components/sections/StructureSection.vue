<template>
  <section class="bg-grey-2 q-pa-xl text-center">
    <div class="container">
      <h2 class="text-h3 text-weight-bold q-mb-xl">Nossa Estrutura</h2>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="500px"
        class="bg-white shadow-2 rounded-borders"
      >
        <q-carousel-slide
          v-for="(img, index) in structureImages"
          :key="index"
          :name="index + 1"
          :img-src="img.src"
        >
          <div class="absolute-bottom custom-caption">
            <div class="text-h6">{{ img.caption }}</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <p
        class="text-body1 q-mt-lg text-left"
        style="max-width: 800px; margin-left: auto; margin-right: auto"
      >
        Nossos 7 quiosques representam um dos espaços mais valorizados do clube.
        Equipados com churrasqueira, pia, mesas e toda infraestrutura
        necessária, proporcionam conforto e praticidade para encontros
        familiares, celebrações e eventos sociais. Construídos com madeira
        reaproveitada da obra da piscina, unindo sustentabilidade e
        funcionalidade.
      </p>
    </div>
  </section>
</template>

<script>
// O SCRIPT NÃO MUDA
import { defineComponent, ref } from "vue";
import piscinaImg from "assets/estrutura/piscina.jpg";
import quadraImg from "assets/estrutura/quadra.jpg";
import salaoImg from "assets/estrutura/salao.jpg";
import quiosqueImg from "assets/estrutura/quiosque.jpg";

export default defineComponent({
  name: "StructureSection",
  setup() {
    const slide = ref(1);
    const structureImages = ref([
      { src: piscinaImg, caption: "Parque Aquático Moderno" },
      { src: quadraImg, caption: "Quadras para Diversos Esportes" },
      { src: salaoImg, caption: "Amplo Salão de Festas" },
      { src: quiosqueImg, caption: "Quiosques Equipados para Churrasco" },
    ]);
    return { slide, structureImages };
  },
});
</script>

<style lang="scss" scoped>
/* O ESTILO NÃO MUDA */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
