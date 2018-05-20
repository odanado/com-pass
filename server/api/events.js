import { Router } from 'express';

const router = Router();

const events = [
  {
    title: '第18回　煌めき☆ボウリング & ビリヤードor卓球', name: 'スポーツ', place: '麻布十番', date: '2018/05/20', number: '10', level: { support: '1', paresis: 'one_hand' }, type: '2',

  },
  {
    title: '第144回　テニスを楽しもう！　in　東京　☆　～', name: 'スポーツ', place: '秋葉原', date: '2018/05/22', number: '10', level: { support: '2', paresis: 'one_hand' }, type: '1',

  },
  {
    title: '映画同好会のお誘いです☆彡', name: '芸術', place: '新宿', date: '2018/05/23', number: '10', level: { support: '1', paresis: 'half_body' }, type: '2',
  },
  {
    title: 'ランチと美術観賞', name: '芸術', place: '千代田', date: '2018/05/24', number: '10', level: { support: '1', paresis: 'two_hand' }, type: '2',
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
    res.json(events[id]);
  } else {
    res.sendStatus(404);
  }
});

export default router;
