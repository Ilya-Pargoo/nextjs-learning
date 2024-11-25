import { FC } from 'react';
import Link from 'next/link';
import { TopStoriesCard } from '../top-stories-card';
import { TopStory } from '@/api/top-stories/types';

type Props = {
  topStories: TopStory[];
};

export const TopStoriesList: FC<Props> = ({ topStories }) => {
  return (
    <ul className="flex flex-col gap-y-5">
      {topStories.map((item, index) => (
        <Link href={''} key={`${index}-${item.title}`}>
          <TopStoriesCard topStory={item} />
        </Link>
      ))}
    </ul>
  );
};
