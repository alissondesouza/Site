<template>
  <section class="bg-grey-2 q-pa-xl text-center">
    <div class="container">
      <h2 class="text-h3 text-weight-bold q-mb-xl">Como se Tornar Sócio</h2>
      <p class="text-body1">
        Faça parte da família XV de Novembro e desfrute de todas as nossas
        instalações, atividades e tradições.
      </p>
      <div class="row q-col-gutter-lg justify-center q-mt-md">
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="plan-card full-height text-center">
            <q-card-section>
              <q-avatar
                icon="description"
                color="primary"
                text-color="white"
                size="70px"
              />
              <div class="text-h6 q-mt-md">Documentação</div>
              <p class="q-mt-sm text-grey-8">
                Apresente documentos pessoais e comprovante de residência para
                iniciar o processo.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="plan-card full-height text-center">
            <q-card-section>
              <q-avatar
                icon="medical_services"
                color="primary"
                text-color="white"
                size="70px"
              />
              <div class="text-h6 q-mt-md">Exame Médico</div>
              <p class="q-mt-sm text-grey-8">
                Realize o exame médico (válido por 90 dias) para uso seguro das
                instalações, especialmente a piscina.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="plan-card full-height text-center">
            <q-card-section>
              <q-avatar
                icon="how_to_reg"
                color="primary"
                text-color="white"
                size="70px"
              />
              <div class="text-h6 q-mt-md">Aprovação</div>
              <p class="q-mt-sm text-grey-8">
                Após análise da documentação, você será oficialmente integrado à
                nossa comunidade.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="plan-card full-height text-center">
            <q-card-section>
              <q-avatar
                icon="celebration"
                color="primary"
                text-color="white"
                size="70px"
              />
              <div class="text-h6 q-mt-md">Bem-vindo!</div>
              <p class="q-mt-sm text-grey-8">
                Receba sua carteirinha e comece a desfrutar de todos os
                benefícios e atividades do clube.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// O SCRIPT NÃO MUDA
import { defineComponent } from "vue";
export default defineComponent({ name: "PlansSection" });
</script>

<style lang="scss" scoped>
/* O ESTILO NÃO MUDA */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.plan-card {
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
