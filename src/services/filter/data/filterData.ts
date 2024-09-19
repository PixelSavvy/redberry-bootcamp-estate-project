import { FilterPriceContent } from '@/services/filter/components/FilterPriceContent';

import { FilterAreaContent } from '../components/FilterAreaContent';
import { FilterRegionContent } from '../components/FilterRegionContent';
import { FilterRoomsContent } from '../components/FilterRoomsContent';

export const filterData = [
  {
    id: 0,
    trigger: 'რეგიონი',
    label: 'რეგიონის მიხედვით',
    content: FilterRegionContent,
  },
  {
    id: 1,
    trigger: 'საფასო კატეგორია',
    label: 'ფასის მიხედვით',
    content: FilterPriceContent,
  },
  {
    id: 2,
    trigger: 'ფართობი',
    label: 'ფართობის მიხედვით',
    content: FilterAreaContent,
  },
  {
    id: 3,
    trigger: 'საძინებლების რაოდენობა',
    label: 'საძინებლების რაოდენობა',
    content: FilterRoomsContent,
  },
];
