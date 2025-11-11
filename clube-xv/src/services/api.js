import axios from 'axios';

const BASE = (import.meta.env.VITE_API_URL) ? import.meta.env.VITE_API_URL : 'http://localhost:3000/api';

const client = axios.create({
  baseURL: BASE,
  timeout: 5000,
});

// TEAMS
export const teamsAPI = {
  list: () => client.get('/teams').then(r => r.data),
  create: (name) => client.post('/teams', { name }).then(r => r.data),
  update: (id, name) => client.put(`/teams/${id}`, { name }).then(r => r.data),
  remove: (id) => client.delete(`/teams/${id}`).then(r => r.data),
};

// GAMES
export const gamesAPI = {
  list: () => client.get('/games').then(r => r.data),
  get: (id) => client.get(`/games/${id}`).then(r => r.data),
  create: (payload) => client.post('/games', payload).then(r => r.data),
  update: (id, payload) => client.put(`/games/${id}`, payload).then(r => r.data),
  remove: (id) => client.delete(`/games/${id}`).then(r => r.data),
  live: () => client.get('/games/live').then(r => r.data),
};

export default { teamsAPI, gamesAPI };
