import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { DreamStory } from '@/api/strapi/types';
import { format, parseISO } from 'date-fns';

type Props = {
  dreamStory: DreamStory;
};

export const DreamStoriesCard: FC<Props> = ({ dreamStory }) => {
  const desktopImage = dreamStory.image.formats.large;
  const mobileImage = dreamStory.image.formats.small;

  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (dreamStory?.date) {
      const date = parseISO(dreamStory.date);
      const formattedDate = format(date, 'MMMM d, yyyy, HH:mm');
      setDate(formattedDate);
    }
  }, [dreamStory.date]);

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
          <p className={classNames('text-sm', 'md:hidden')}>{date}</p>
        </div>
        <h2 className="mb-4 text-xl font-semibold">{dreamStory.title}</h2>
        <p className={classNames('md:mb-4')}>{dreamStory.excerpt}</p>
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
          alt={dreamStory.image?.alternativeText || ''}
          fill
          className={classNames('block', 'md:hidden')}
          sizes="(max-width: 767px) 100vw"
        />
        <Image
          src={desktopImage?.url || ''}
          alt={dreamStory.image?.alternativeText || ''}
          fill
          className={classNames('hidden', 'md:block')}
          sizes="(min-width: 768px) 50vw"
        />
      </div>
    </article>
  );
};
