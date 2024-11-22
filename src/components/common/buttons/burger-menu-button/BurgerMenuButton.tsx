import { FC } from 'react';
import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export const BurgerMenuButton: FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button
      className={classNames('focus:outline-none', 'md:hidden')}
      onClick={onClick}
    >
      <div className={'relative flex items-center justify-center'}>
        <div className="flex h-5 w-5 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={classNames(
              'h-[3.2px] w-6 origin-left transform bg-black transition-all duration-300',
              { 'translate-x-10': isOpen }
            )}
          />
          <div
            className={classNames(
              'h-[3.2px] w-6 transform rounded bg-black transition-all delay-75 duration-300',
              { 'translate-x-10': isOpen }
            )}
          />
          <div
            className={classNames(
              'h-[3.2px] w-6 origin-left transform bg-black transition-all delay-150 duration-300',
              { 'translate-x-10': isOpen }
            )}
          />
          <div
            className={classNames(
              'absolute top-2.5 -translate-x-10 transform items-center justify-between transition-all duration-500',
              { 'flex w-0 w-12 translate-x-0': isOpen }
            )}
          >
            <div
              className={classNames(
                'absolute h-0.5 w-5 transform bg-black transition-all delay-300 duration-500',
                { 'rotate-0': !isOpen, 'rotate-45': isOpen }
              )}
            />
            <div
              className={classNames(
                'absolute h-0.5 w-5 transform bg-black transition-all delay-300 duration-500',
                { '-rotate-0': !isOpen, '-rotate-45': isOpen }
              )}
            />
          </div>
        </div>
      </div>
    </button>
  );
};
