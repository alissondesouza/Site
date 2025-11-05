<template>
  <section class="bg-grey-2 q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-md">
        Orientações Gerais
      </h2>
      <p
        class="text-body1 text-center q-mb-xl"
        style="max-width: 800px; margin-left: auto; margin-right: auto"
      >
        Neste início de ano, reforçamos orientações importantes para mantermos a
        harmonia e preservação do nosso clube. Vamos juntos cuidar desse espaço
        que é de todos nós!
      </p>
      <div class="row q-col-gutter-md justify-center">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">Guarda-Sol e Cadeiras</div>
              <p>
                Pegue e devolva o guarda-sol na portaria. Após o uso, devolva as
                cadeiras ao local original e use-as com cuidado.
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">Cuidado com o Ambiente</div>
              <p>
                Leve seu lixo consigo ou utilize as lixeiras. Vamos juntos
                cuidar do meio ambiente e manter nosso clube limpo.
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">Comportamento Respeitoso</div>
              <p>
                Pedimos que os pais orientem seus filhos sobre a importância de
                respeitar os demais associados e o espaço compartilhado.
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
export default defineComponent({ name: "GuidelinesSection" });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
