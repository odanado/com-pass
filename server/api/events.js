import { Router } from 'express';

const router = Router();

const events = [
  {
    title: 'ビリヤードをしよう！', name: 'スポーツ', place: '麻布十番', date: '2018/05/20', number: '10', level: { support: '1', paresis: 'one_hand' }, type: '1',

  },
  {
    title: 'テニスをしよう！', name: 'スポーツ', place: '秋葉原', date: '2018/05/22', number: '10', level: { support: '2', paresis: 'one_hand' }, type: '1',

  },
  {
    title: '映画を観に行こう', name: '芸術', place: '新宿', date: '2018/05/23', number: '10', level: { support: '1', paresis: 'half_body' }, type: '2',
  },
  {
    title: '美術館に行こう！', name: '芸術', place: '千代田', date: '2018/05/24', number: '10', level: { support: '1', paresis: 'two_hand' }, type: '2',
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
