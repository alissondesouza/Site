<template>
  <q-page class="q-pa-md">
    <div class="container">
      <h2 class="text-h3 text-weight-bold q-mb-md">Gerenciador do Campeonato</h2>

      <div class="row q-col-gutter-lg">
        <!-- Cadastrar Times -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">1. Cadastrar Times</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-input v-model="newTeamName" @keyup.enter="handleTeamAdd" placeholder="Nome do time" dense />
              <q-btn class="q-mt-sm" label="Adicionar Time" color="primary" unelevated @click="handleTeamAdd"
                :disable="!newTeamName.trim()" />
              <div class="q-mt-sm">
                <q-list bordered v-if="teams.length">
                  <q-item v-for="t in teams" :key="t.id">
                    <q-item-section>{{ t.name }}</q-item-section>
                    <q-item-section side>
                      <q-btn dense size="sm" flat color="negative" @click="removeTeam(t.id)">Excluir</q-btn>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Cadastrar Jogos -->
        <div class="col-12 col-md-6">
          <q-card flat bordered class="full-height">
            <q-card-section>
              <div class="text-h6">2. Cadastrar Jogos</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-select
                v-model="newGameTeam1"
                :options="teamsOptions"
                option-value="value"
                option-label="label"
                emit-value
                map-options
                label="Time da casa"
                class="q-mb-md"
                dense
              />
              <q-select
                v-model="newGameTeam2"
                :options="teamsOptions"
                option-value="value"
                option-label="label"
                emit-value
                map-options
                label="Time visitante"
                class="q-mb-md"
                dense
              />

              <q-toggle v-model="newGameIsLive" label="Cadastrar como Ao Vivo" class="q-mb-md" />

              <q-btn class="full-width" label="Cadastrar Jogo" color="secondary" @click="handleGameAdd"
                :disable="!canAddGame" unelevated />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Placar dos Jogos -->
      <q-card flat bordered class="q-mt-lg">
        <q-card-section>
          <div class="text-h6">3. Placar dos Jogos</div>
        </q-card-section>
        <q-separator />

        <q-card-section v-if="games.length === 0" class="text-center text-grey">
          Nenhum jogo cadastrado ainda.
        </q-card-section>

        <q-list separator>
          <q-item v-for="game in games" :key="game.id" class="q-py-md row items-center">
            <q-item-section class="col text-right">
              <q-item-label class="text-h6">{{ game.team1_name }}</q-item-label>
            </q-item-section>

            <q-item-section class="col-auto">
              <div class="row items-center no-wrap">
                <div v-if="editingId !== game.id" class="text-h6">
                  {{ game.score1 }} : {{ game.score2 }}
                  <small v-if="game.status === 'live'"> — Ao vivo</small>
                  <small v-else-if="game.status === 'finalized'"> — Finalizado</small>
                </div>

                <div v-else class="row items-center">
                  <q-input v-model.number="editScore1" type="number" style="width:70px" dense />
                  <div class="q-mx-sm">:</div>
                  <q-input v-model.number="editScore2" type="number" style="width:70px" dense />
                </div>
              </div>
            </q-item-section>

            <q-item-section class="col text-left">
              <q-item-label class="text-h6">{{ game.team2_name }}</q-item-label>
            </q-item-section>

            <q-item-section class="col-auto">
              <q-btn size="sm" color="primary" label="Editar" class="q-mr-sm"
                     @click="startEdit(game)" v-if="editingId !== game.id && game.status !== 'finalized'" />
              <q-btn size="sm" color="positive" label="Salvar" class="q-mr-sm"
                     @click="saveEdit(game)" v-if="editingId === game.id" />
              <q-btn size="sm" color="negative" flat label="Excluir" class="q-mr-sm"
                     @click="removeGame(game.id)" />
              <q-btn size="sm" color="warning" flat label="Ao vivo"
                     @click="goLive(game.id)" :disable="game.status === 'finalized' || game.status === 'live'" />
              <q-btn size="sm" color="dark" flat label="Jogo finalizado"
                     @click="finishGame(game.id)" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import { teamsAPI, gamesAPI } from "src/services/api";

export default defineComponent({
  name: "CampeonatoPage",
  setup() {
    const newTeamName = ref("");
    const newGameTeam1 = ref(null);
    const newGameTeam2 = ref(null);
    const newGameIsLive = ref(false);

    const teams = ref([]);
    const games = ref([]);

    const editingId = ref(null);
    const editScore1 = ref(0);
    const editScore2 = ref(0);

    const teamsOptions = computed(() => teams.value.map(t => ({ label: t.name, value: t.id })));
    const canAddGame = computed(() => newGameTeam1.value && newGameTeam2.value && newGameTeam1.value !== newGameTeam2.value);

    async function fetchTeams() {
      try {
        teams.value = await teamsAPI.list();
      } catch (err) {
        console.error(err);
        alert('Erro ao buscar times: ' + (err.response?.data?.error || err.message));
      }
    }
    async function fetchGames() {
      try {
        games.value = await gamesAPI.list();
      } catch (err) {
        console.error(err);
        alert('Erro ao buscar jogos: ' + (err.response?.data?.error || err.message));
      }
    }

    async function handleTeamAdd() {
      if (!newTeamName.value.trim()) return;
      try {
        await teamsAPI.create(newTeamName.value.trim());
        newTeamName.value = "";
        await fetchTeams();
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.error || err.message);
      }
    }

    async function removeTeam(id) {
      if (!confirm('Excluir esse time?')) return;
      try {
        await teamsAPI.remove(id);
        await fetchTeams();
        await fetchGames(); // jogos podem ter sido removidos via FK cascade
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.error || err.message);
      }
    }

    async function handleGameAdd() {
      if (!canAddGame.value) return;
      try {
        await gamesAPI.create({
          team1_id: newGameTeam1.value,
          team2_id: newGameTeam2.value,
          score1: 0,
          score2: 0,
          status: newGameIsLive.value ? 'live' : 'scheduled'
        });
        newGameTeam1.value = null;
        newGameTeam2.value = null;
        newGameIsLive.value = false;
        await fetchGames();
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.error || err.message);
      }
    }

    function startEdit(game) {
      if (game.status === 'finalized') return;
      editingId.value = game.id;
      editScore1.value = game.score1;
      editScore2.value = game.score2;
    }

    async function saveEdit(game) {
      try {
        await gamesAPI.update(game.id, { score1: Number(editScore1.value), score2: Number(editScore2.value) });
        editingId.value = null;
        await fetchGames();
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.error || err.message);
      }
    }

    async function removeGame(id) {
      if (!confirm('Excluir este jogo?')) return;
      try {
        await gamesAPI.remove(id);
        if (editingId.value === id) editingId.value = null;
        await fetchGames();
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.error || err.message);
      }
    }

    async function goLive(id) {
      try {
        await gamesAPI.update(id, { status: 'live' });
        await fetchGames();
      } catch (err) {
        console.error(err);
      }
    }

    async function finishGame(id) {
      try {
        await gamesAPI.update(id, { status: 'finalized' });
        await fetchGames();
      } catch (err) {
        console.error(err);
      }
    }

    onMounted(async () => {
      await fetchTeams();
      await fetchGames();
    });

    return {
      newTeamName,
      newGameTeam1,
      newGameTeam2,
      newGameIsLive,
      handleTeamAdd,
      handleGameAdd,
      teams,
      teamsOptions,
      games,
      editingId,
      editScore1,
      editScore2,
      startEdit,
      saveEdit,
      removeGame,
      removeTeam,
      goLive,
      finishGame,
      canAddGame,
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
