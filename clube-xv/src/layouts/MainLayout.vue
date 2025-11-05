<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="q-py-sm container">
        <q-toolbar-title>
          <div class="row items-center">
            <q-avatar>
              <img src="~assets/logo.png" />
            </q-avatar>
            <span class="q-ml-sm gt-xs text-weight-bold"
              >Clube XV de Novembro</span
            >
          </div>
        </q-toolbar-title>

        <q-btn
          flat
          label="Campeonato"
          to="/campeonato"
          class="q-mr-sm"
          icon="emoji_events"
        />
        <q-btn
          color="accent"
          label="Associe-se"
          href="#"
          target="_blank"
          unelevated
          rounded
        />
      </q-toolbar>

      <scores-marquee-section />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-9 text-white q-pa-md">
      <div class="container">
        <div class="row items-center q-col-gutter-md">
          <div class="col-12 col-md-5 text-center text-md-left">
            <div class="text-weight-bold">
              Clube Cultural e Recreativo XV de Novembro
            </div>
            <div class="text-caption">Rua Iguaçu, nº 90 – Saudades/SC</div>
          </div>
          <div class="col-12 col-md-4 text-center">
            <div class="text-caption">
              <strong>Reservas:</strong> (49) 98826-4343 |
              <strong>Presidente:</strong> (49) 98805-6846
            </div>
          </div>
          <div class="col-12 col-md-3 text-center text-md-right">
            <q-btn
              flat
              round
              dense
              icon="fab fa-facebook"
              href="#"
              target="_blank"
            />
            <q-btn
              flat
              round
              dense
              icon="fab fa-instagram"
              href="#"
              target="_blank"
              class="q-mx-sm"
            />
            <q-btn
              flat
              round
              dense
              icon="fab fa-whatsapp"
              href="#"
              target="_blank"
            />
          </div>
        </div>
        <q-separator dark class="q-mt-md q-mb-sm" />
        <div class="text-center text-caption">
          &copy; 2025 - Todos os direitos reservados.
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
// ##### IMPORTANDO O NOVO COMPONENTE #####
import ScoresMarqueeSection from "components/sections/ScoresMarqueeSection.vue";

export default defineComponent({
  name: "MainLayout",
  // ##### REGISTRANDO O NOVO COMPONENTE #####
  components: {
    ScoresMarqueeSection,
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
