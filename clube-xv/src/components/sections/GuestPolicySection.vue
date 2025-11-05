<template>
  <section class="q-pa-xl">
    <div class="container">
      <h2 class="text-h3 text-weight-bold text-center q-mb-xl">
        Política de Convidados
      </h2>
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6">Condições para Convidados</div>
              <p>
                Sócios podem trazer convidados seguindo condições que garantem o
                uso adequado das instalações e a manutenção da qualidade do
                ambiente.
              </p>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-list separator>
                <q-item>
                  <q-item-section avatar
                    ><q-icon color="primary" name="public"
                  /></q-item-section>
                  <q-item-section
                    >O convidado deve residir em outro
                    município.</q-item-section
                  >
                </q-item>
                <q-item>
                  <q-item-section avatar
                    ><q-icon color="primary" name="admin_panel_settings"
                  /></q-item-section>
                  <q-item-section
                    >O sócio é totalmente responsável pelo comportamento do
                    convidado.</q-item-section
                  >
                </q-item>
                <q-item>
                  <q-item-section avatar
                    ><q-icon color="primary" name="groups"
                  /></q-item-section>
                  <q-item-section
                    >O convidado só pode frequentar o clube na companhia do
                    sócio.</q-item-section
                  >
                </q-item>
                <q-item>
                  <q-item-section avatar
                    ><q-icon color="primary" name="paid"
                  /></q-item-section>
                  <q-item-section>
                    <q-item-label
                      >Taxa: R$ 15,00 por dia ou R$ 150,00 por
                      mês.</q-item-label
                    >
                    <q-item-label caption
                      >O pagamento deve ser feito antecipadamente ao
                      ecônomo.</q-item-label
                    >
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar
                    ><q-icon color="primary" name="health_and_safety"
                  /></q-item-section>
                  <q-item-section
                    >Exame médico válido é obrigatório.</q-item-section
                  >
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({ name: "GuestPolicySection" });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
