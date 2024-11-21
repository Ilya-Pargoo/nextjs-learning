import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { NAV_ITEMS } from './constants';
import InstagramIcon from '/public/icons/instagram.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import TwitterIcon from '/public/icons/twitter.svg';

export const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div
          className={classNames(
            'py-5 flex flex-col gap-y-8 text-center border-t-2 border-solid border-separator',
            'md:flex-row md:justify-between md:items-center md:space-y-0 md:text-left'
          )}
        >
          <p
            className={classNames(
              'text-sm text-subtext order-1',
              'md:order-none'
            )}
          >
            © 2024 Best News
          </p>
          <nav>
            <ul
              className={classNames(
                'flex flex-col space-y-5 justify-center',
                'md:flex-row md:space-y-0 md:space-x-8'
              )}
            >
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={classNames(
                      'text-sm text-subtext transition-colors duration-200 ease-in',
                      'focus-visible:outline focus-visible:outline-main hover:text-text'
                    )}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={classNames(
              'flex justify-center space-x-8 items-center',
              'md:space-x-4'
            )}
          >
            <a href="/" target="_blank">
              <TwitterIcon
                className={classNames(
                  'w-8 h-8 text-subtext transition-colors duration-200 ease-in',
                  'hover:text-text',
                  'md:w-5 md:h-4'
                )}
              />
            </a>
            <a href="/" target="_blank">
              <FacebookIcon
                className={classNames(
                  'w-8 h-9 text-subtext transition-colors duration-200 ease-in',
                  'hover:text-text',
                  'md:w-4.5 md:h-4.5'
                )}
              />
            </a>
            <a href="/" target="_blank">
              <InstagramIcon
                className={classNames(
                  'w-8 h-8 text-subtext transition-colors duration-200 ease-in',
                  'hover:text-text',
                  'md:w-4 md:h-4'
                )}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
