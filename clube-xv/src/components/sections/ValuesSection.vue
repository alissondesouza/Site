<template>
  <section class="q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-xl">
        Nossos Valores Fundamentais
      </h2>
      <div class="row q-col-gutter-md justify-center">
        <div
          v-for="value in values"
          :key="value.title"
          class="col-12 col-sm-6 col-md-3"
        >
          <q-card flat bordered class="full-height">
            <q-card-section class="text-center">
              <q-icon :name="value.icon" color="primary" size="50px" />
              <div class="text-h6 q-mt-md">{{ value.title }}</div>
              <p class="q-mt-sm text-grey-8">{{ value.text }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ValuesSection",
  setup() {
    const values = ref([
      {
        icon: "groups",
        title: "Comunidade",
        text: "Promovemos atividades e fortalecemos laços sociais entre nossos associados e suas famílias.",
      },
      {
        icon: "sports_soccer",
        title: "Paixão pelo Esporte",
        text: "O esporte é nossa grande missão, promovendo atividades para todas as idades desde 1946.",
      },
      {
        icon: "history",
        title: "Tradição e História",
        text: "Celebramos nossa rica história e mantemos vivas as tradições que marcam nossa comunidade.",
      },
      {
        icon: "family_restroom",
        title: "Inclusão Familiar",
        text: "Ambiente acolhedor voltado para todas as gerações, onde a família é parte integral da experiência.",
      },
    ]);
    return { values };
  },
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
