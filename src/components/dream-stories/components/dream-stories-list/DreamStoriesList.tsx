import { FC } from 'react';
import Link from 'next/link';
import { DreamStoriesCard } from '../dream-stories-card';
import { DreamStory } from '@/api/strapi/types';
import { DYNAMIC_PAGES } from '@/constants/pages';

const { getDreamStoriesPage } = DYNAMIC_PAGES;

type Props = {
  dreamStories: DreamStory[];
};

export const DreamStoriesList: FC<Props> = ({ dreamStories }) => {
  return (
    <ul className="flex flex-col gap-y-5">
      {dreamStories.map((item) => {
        return (
          <Link href={getDreamStoriesPage(item.slug)} key={item.id}>
            <DreamStoriesCard key={item.id} dreamStory={item} />
          </Link>
        );
      })}
    </ul>
  );
};
