import { Router } from 'express';

const router = Router();

const events = [
  {
    title: 'タイトル', name: '種目', place: '場所', date: '2018/05/20', number: '10', level: { suport: '1', paresis: 'one_hand' }, type: '1',

  },
];

/* GET users listing. */
router.get('/events', (req, res) => {
  res.json(events);
});

/* GET user by ID. */

router.get('/event/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id >= 0 && id < events.length) {
    res.json(events[id].name);
  } else {
    res.sendStatus(404);
  }
});

export default router;
