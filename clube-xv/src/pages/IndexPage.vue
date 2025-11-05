<template>
  <q-page>
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
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

// Importando TODOS os componentes que criamos
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
// ##### LINHA CORRIGIDA (estava components-sections) #####
import GuidelinesSection from "components/sections/GuidelinesSection.vue";
// ##### LINHA CORRIGIDA (estava components-sections) #####
import PlansSection from "components/sections/PlansSection.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    // Registrando TODOS os componentes na ordem de importação
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
});
</script>
