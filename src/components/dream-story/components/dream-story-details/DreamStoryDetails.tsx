import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { DreamStory } from '@/api/strapi/types';
import { format } from 'date-fns';

type Props = {
  dreamStory: DreamStory;
};

export const DreamStoryDetails: FC<Props> = ({ dreamStory }) => {
  const desktopImage = dreamStory.image.formats.large;
  const mobileImage = dreamStory.image.formats.small;

  const [date, setDate] = useState<string>('');

  useEffect(() => {
    setDate(format(dreamStory.date, 'MMMM d, yyyy, HH:mm'));
  }, [dreamStory.date]);

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
      <div className={classNames('container max-w-4.5xl')}>
        <h2 className="mb-4 text-2.5xl font-semibold leading-9">
          {dreamStory.title}
        </h2>
        <p className="mb-10">{dreamStory.description}</p>
      </div>
    </article>
  );
};
