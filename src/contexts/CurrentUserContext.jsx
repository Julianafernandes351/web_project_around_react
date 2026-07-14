import { createContext, useContext, useState } from 'react';

export const CurrentUserContext = createContext(null);



export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    avatar: '',
    name: '',
    about: '',
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

