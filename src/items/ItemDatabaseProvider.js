import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { ItemDatabase } from "./ItemDatabase";

const DatabaseContext = createContext(undefined);

export const ItemDatabaseProvider = ({ children }) => {
  const [itemDatabase, setItemDatabase] = useState(new ItemDatabase());

  useEffect(() => {
    itemDatabase.refreshItemCache().then(() => {
      console.log("Created item database.");
    });
  });

  return (
    <DatabaseContext.Provider value={{ itemDatabase }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export function useItemDatabase() {
  return useContext(DatabaseContext)["itemDatabase"];
}
