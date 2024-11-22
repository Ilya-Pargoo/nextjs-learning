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
            'flex flex-col gap-y-8 border-t-2 border-solid border-separator py-5 text-center',
            'md:flex-row md:items-center md:justify-between md:space-y-0 md:text-left'
          )}
        >
          <p
            className={classNames(
              'order-1 text-sm text-subtext',
              'md:order-none'
            )}
          >
            © 2024 Best News
          </p>
          <nav>
            <ul
              className={classNames(
                'flex flex-col justify-center space-y-5',
                'md:flex-row md:space-x-8 md:space-y-0'
              )}
            >
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={classNames(
                      'text-sm text-subtext transition-colors duration-200 ease-in',
                      'hover:text-text focus-visible:outline focus-visible:outline-main'
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
              'flex items-center justify-center space-x-8',
              'md:space-x-4'
            )}
          >
            <a href="/" target="_blank">
              <TwitterIcon
                className={classNames(
                  'h-8 w-8 text-subtext transition-colors duration-200 ease-in',
                  'hover:text-text',
                  'md:h-4 md:w-5'
                )}
              />
            </a>
            <a href="/" target="_blank">
              <FacebookIcon
                className={classNames(
                  'h-9 w-8 text-subtext transition-colors duration-200 ease-in',
                  'hover:text-text',
                  'md:h-4.5 md:w-4.5'
                )}
              />
            </a>
            <a href="/" target="_blank">
              <InstagramIcon
                className={classNames(
                  'h-8 w-8 text-subtext transition-colors duration-200 ease-in',
                  'hover:text-text',
                  'md:h-4 md:w-4'
                )}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
