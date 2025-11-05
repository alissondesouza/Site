// src/store/campeonatoStore.js
import { ref } from "vue";

export const teams = ref([]);
export const games = ref([]);

export function addTeam(teamName) {
  if (
    teamName &&
    teamName.trim() !== "" &&
    !teams.value.includes(teamName.trim())
  ) {
    teams.value.push(teamName.trim());
    return true;
  }
  return false;
}

// ##### MODIFICADO #####
// Agora, também passamos o status 'isLive' ao criar um jogo
export function addGame(team1, team2, isLive) {
  if (team1 && team2 && team1 !== team2) {
    games.value.push({
      id: Date.now(),
      team1: team1,
      team2: team2,
      score1: 0,
      score2: 0,
      isLive: isLive, // <--- NOVA PROPRIEDADE ADICIONADA
    });
    return true;
  }
  return false;
}
