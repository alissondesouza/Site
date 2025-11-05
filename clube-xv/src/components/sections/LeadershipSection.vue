<template>
  <section class="bg-grey-2 q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-xl">
        Nossa Liderança
      </h2>

      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="diretoria" label="Diretoria Atual" />
          <q-tab name="conselho" label="Conselho Fiscal" />
          <q-tab name="presidentes" label="Presidentes Históricos" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="diretoria">
            <div class="text-h6 q-mb-md">Diretoria 2025-2027</div>
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-4">
                <q-list bordered separator>
                  <q-item-label header>Presidência</q-item-label>
                  <q-item
                    ><q-item-section
                      ><q-item-label
                        >Presidente: Vilmar Pappis</q-item-label
                      ></q-item-section
                    ></q-item
                  >
                  <q-item
                    ><q-item-section
                      ><q-item-label
                        >Vice: Itacir Algayer</q-item-label
                      ></q-item-section
                    ></q-item
                  >
                </q-list>
              </div>
              <div class="col-12 col-md-4">
                <q-list bordered separator>
                  <q-item-label header>Administrativo</q-item-label>
                  <q-item
                    ><q-item-section
                      ><q-item-label
                        >Secretário: Jianine Imich da Rosa</q-item-label
                      ></q-item-section
                    ></q-item
                  >
                  <q-item
                    ><q-item-section
                      ><q-item-label
                        >Tesoureiro: Cleiton Diego Welter</q-item-label
                      ></q-item-section
                    ></q-item
                  >
                </q-list>
              </div>
              <div class="col-12 col-md-4">
                <q-list bordered separator>
                  <q-item-label header>Diretorias</q-item-label>
                  <q-item
                    ><q-item-section
                      ><q-item-label
                        >Social: Ancelmo Elias Hubner</q-item-label
                      ></q-item-section
                    ></q-item
                  >
                  <q-item
                    ><q-item-section
                      ><q-item-label
                        >Esportes: Leandro Sulzbacher e João
                        Pontes</q-item-label
                      ></q-item-section
                    ></q-item
                  >
                  <q-item
                    ><q-item-section
                      ><q-item-label
                        >Cultura: Simone Hoss Von Dentz</q-item-label
                      ></q-item-section
                    ></q-item
                  >
                </q-list>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="conselho">
            <div class="text-h6 q-mb-md">
              Conselho Fiscal e Diretores Especiais
            </div>
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <q-list bordered separator>
                  <q-item-label header>Conselho Fiscal Efetivo</q-item-label>
                  <q-item
                    ><q-item-section
                      >Ivan Carvalho da Rosa</q-item-section
                    ></q-item
                  >
                  <q-item><q-item-section>Delmar Böhrs</q-item-section></q-item>
                  <q-item
                    ><q-item-section>Valdir Thomas</q-item-section></q-item
                  >
                </q-list>
              </div>
              <div class="col-12 col-md-6">
                <q-list bordered separator>
                  <q-item-label header>Conselho Fiscal Suplente</q-item-label>
                  <q-item
                    ><q-item-section
                      >Jurandir Sulzbacher</q-item-section
                    ></q-item
                  >
                  <q-item
                    ><q-item-section>Patrícia Kroth</q-item-section></q-item
                  >
                  <q-item
                    ><q-item-section>Elias Schmitz</q-item-section></q-item
                  >
                </q-list>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="presidentes">
            <div class="text-h6 q-mb-md">Galeria de Presidentes</div>
            <p>
              Ao longo de quase oito décadas, o Clube foi liderado por
              presidentes dedicados que contribuíram para seu crescimento e
              consolidação.
            </p>
            <q-list dense separator>
              <q-item
                ><q-item-section
                  >João Fogaça (1946-1947) - Fundador</q-item-section
                ></q-item
              >
              <q-item
                ><q-item-section
                  >Martin Zeiser Filho (1961-1968) - Era da
                  consolidação</q-item-section
                ></q-item
              >
              <q-item
                ><q-item-section
                  >José Samuel Thiesen (1972-1973) -
                  Reorganização</q-item-section
                ></q-item
              >
              <q-item
                ><q-item-section
                  >Arno Schwendler (1977-1978) - Era do ginásio</q-item-section
                ></q-item
              >
              <q-item
                ><q-item-section
                  >Celito José Werlang (1984-1985, 1987) -
                  Modernização</q-item-section
                ></q-item
              >
              <q-item
                ><q-item-section
                  >Ivan Carvalho Da Rosa (2023-2024) - Construção novo Parque
                  aquático</q-item-section
                ></q-item
              >
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "LeadershipSection",
  setup() {
    return {
      tab: ref("diretoria"),
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
