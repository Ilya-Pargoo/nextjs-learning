import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { formatDate } from '@/utils/formatDate';
import { TopStoryType } from '@/api/top-stories/types';

type Props = {
  topStory: TopStoryType;
};

export const TopStoriesCard: FC<Props> = ({ topStory }) => {
  const desktopImage = topStory.multimedia.find(
    (media) => media.format === 'Super Jumbo'
  );
  const mobileImage = topStory.multimedia.find(
    (media) => media.format === 'threeByTwoSmallAt2X'
  );

  return (
    <article
      className={classNames(
        'flex w-full flex-col rounded-lg bg-white shadow-top-stories',
        'md:flex-row'
      )}
    >
      <div className={classNames('flex flex-1 flex-col p-5', 'md:p-10')}>
        <div
          className={classNames(
            'mb-5 flex items-center justify-between',
            'md:mb-6'
          )}
        >
          <span className="mr-5 max-w-max rounded-1 bg-main px-2 py-1 capitalize text-white">
            {topStory.section}
          </span>
          <p className={classNames('text-sm', 'md:hidden')}>
            {formatDate(topStory.created_date)}
          </p>
        </div>
        <h2 className="mb-4 text-xl font-semibold">{topStory.title}</h2>
        <p className={classNames('md:mb-4')}>{topStory.abstract}</p>
        <p className={classNames('mt-auto hidden text-sm', 'md:block')}>
          {formatDate(topStory.created_date)}
        </p>
      </div>
      <div
        className={classNames(
          `relative w-full flex-shrink-0 pt-[70%]`,
          'md:pt-[38%]',
          'md:w-1/2'
        )}
      >
        <Image
          src={mobileImage?.url || ''}
          alt={mobileImage?.caption || ''}
          fill
          objectFit="cover"
          className={classNames('block', 'md:hidden')}
        />
        <Image
          src={desktopImage?.url || ''}
          alt={desktopImage?.caption || ''}
          fill
          objectFit="cover"
          className={classNames('hidden', 'md:block')}
        />
      </div>
    </article>
  );
};
