
import React from 'react';

const SearchBar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
 <span className='border border-blue-500 rounded-full overflow-hidden pl-2 hidden md:block'>
  <form action="#" method='get'>
    <input type="text" placeholder="Trouvez un article" className='border-none outline-none' />
    <button type="submit" className='bg-blue-500 p-2 font-bold'>Rechercher</button>
  </form>
 </span>
);

export default SearchBar;