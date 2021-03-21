import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url =
  "https://my-json-server.typicode.com/Comunidad-de-Programadores/team-react-16-comfeco-apifake/groups";
const AppContext = React.createContext();

const AppProviderGroups = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [groups, setGroups] = useState([]);
  const [etiquetas, setEtiquetas] = useState([]);

  const fetchGroups = useCallback(async () => {
    setLoading(true);
    try {
      const responseExtra = await fetch(`${url}`);
      const dataExtra = await responseExtra.json();
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();

      setEtiquetas(dataExtra);
      const groups = data;
      if (groups) {
        const newGroups = groups.map((item) => {
          const { id, namegroup, tag, avatarUrl, description } = item;
          return {
            id: id,
            name: namegroup,
            image: avatarUrl,
            info: description,
            etiq: tag,
          };
        });
        setGroups(newGroups);
      } else {
        setGroups([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchGroups();
  }, [searchTerm, fetchGroups]);

  return (
    <AppContext.Provider
      value={{ loading, groups, etiquetas, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProviderGroups };
