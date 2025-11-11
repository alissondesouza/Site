// src/store/campeonatoStore.js
import { ref } from "vue";

export const teams = ref([]);
export const games = ref([]);

/* Mantém sua função original */
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

/* Atualiza addGame para armazenar status em vez de isLive cru
   e opcionalmente sincroniza com backend (descomente/ajuste se tiver endpoint) */
export async function addGame(team1, team2, isLive) {
  if (team1 && team2 && team1 !== team2) {
    const newGame = {
      id: Date.now(),
      team1,
      team2,
      score1: 0,
      score2: 0,
      status: isLive ? "live" : "scheduled", // scheduled | live | finalized
    };
    games.value.push(newGame);

    // Se tiver endpoint para criar jogo, descomente e ajuste:
    // try {
    //   await fetch('/campeonato', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(newGame)
    //   });
    // } catch (err) { console.error('addGame sync error', err); }

    return true;
  }
  return false;
}

/* Carrega jogos do backend e popula games.value */
export async function fetchGames() {
  try {
    const base =
      (typeof import.meta !== "undefined" &&
        import.meta.env &&
        import.meta.env.VITE_API_BASE) ||
      `http://${location.hostname}:3000`;

    const url = `${base.replace(/\/$/, "")}/api/games`;
    console.log("fetchGames -> url:", url);

    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`fetch error ${res.status} - ${text.slice(0, 500)}`);
    }
    const data = await res.json();
    const rows = Array.isArray(data) ? data : data.data || [];

    // Normaliza os objetos para o frontend (garante team1/team2 e date)
    games.value = rows.map((r) => ({
      ...r,
      team1: r.team1_name || r.team1 || (r.team1_id ? `#${r.team1_id}` : ""),
      team2: r.team2_name || r.team2 || (r.team2_id ? `#${r.team2_id}` : ""),
      date: r.created_at || r.date || "",
    }));

    console.log("fetchGames -> sucesso:", games.value.length, "jogos");
    return games.value;
  } catch (err) {
    console.error("fetchGames error:", err);
    return [];
  }
}

/* Novas operações para edição/exclusão e controle de status */
export async function updateGame(updated) {
  const idx = games.value.findIndex((g) => g.id === updated.id);
  if (idx !== -1) {
    games.value[idx] = { ...games.value[idx], ...updated };

    // Se houver endpoint para atualizar no backend, descomente/ajuste:
    // try {
    //   await fetch(`/campeonato/${updated.id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(updated)
    //   });
    // } catch (err) { console.error('updateGame sync error', err); }

    return true;
  }
  return false;
}

export async function deleteGame(id) {
  const idx = games.value.findIndex((g) => g.id === id);
  if (idx !== -1) {
    games.value.splice(idx, 1);

    // Se houver endpoint para deletar no backend, descomente/ajuste:
    // try {
    //   await fetch(`/campeonato/${id}`, { method: 'DELETE' });
    // } catch (err) { console.error('deleteGame sync error', err); }

    return true;
  }
  return false;
}

export async function setLive(id) {
  const g = games.value.find((x) => x.id === id);
  if (g && g.status !== "finalized") {
    g.status = "live";

    // Sincronizar com backend se houver endpoint:
    // try {
    //   await fetch(`/campeonato/${id}/status`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ status: 'live' })
    //   });
    // } catch (err) { console.error('setLive sync error', err); }

    return true;
  }
  return false;
}

export async function finalizeGame(id) {
  const g = games.value.find((x) => x.id === id);
  if (g) {
    g.status = "finalized";

    // Sincronizar com backend se houver endpoint:
    // try {
    //   await fetch(`/campeonato/${id}/status`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ status: 'finalized' })
    //   });
    // } catch (err) { console.error('finalizeGame sync error', err); }

    return true;
  }
  return false;
}

/* Auto-load ao importar o store (pode comentar se preferir chamar manualmente) */
fetchGames();
