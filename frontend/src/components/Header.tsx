import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='bg-blue-800 py-6'>
      <div className='container mx-auto flex justify-between'>
        <span className='text-3xl text-white font-bold tracking-tight'>
          StayQuest
        </span>
        <span className='flex space-x-2'>
          <span className='bg-white flex items-center text-blue-600 px-3 font-bold hover:bg-gray-700'>
            Sign In
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
