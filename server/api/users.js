import { Router } from 'express';

const router = Router();

// Mock Users
const users = [
  {
    name: 'Alexandre', age: '70', gender: 'male', support: '1', paresis: 'one_hand',
  },
  { name: 'Pooya' },
  { name: 'Sébastien' },
];

/* GET users listing. */
router.get('/users', (req, res) => {
  res.json(users);
});

/* GET user by ID. */
router.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

export default router;
