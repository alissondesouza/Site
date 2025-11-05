<template>
  <div
    v-if="liveGames.length > 0"
    class="marquee-container row items-center no-wrap bg-blue-grey-10 text-white shadow-3"
  >
    <div class="live-tag q-pa-sm text-center bg-red text-weight-bolder">
      <span>AO VIVO</span>
    </div>

    <div class="marquee-scroller">
      <div class="marquee-content-inner">
        <div class="game-list">
          <span v-for="game in liveGames" :key="game.id" class="game-item">
            <span class="team-name">{{ game.team1 }}</span>
            <span class="score">{{ game.score1 }} x {{ game.score2 }}</span>
            <span class="team-name">{{ game.team2 }}</span>
          </span>
        </div>

        <div class="game-list" aria-hidden="true">
          <span v-for="game in liveGames" :key="game.id" class="game-item">
            <span class="team-name">{{ game.team1 }}</span>
            <span class="score">{{ game.score1 }} x {{ game.score2 }}</span>
            <span class="team-name">{{ game.team2 }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ##### MODIFICADO: Importa 'computed' #####
import { defineComponent, computed } from "vue";
import { games } from "src/store/campeonatoStore";

export default defineComponent({
  name: "ScoresMarqueeSection",
  setup() {
    // ##### NOVO: Cria uma lista filtrada #####
    // 'computed' cria uma nova lista que se atualiza automaticamente
    // sempre que a lista 'games' original mudar.
    const liveGames = computed(() => {
      return games.value.filter((game) => game.isLive === true);
    });

    return {
      liveGames, // <-- Retorna a lista filtrada, em vez da lista completa
    };
  },
});
</script>

<style lang="scss" scoped>
/* O CSS NÃO MUDA NADA */
.marquee-container {
  width: 100%;
  overflow: hidden;
  height: 40px;
  border-bottom: 2px solid $accent;
}
.live-tag {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}
.marquee-scroller {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
}
.marquee-content-inner {
  display: flex;
  flex-wrap: nowrap;
  animation: marquee 30s linear infinite;
}
.game-list {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
  min-width: 100%;
}
.game-item {
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1.5rem;
  .team-name {
    opacity: 0.9;
  }
  .score {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 2px 8px;
    border-radius: 4px;
    margin: 0 12px;
    font-weight: bold;
    font-size: 1.1rem;
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
