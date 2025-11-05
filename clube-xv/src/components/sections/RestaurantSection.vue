<template>
  <section class="q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-xl">
        Bar e Restaurante
      </h2>
      <div class="row q-col-gutter-md">
        <div
          class="col-12 col-md-4"
          v-for="item in restaurantItems"
          :key="item.title"
        >
          <q-card class="full-height">
            <q-img :src="item.image" :ratio="16 / 9" />
            <q-card-section>
              <div class="text-h6">{{ item.title }}</div>
              <p class="text-body2">{{ item.text }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

// Vamos precisar de 3 novas imagens aqui!
import ambienteImg from "assets/restaurante/restaurante-ambiente.jpg";
import cardapioImg from "assets/restaurante/restaurante-cardapio.jpg";
import momentosImg from "assets/restaurante/restaurante-momentos.jpg";

export default defineComponent({
  name: "RestaurantSection",
  setup() {
    const restaurantItems = ref([
      {
        image: ambienteImg,
        title: "Ambiente Acolhedor",
        text: "Verdadeiro ponto de encontro para associados, oferecendo um ambiente descontraído para todas as idades.",
      },
      {
        image: cardapioImg,
        title: "Cardápio Variado",
        text: "De petiscos e bebidas refrescantes até refeições completas, atendendo a todos os gostos com qualidade.",
      },
      {
        image: momentosImg,
        title: "Momentos Especiais",
        text: "Ideal após atividades esportivas ou durante eventos, proporcionando experiências gastronômicas memoráveis.",
      },
    ]);
    return { restaurantItems };
  },
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
