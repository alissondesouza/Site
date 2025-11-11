<template>
  <q-page>
    <!-- Letreiro de jogos ao vivo -->
    <section v-if="liveGames.length" class="live-marquee-wrapper">
      <div class="live-marquee">
        <div class="marquee-track" aria-hidden="true">
          <span v-for="g in liveGames" :key="g.id" class="marquee-item">
            {{ g.team1 }} {{ g.score1 }} : {{ g.score2 }} {{ g.team2 }} — Ao
            vivo &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
        </div>
      </div>

      <div class="live-controls q-pa-sm row items-center">
        <div class="col">
          <div class="text-subtitle2">Jogos ao vivo</div>
        </div>
        <div class="col-auto row">
          <q-btn
            v-for="g in liveGames"
            :key="'btn-' + g.id"
            dense
            size="sm"
            flat
            color="negative"
            class="q-ml-sm"
            :label="`Parar: ${g.team1} x ${g.team2}`"
            @click="toggleLive(g)"
          />
        </div>
      </div>
    </section>
    <!-- fim letreiro -->

    <HeroSection />

    <AboutSection />
    <ValuesSection />
    <HistorySection />
    <TimelineSection />
    <LeadershipSection />
    <ModalitiesSection />
    <SocialActivitiesSection />
    <StructureSection />
    <RestaurantSection />
    <BookingSection />
    <RulesSection />
    <GuestPolicySection />
    <GuidelinesSection />
    <PlansSection />

    <!-- Seção de jogos finalizados (tabela simples) -->
    <section
      v-if="finalizedRows.length"
      class="finalizados-section q-pa-md q-mt-lg"
    >
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h6">Jogos finalizados</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-table
            :rows="finalizedRows"
            :columns="columns"
            row-key="id"
            flat
            dense
            hide-bottom
          >
            <template v-slot:body-cell-date="props">
              <q-td :props="props">
                {{ props.row.date || "-" }}
              </q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </section>
    <!-- fim seção finalizados -->
  </q-page>
</template>

<script>
import { defineComponent, computed, onMounted, watch } from "vue";

// Importando componentes existentes
import HeroSection from "components/sections/HeroSection.vue";
import AboutSection from "components/sections/AboutSection.vue";
import ValuesSection from "components/sections/ValuesSection.vue";
import HistorySection from "components/sections/HistorySection.vue";
import TimelineSection from "components/sections/TimelineSection.vue";
import LeadershipSection from "components/sections/LeadershipSection.vue";
import ModalitiesSection from "components/sections/ModalitiesSection.vue";
import SocialActivitiesSection from "components/sections/SocialActivitiesSection.vue";
import StructureSection from "components/sections/StructureSection.vue";
import RestaurantSection from "components/sections/RestaurantSection.vue";
import BookingSection from "components/sections/BookingSection.vue";
import RulesSection from "components/sections/RulesSection.vue";
import GuestPolicySection from "components/sections/GuestPolicySection.vue";
import GuidelinesSection from "components/sections/GuidelinesSection.vue";
import PlansSection from "components/sections/PlansSection.vue";

// store (usar funções para controlar status)
import { games, setLive, updateGame } from "src/store/campeonatoStore";

export default defineComponent({
  name: "IndexPage",
  components: {
    HeroSection,
    AboutSection,
    ValuesSection,
    HistorySection,
    TimelineSection,
    LeadershipSection,
    ModalitiesSection,
    SocialActivitiesSection,
    StructureSection,
    RestaurantSection,
    BookingSection,
    RulesSection,
    GuestPolicySection,
    GuidelinesSection,
    PlansSection,
  },
  setup() {
    const finalized = computed(() =>
      games.value.filter((g) => g.status === "finalized")
    );

    const liveGames = computed(() =>
      games.value.filter((g) => g.status === "live")
    );

    // linhas formatadas para a tabela
    const finalizedRows = computed(() =>
      finalized.value.map((g) => ({
        id: g.id,
        match: `${g.team1} ${g.score1} : ${g.score2} ${g.team2}`,
        date: g.date || "",
      }))
    );

    const columns = [
      { name: "match", label: "Jogo", field: "match", align: "left" },
      { name: "date", label: "Data", field: "date", align: "left" },
    ];

    function toggleLive(g) {
      // Se estiver ao vivo, volta para scheduled; senão, ativa live
      if (g.status === "live") {
        updateGame({ id: g.id, status: "scheduled" });
      } else {
        setLive(g.id);
      }
    }

    onMounted(() => {
      console.log(
        "IndexPage montada — liveGames:",
        liveGames.value,
        "finalized:",
        finalizedRows.value
      );
    });

    watch(
      liveGames,
      (nv) => {
        console.log("liveGames mudou:", nv);
      },
      { deep: true }
    );

    watch(
      finalizedRows,
      (nv) => {
        console.log("finalizedRows mudou:", nv);
      },
      { deep: true }
    );
    // --- fim debug ---

    return { finalized, finalizedRows, liveGames, columns, toggleLive };
  },
});
</script>

<style scoped>
.finalizados-section {
  max-width: 1200px;
  margin: 0 auto;
}

/* Letreiro (marquee) simples com animação CSS */
.live-marquee-wrapper {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(33, 150, 243, 0.06),
    rgba(255, 255, 255, 0)
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.live-marquee {
  overflow: hidden;
  white-space: nowrap;
}
.marquee-track {
  display: inline-block;
  padding: 0.5rem 0;
  will-change: transform;
  animation: marquee 16s linear infinite;
}
.marquee-item {
  display: inline-block;
  font-weight: 600;
  margin-right: 2rem;
}

/* velocidade / direção */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.live-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
