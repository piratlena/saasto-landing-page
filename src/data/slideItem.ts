import type { ISlideItem } from '@/components/reviews-section/types';
import reviewImage1 from '../assets/reviews-section/review_1.png';
import reviewImage2 from '../assets/reviews-section/review_2.png';
import reviewImage3 from '../assets/reviews-section/review_3.png';

export const slideContent: ISlideItem[] = [
  {
    id: 0,
    name: 'Mila McSabbu',
    review:
      'Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding',
    image: reviewImage1,
    occupation: 'Designer',
  },

  {
    id: 1,
    name: 'John Dhoa',
    review:
      'Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding',
    image: reviewImage2,
    occupation: 'Seller',
  },

  {
    id: 2,
    name: 'Sarah Smith',
    review:
      'Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding',
    image: reviewImage3,
    occupation: 'Producer',
  },
];
