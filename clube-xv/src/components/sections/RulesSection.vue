<template>
  <section class="bg-grey-2 q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-xl">
        Regras e Informações
      </h2>
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <h4 class="text-h5 text-weight-medium">Regulamento da Piscina</h4>
          <q-list bordered separator>
            <q-item>
              <q-item-section avatar
                ><q-icon color="primary" name="badge"
              /></q-item-section>
              <q-item-section>
                <q-item-label>Acesso Exclusivo</q-item-label>
                <q-item-label caption
                  >Apenas sócios e dependentes com carteira válida e exame
                  médico em dia.</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar
                ><q-icon color="primary" name="shower"
              /></q-item-section>
              <q-item-section>
                <q-item-label>Regras de Higiene</q-item-label>
                <q-item-label caption
                  >Banho obrigatório antes de entrar. Remoção completa de
                  bronzeadores e uso de trajes adequados.</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-12 col-md-6">
          <h4 class="text-h5 text-weight-medium">Dependentes Especiais</h4>
          <q-list bordered separator>
            <q-item>
              <q-item-section avatar
                ><q-icon color="primary" name="elderly"
              /></q-item-section>
              <q-item-section>
                <q-item-label>Pais como Dependentes</q-item-label>
                <q-item-label caption
                  >Associados podem cadastrar pais com 65+ anos como dependentes
                  sem custos adicionais.</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar
                ><q-icon color="primary" name="favorite"
              /></q-item-section>
              <q-item-section>
                <q-item-label>Namorados(as) de Associados</q-item-label>
                <q-item-label caption
                  >Podem frequentar mediante carteirinha, exame médico e
                  declaração do associado.</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({ name: "RulesSection" });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
