import type { IFeaturesCardItem } from '../components/features-section/types';
import featuresImage1 from '../assets/features-section/Icon_list-1.png';
import featuresImage2 from '../assets/features-section/Icon-reminder-2.png';
import featuresImage3 from '../assets/features-section/Icon-complecation-3.png';

export const featuresContent: IFeaturesCardItem[] = [
  {
    id: 0,
    title: 'Preset List of Task',
    description: 'Make bill payments easily using the wallet app',
    image: featuresImage1,
    color: 'bg-blue',
  },

  {
    id: 1,
    title: 'Reminder of Task',
    description: 'Make bill payments easily using the wallet app',
    image: featuresImage2,
    color: 'bg-purple',
  },
  {
    id: 2,
    title: 'Complecation Report',
    description: 'Make bill payments easily using the wallet app',
    image: featuresImage3,
    color: 'bg-orange-1',
  },
];
