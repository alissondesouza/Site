<template>
  <section class="q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-xl">
        Marcos Históricos do Clube
      </h2>
      <q-timeline color="primary">
        <q-timeline-entry title="1946 - Fundação">
          <div>
            Fundação oficial do clube por esportistas locais, com João Fogaça
            como primeiro presidente e treinador.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="1960-1970 - Consolidação">
          <div>
            Sob a presidência de Martin Zeiser, foi adquirido o primeiro campo
            de futebol próprio, marco fundamental para a instituição.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="1975-1977 - O Ginásio">
          <div>
            Construção do primeiro ginásio coberto da região, impulsionando
            crescimento de mais de 30% no número de associados.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="1979 - Festival do Chopp">
          <div>
            Criação da bandeira oficial e consolidação do tradicional Festival
            do Chopp, vendendo mais de 1.200 canecos.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="2006 - 60 Anos">
          <div>
            Celebração dos 60 anos com belas instalações e 144 associados
            representando aproximadamente 510 pessoas.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({ name: "TimelineSection" });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
