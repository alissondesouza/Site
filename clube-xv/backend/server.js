const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// --- TEAMS ---
app.get('/api/teams', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM teams ORDER BY name');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/teams', async (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) return res.status(400).json({ error: 'name required' });
  try {
    const { rows } = await db.query(
      'INSERT INTO teams (name) VALUES ($1) RETURNING *',
      [name.trim()]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/teams/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  if (!name || !name.trim()) return res.status(400).json({ error: 'name required' });
  try {
    const { rowCount } = await db.query(
      'UPDATE teams SET name = $1, updated_at = now() WHERE id = $2',
      [name.trim(), id]
    );
    if (!rowCount) return res.status(404).json({ error: 'not found' });
    const { rows } = await db.query('SELECT * FROM teams WHERE id = $1', [id]);
    res.json(rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/teams/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const { rowCount } = await db.query('DELETE FROM teams WHERE id = $1', [id]);
    if (!rowCount) return res.status(404).json({ error: 'not found' });
    res.json({ deleted: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- GAMES ---
app.get('/api/games', async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT g.*, t1.name AS team1_name, t2.name AS team2_name
       FROM games g
       JOIN teams t1 ON g.team1_id = t1.id
       JOIN teams t2 ON g.team2_id = t2.id
       ORDER BY g.created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/games/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const { rows } = await db.query('SELECT * FROM games WHERE id = $1', [id]);
    if (!rows.length) return res.status(404).json({ error: 'not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/games', async (req, res) => {
  const { team1_id, team2_id, score1 = 0, score2 = 0, status = 'scheduled' } = req.body;
  if (!team1_id || !team2_id || team1_id === team2_id) return res.status(400).json({ error: 'invalid teams' });
  try {
    const { rows } = await db.query(
      `INSERT INTO games (team1_id, team2_id, score1, score2, status)
       VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [team1_id, team2_id, score1, score2, status]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/games/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { team1_id, team2_id, score1, score2, status } = req.body;
  try {
    const { rows: existingRows } = await db.query('SELECT * FROM games WHERE id = $1', [id]);
    if (!existingRows.length) return res.status(404).json({ error: 'not found' });
    const existing = existingRows[0];
    const t1 = team1_id ?? existing.team1_id;
    const t2 = team2_id ?? existing.team2_id;
    if (t1 === t2) return res.status(400).json({ error: 'same team' });
    const s1 = score1 ?? existing.score1;
    const s2 = score2 ?? existing.score2;
    const st = status ?? existing.status;

    const { rows } = await db.query(
      `UPDATE games SET team1_id=$1, team2_id=$2, score1=$3, score2=$4, status=$5, updated_at=now()
       WHERE id=$6 RETURNING *`,
      [t1, t2, s1, s2, st, id]
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/games/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const { rowCount } = await db.query('DELETE FROM games WHERE id = $1', [id]);
    if (!rowCount) return res.status(404).json({ error: 'not found' });
    res.json({ deleted: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// jogos ao vivo
app.get('/api/games/live', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM games WHERE status = $1 ORDER BY updated_at DESC', ['live']);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
