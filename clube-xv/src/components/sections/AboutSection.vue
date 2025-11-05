<template>
  <section class="q-pa-xl container">
    <div class="row q-col-gutter-xl items-center">
      <div class="col-12 col-md-6">
        <q-img
          src="~assets/sobre-nos.jpg"
          :ratio="1"
          style="border-radius: 8px"
        />
      </div>
      <div class="col-12 col-md-6">
        <h2 class="text-h3 text-weight-bold">Nossa Missão</h2>
        <p class="text-body1 q-mt-md">
          Promover reuniões de caráter social, cultural, artístico, recreativo,
          desportivo e a realização de atividades comunitárias em prol da
          sociedade. Somos um centro de integração e bem-estar para os
          associados e a comunidade, oferecendo um espaço seguro e estruturado
          para o lazer, a prática de esportes, a cultura e a confraternização.
        </p>
        <p class="text-body1 q-mt-md">
          Desde nossa fundação em 1946, mantemos o compromisso de unir pessoas
          através do esporte, da cultura e das tradições que construímos ao
          longo de quase oito décadas de história.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// O SCRIPT NÃO MUDA
import { defineComponent } from "vue";
export default defineComponent({ name: "AboutSection" });
</script>

<style scoped>
/* O ESTILO NÃO MUDA */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
