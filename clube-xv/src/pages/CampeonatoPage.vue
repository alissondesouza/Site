<template>
  <q-page class="q-pa-md">
    <div class="container">
      <h2 class="text-h3 text-weight-bold q-mb-md">
        Gerenciador do Campeonato
      </h2>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">1. Cadastrar Times</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-input
                v-model="newTeamName"
                label="Nome do Time"
                outlined
                dense
                @keyup.enter="handleTeamAdd"
              />
              <q-btn
                label="Adicionar Time"
                color="primary"
                class="q-mt-md"
                @click="handleTeamAdd"
                unelevated
              />
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-md-6">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">2. Cadastrar Jogos</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-select
                v-model="newGameTeam1"
                :options="teams"
                label="Time da Casa"
                outlined
                dense
                class="q-mb-md"
              />
              <q-select
                v-model="newGameTeam2"
                :options="teams"
                label="Time Visitante"
                outlined
                dense
                class="q-mb-md"
              />

              <q-toggle
                v-model="newGameIsLive"
                label="Iniciar jogo como 'Ao Vivo'?"
                color="red"
                class="q-mb-md"
              />

              <q-btn
                label="Criar Jogo"
                color="primary"
                @click="handleGameAdd"
                unelevated
                class="full-width"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-card flat bordered class="q-mt-lg">
        <q-card-section>
          <div class="text-h6">3. Placar dos Jogos</div>
        </q-card-section>
        <q-separator />

        <q-card-section v-if="games.length === 0" class="text-center text-grey">
          Nenhum jogo cadastrado ainda.
        </q-card-section>

        <q-list separator>
          <q-item
            v-for="game in games"
            :key="game.id"
            class="q-py-md row items-center"
          >
            <q-item-section class="col text-right">
              <q-item-label class="text-h6">{{ game.team1 }}</q-item-label>
            </q-item-section>

            <q-item-section class="col-auto">
              <div class="row items-center no-wrap">
                <q-input
                  v-model.number="game.score1"
                  type="number"
                  outlined
                  dense
                  style="width: 70px"
                />
                <span class="text-h6 q-mx-md">X</span>
                <q-input
                  v-model.number="game.score2"
                  type="number"
                  outlined
                  dense
                  style="width: 70px"
                />
              </div>
            </q-item-section>

            <q-item-section class="col text-left">
              <q-item-label class="text-h6">{{ game.team2 }}</q-item-label>
            </q-item-section>

            <q-item-section class="col-auto">
              <q-toggle
                v-model="game.isLive"
                color="red"
                label="Ao Vivo"
                checked-icon="check"
                unchecked-icon="clear"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { teams, games, addTeam, addGame } from "src/store/campeonatoStore";

export default defineComponent({
  name: "CampeonatoPage",
  setup() {
    const newTeamName = ref("");
    const newGameTeam1 = ref(null);
    const newGameTeam2 = ref(null);
    const newGameIsLive = ref(false); // <--- NOVA VARIÁVEL para o toggle

    function handleTeamAdd() {
      if (addTeam(newTeamName.value)) {
        newTeamName.value = "";
      }
    }

    // ##### FUNÇÃO MODIFICADA #####
    function handleGameAdd() {
      // Agora passamos o valor do 'newGameIsLive' para o store
      if (
        addGame(newGameTeam1.value, newGameTeam2.value, newGameIsLive.value)
      ) {
        newGameTeam1.value = null;
        newGameTeam2.value = null;
        newGameIsLive.value = false; // Reseta o toggle
      }
    }

    return {
      newTeamName,
      newGameTeam1,
      newGameTeam2,
      newGameIsLive, // <--- Retorna a nova variável
      handleTeamAdd,
      handleGameAdd,
      teams,
      games,
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
