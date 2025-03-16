import { NavLink, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='overflow-y-hidden'>
      <div className='flex items-center h-16 p-6 bg-gray-800 overflow-y-hidden '>
        <NavLink
          className='text-white py-2 px-4 border border-amber-50  space-y-4 bg-gray-800 rounded-md'
          to='/'
        >
          Back
        </NavLink>
      </div>
      <div className='text-center flex flex-col items-center justify-center h-screen bg-gray-800 overflow-y-hidden '>
        <h1>Oh! An Error has been occured</h1>
        {error && <p>{error.data}</p>}
      </div>
    </div>
  );
};
