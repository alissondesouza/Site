<template>
  <section class="bg-grey-2 q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-xl">
        Atividades Sociais e Culturais
      </h2>
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">Eventos Sociais</div>
              <p>
                Festas, confraternizações e celebrações especiais para todas as
                idades, fortalecendo os laços comunitários.
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">Eventos Culturais</div>
              <p>
                Exposições de arte, teatro, apresentações musicais e mostras de
                dança enriquecem nossa programação.
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">Festival do Chopp</div>
              <p>
                Nossa tradição mais famosa, que começou nos anos 70 e se tornou
                um marco da comunidade, reunindo centenas de pessoas.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({ name: "SocialActivitiesSection" });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
