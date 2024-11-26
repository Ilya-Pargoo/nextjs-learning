import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { TopStory } from '@/api/top-stories/types';
import { format } from 'date-fns';

type Props = {
  topStory: TopStory;
};

export const TopStoriesCard: FC<Props> = ({ topStory }) => {
  const desktopImage = topStory.multimedia.find(
    (media) => media.format === 'Super Jumbo'
  );

  const mobileImage = topStory.multimedia.find(
    (media) => media.format === 'threeByTwoSmallAt2X'
  );

  const [date, setDate] = useState<string>('');

  useEffect(() => {
    setDate(format(topStory.created_date, 'MMMM d, yyyy, HH:mm'));
  }, [topStory.created_date]);

  return (
    <article
      className={classNames(
        'flex w-full flex-col rounded-lg bg-white shadow-top-stories transition-shadow duration-300 ease-in-out',
        'hover:shadow-xl',
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
          <p className={classNames('text-sm', 'md:hidden')}>{date}</p>
        </div>
        <h2 className="mb-4 text-xl font-semibold">{topStory.title}</h2>
        <p className={classNames('md:mb-4')}>{topStory.abstract}</p>
        <p className={classNames('mt-auto hidden text-sm', 'md:block')}>
          {date}
        </p>
      </div>
      <div
        className={classNames(
          `relative w-full flex-shrink-0 object-cover pt-[70%]`,
          'md:pt-[38%]',
          'md:w-1/2'
        )}
      >
        <Image
          src={mobileImage?.url || ''}
          alt={mobileImage?.caption || ''}
          fill
          className={classNames('block', 'md:hidden')}
          sizes="(max-width: 767px) 100vw"
        />
        <Image
          src={desktopImage?.url || ''}
          alt={desktopImage?.caption || ''}
          fill
          className={classNames('hidden', 'md:block')}
          sizes="(min-width: 768px) 50vw"
        />
      </div>
    </article>
  );
};
