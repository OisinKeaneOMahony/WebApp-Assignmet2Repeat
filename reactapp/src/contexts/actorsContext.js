import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favouriteActors, setfavouriteActors] = useState( [] )

  const addTofavouriteActors = (actor) => {
    let newfavouriteActors = [...favouriteActors];
    if (!favouriteActors.includes(actor.id)) {
      newfavouriteActors.push(actor.id);
    }
    setfavouriteActors(newfavouriteActors);
  };

  const removeFromfavouriteActors = (actor) => {
    setfavouriteActors( favouriteActors.filter(
      (aId) => aId !== actor.id
    ) )
  };

 return (
    <ActorsContext.Provider
      value={{
        favouriteActors,
        addTofavouriteActors,
        removeFromfavouriteActors,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;