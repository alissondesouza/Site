<template>
  <section class="q-pa-xl text-center">
    <div class="container">
      <h2 class="text-h3 text-weight-bold q-mb-xl">Modalidades Esportivas</h2>
      <div class="row q-col-gutter-md justify-center">
        <div
          v-for="mod in modalities"
          :key="mod.name"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <q-card class="modality-card flat bordered full-height">
            <!-- Certifique-se de ter as imagens em src/assets/modalidades/ -->
            <q-img :src="mod.image" :ratio="16 / 9">
              <div
                class="absolute-bottom text-subtitle1 text-center text-weight-medium"
              >
                {{ mod.name }}
              </div>
            </q-img>
            <!-- Removi q-card-section para um visual mais limpo -->
          </q-card>
        </div>
      </div>
      <q-btn
        color="primary"
        label="Ver Todas as Atividades"
        class="q-mt-xl"
        size="lg"
        unelevated
        rounded
        icon-right="arrow_forward"
      />
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

// Importe as imagens que você salvou em src/assets/modalidades/
// Se os nomes forem diferentes, ajuste aqui
import futebolImg from "assets/modalidades/futebol.jpg";
import natacaoImg from "assets/modalidades/natacao.jpg";
import tenisImg from "assets/modalidades/tenis.jpg";
import voleiImg from "assets/modalidades/volei.jpg";
// Adicione imports para outras imagens se necessário

export default defineComponent({
  name: "ModalitiesSection",
  setup() {
    const modalities = ref([
      { name: "Futebol Suíço", image: futebolImg },
      { name: "Natação e Hidroginástica", image: natacaoImg },
      { name: "Tênis", image: tenisImg },
      { name: "Vôlei de Areia e Futevôlei", image: voleiImg },
      // Adicione mais modalidades aqui, se houver
      // { name: 'Bocha', image: bochaImg },
      // { name: 'Caminhada', image: caminhadaImg },
    ]);
    return { modalities };
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.modality-card {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
}
.q-img__content > div {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 8px 12px; // Ajuste o padding do texto sobre a imagem
}
</style>
