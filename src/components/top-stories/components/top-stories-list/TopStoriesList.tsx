import { FC } from 'react';
import Link from 'next/link';
import { TopStoriesCard } from '../top-stories-card';
import { TopStory } from '@/api/top-stories/types';
import { generateSlug } from '@/utils/generateSlug';
import { DYNAMIC_PAGES } from '@/constants/pages';

const { getTopStoriesPage } = DYNAMIC_PAGES;

type Props = {
  topStories: TopStory[];
};

export const TopStoriesList: FC<Props> = ({ topStories }) => {
  return (
    <ul className="flex flex-col gap-y-5">
      {topStories.map((item, index) => {
        const slug = generateSlug(item.title);
        return (
          <Link href={getTopStoriesPage(slug)} key={`${index}-${item.title}`}>
            <TopStoriesCard topStory={item} />
          </Link>
        );
      })}
    </ul>
  );
};
