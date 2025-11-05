<template>
  <section class="q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-xl">
        Sistema de Reservas
      </h2>
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <h4 class="text-h5 text-weight-medium">Como Reservar</h4>
          <p>
            Para garantir que todos possam usufruir dos quiosques e quadras,
            implementamos um sistema de reservas que segue a ordem de
            solicitação.
          </p>
          <p>
            O agendamento obrigatório para sócios e não sócios deve ser feito
            previamente junto ao ecônomo <strong>Inacir Dalacorte</strong>.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <h4 class="text-h5 text-weight-medium">Horários e Regras</h4>
          <q-list bordered separator>
            <q-item>
              <q-item-section>
                <q-item-label>Almoço:</q-item-label>
                <q-item-label caption>8h00 às 15h30</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>Jantar:</q-item-label>
                <q-item-label caption>16h00 às 22h00</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>Inadimplência:</q-item-label>
                <q-item-label caption
                  >Em casos de inadimplência, o uso do espaço será suspenso até
                  a quitação.</q-item-label
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
export default defineComponent({ name: "BookingSection" });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
