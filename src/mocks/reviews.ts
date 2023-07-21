import { TReview } from '../types/review.ts';

export const reviews: TReview[] = [
  {
    id: crypto.randomUUID(),
    date: new Date().toDateString(),
    user: {
      name: 'Dima',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 5
  },
  {
    id: crypto.randomUUID(),
    date: new Date().toDateString(),
    user: {
      name: 'Rob',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isPro: false
    },
    comment: 'Solicitude matters gone. Prudent rapid denoting nor beloved wrote middleton wishes roused curiosity sons belonging thing. First sympathize belonging him doors worse guest chicken preserved. Daughter immediate moreover except worth ample. Wise blush forth likely jointure agreeable others season devonshire ask boy order wisdom gate additions took tell.',
    rating: 5
  },
  {
    id: crypto.randomUUID(),
    date: new Date().toDateString(),
    user: {
      name: 'Oleg',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
      isPro: true
    },
    comment: 'Blush intention enjoyment believed thrown excellence daughters dejection exquisite. Yet scale towards admiration gentleman effect least any ladies except decisively. Mother shewing strongly limited.',
    rating: 5
  }
];
