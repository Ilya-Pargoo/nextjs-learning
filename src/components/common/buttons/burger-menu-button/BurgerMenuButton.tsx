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
        <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={classNames(
              'bg-black h-[3.2px] w-6 transform transition-all duration-300 origin-left',
              { 'translate-x-10': isOpen }
            )}
          />
          <div
            className={classNames(
              'bg-black h-[3.2px] w-6 rounded transform transition-all duration-300 delay-75',
              { 'translate-x-10': isOpen }
            )}
          />
          <div
            className={classNames(
              'bg-black h-[3.2px] w-6 transform transition-all duration-300 origin-left delay-150',
              { 'translate-x-10': isOpen }
            )}
          />
          <div
            className={classNames(
              'absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10',
              { 'translate-x-0 flex w-0 w-12': isOpen }
            )}
          >
            <div
              className={classNames(
                'absolute bg-black h-0.5 w-5 transform transition-all duration-500 delay-300',
                { 'rotate-0': !isOpen, 'rotate-45': isOpen }
              )}
            />
            <div
              className={classNames(
                'absolute bg-black h-0.5 w-5 transform transition-all duration-500 delay-300',
                { '-rotate-0': !isOpen, '-rotate-45': isOpen }
              )}
            />
          </div>
        </div>
      </div>
    </button>
  );
};
