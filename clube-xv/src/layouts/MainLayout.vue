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
          color="accent"
          label="Associe-se"
          href="#"
          target="_blank"
          unelevated
          rounded
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-9 text-white interactive-footer">
      <div class="container">
        <div class="row justify-between items-center minimal-footer">
          <div>&copy; 2025 - Clube XV de Novembro</div>
          <div>
            <q-icon name="expand_less" class="gt-sm" /> Passe o mouse para ver
            mais
          </div>
        </div>

        <div class="expandable-content">
          <q-separator dark class="q-my-md" />
          <div class="row q-col-gutter-lg justify-between">
            <div class="col-12 col-md-4">
              <p class="text-subtitle1 text-weight-bold">Localização</p>
              <p><strong>Endereço:</strong> Rua Iguaçu, nº 90 – Saudades/SC</p>
              <p><strong>CNPJ:</strong> 083.219.709/0001-00</p>
            </div>
            <div class="col-12 col-md-4">
              <p class="text-subtitle1 text-weight-bold">Contatos Principais</p>
              <p>
                <strong>Reservas:</strong> Inacir Dalacorte - (49) 98826-4343
              </p>
              <p>
                <strong>Presidente:</strong> Vilmar Pappis - (49) 98805-6846
              </p>
            </div>
            <div class="col-12 col-md-4">
              <p class="text-subtitle1 text-weight-bold">Redes Sociais</p>
              <p>
                <q-btn
                  flat
                  round
                  dense
                  icon="fab fa-facebook"
                  href="#"
                  target="_blank"
                  class="q-mr-sm"
                />
                <q-btn
                  flat
                  round
                  dense
                  icon="fab fa-instagram"
                  href="#"
                  target="_blank"
                  class="q-mr-sm"
                />
                <q-btn
                  flat
                  round
                  dense
                  icon="fab fa-whatsapp"
                  href="#"
                  target="_blank"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({ name: "MainLayout" });
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.interactive-footer {
  // Estado inicial (pequeno)
  height: 50px;
  transition: height 0.4s ease-in-out;
  overflow: hidden; // Esconde o conteúdo que transborda
  padding-top: 0;
  padding-bottom: 0;

  .minimal-footer {
    height: 50px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  // Estado final (quando o mouse está sobre ele)
  &:hover {
    height: 230px; // Altura expandida
  }
}

// Em telas pequenas, desabilitamos o efeito e mostramos tudo
@media (max-width: $breakpoint-sm-max) {
  .interactive-footer {
    height: auto; // Altura automática
    padding: 1rem 0;

    .minimal-footer {
      display: none; // Esconde a barra "passe o mouse"
    }

    &:hover {
      height: auto; // Mantém a altura automática
    }
  }
}
</style>
