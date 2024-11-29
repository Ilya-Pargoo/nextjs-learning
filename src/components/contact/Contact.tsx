import { FC } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isDate, parse, subYears } from 'date-fns';

const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  surname: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please, type a valid email' }),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters long' }),
  birthday: z.string().refine(
    (date) => {
      const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
      return isDate(parsedDate) && subYears(new Date(), 18) >= parsedDate;
    },
    { message: 'You must be at least 18 years old' }
  ),
});

type ContactForm = z.infer<typeof ContactFormSchema>;

export const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold">Styled Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                {...register('name')}
                id="name"
                name="name"
                type="text"
                className={classNames(
                  'mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm',
                  {
                    'border-pink-700 focus-visible:outline-pink-700':
                      errors.name,
                  }
                )}
              />
              {errors.name ? (
                <span className="text-xs text-rose-700">
                  {errors.name.message}
                </span>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                {...register('surname')}
                id="surname"
                name="surname"
                type="text"
                className={classNames(
                  'mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm',
                  {
                    'border-pink-700 focus-visible:outline-pink-700':
                      errors.surname,
                  }
                )}
              />
              {errors.surname ? (
                <span className="text-xs text-rose-700">
                  {errors.surname.message}
                </span>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                {...register('email')}
                id="email"
                name="email"
                type="email"
                className={classNames(
                  'mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm',
                  {
                    'border-pink-700 focus-visible:outline-pink-700':
                      errors.email,
                  }
                )}
              />
              {errors.email ? (
                <span className="text-xs text-rose-700">
                  {errors.email.message}
                </span>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                {...register('address')}
                id="address"
                name="address"
                type="text"
                className={classNames(
                  'mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm',
                  {
                    'border-pink-700 focus-visible:outline-pink-700':
                      errors.address,
                  }
                )}
              />
              {errors.address ? (
                <span className="text-xs text-rose-700">
                  {errors.address.message}
                </span>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="birthday"
                className="block text-sm font-medium text-gray-700"
              >
                Birthday
              </label>
              <input
                {...register('birthday')}
                id="birthday"
                name="birthday"
                type="date"
                className={classNames(
                  'mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm',
                  {
                    'border-pink-700 focus-visible:outline-pink-700':
                      errors.birthday,
                  }
                )}
              />
              {errors.birthday ? (
                <span className="text-xs text-rose-700">
                  {errors.birthday.message}
                </span>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-red-800 px-4 py-2 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
