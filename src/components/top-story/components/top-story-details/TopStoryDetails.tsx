import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { TopStory } from '@/api/top-stories/types';
import { format, parseISO } from 'date-fns';

type Props = {
  topStory: TopStory;
};

export const TopStoryDetails: FC<Props> = ({ topStory }) => {
  const desktopImage = topStory?.multimedia?.find(
    (media) => media.format === 'Super Jumbo'
  );

  const mobileImage = topStory?.multimedia?.find(
    (media) => media.format === 'threeByTwoSmallAt2X'
  );

  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (topStory?.created_date) {
      const date = parseISO(topStory.created_date);
      const formattedDate = format(date, 'MMMM d, yyyy, HH:mm');
      setDate(formattedDate);
    }
  }, [topStory.created_date]);

  return (
    <article
      className={classNames('mx-auto max-w-4.5xl rounded-lg py-5', 'md:py-10')}
    >
      <div
        className={classNames(
          'mb-5 flex max-w-4.5xl items-center gap-5 px-4',
          'md:mb-10',
          'lg:p-0'
        )}
      >
        <span className="max-w-max rounded-1 bg-main px-2 py-1 capitalize text-white">
          {topStory.section}
        </span>
        <p className="text-sm">{date}</p>
      </div>
      <div
        className={classNames(
          `relative mb-5 w-full flex-shrink-0 object-cover pt-[59%]`,
          'md:pt-[49%]',
          'md:mb-10'
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
          sizes="(min-width: 768px) 100vw"
        />
      </div>
      <div className={classNames('container max-w-4.5xl')}>
        <h2 className="mb-4 text-2.5xl font-semibold leading-9">
          {topStory.title}
        </h2>
        <p className="mb-10 italic">{topStory.abstract}</p>
        <div className="space-y-4">
          <p>
            {topStory.abstract} {topStory.abstract} {topStory.abstract}{' '}
            {topStory.abstract}
          </p>
          <p>
            {topStory.abstract} {topStory.abstract} {topStory.abstract}{' '}
            {topStory.abstract}
          </p>
          <p>
            {topStory.abstract} {topStory.abstract} {topStory.abstract}{' '}
            {topStory.abstract}
          </p>
        </div>
      </div>
    </article>
  );
};
