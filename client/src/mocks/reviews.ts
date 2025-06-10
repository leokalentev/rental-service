import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '463623e8-eecc-42a2-b2fc-797a299b5230',
    date: '2023-06-29T21:00:00.465Z',
    user: {
      name: 'Isaac',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: true,
    },
    comment:
      'The room was spacious and clean. The pool looked nothing like the photos.',
    rating: 4,
  },
  {
    id: '9a1f2d34-12bc-4a8e-8e23-4fd3d92f3a67',
    date: '2023-05-14T10:30:00.000Z',
    user: {
      name: 'Sophia',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false,
    },
    comment:
      'Great location and friendly host, but the room was a bit small for two people.',
    rating: 3,
  },
];
