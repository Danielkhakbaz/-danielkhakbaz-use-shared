import { createContext, useContext, useState } from "react";

const SharedStateContext = createContext();

export const SharedStateProvider = ({ state, children }) => {
  const [data, setData] = useState(state);

  return (
    <SharedStateContext.Provider value={{ data, setData }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedStateHook = () => {
  const data = useContext(SharedStateContext);

  return [data.data, data.setData];
};
