import { Router } from 'express';

const router = Router();

// Mock Users
const users = [
  {
    name: '野田修司', age: '70', gender: 'male', support: '1', paresis: 'one_hand',
  },
  {
    name: '河合健一', age: '65', gender: 'male', support: '2', paresis: 'two_hand',
  },
  {
    name: '中村菜々子', age: '74', gender: 'female', support: '1', paresis: 'half_body',
  },
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
