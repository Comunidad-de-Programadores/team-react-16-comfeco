import React from "react";
import GroupsList from "../GroupsList/GroupsList";
import Loading from "../Loading/Loading";
import { useGlobalContext } from "../../context/contextTabGroups";
import "./GroupsContainer.scss";

export default function Groups() {
  const { groups, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (groups.length < 1) {
    return (
      <h2 className="section-title">No existen coincidencias de grupos</h2>
    );
  }

  return (
    <>
      <section className="section">
        <h2 className="section-title">Grupos</h2>
        <div className="groups-center">
          {groups.map((item) => {
            return <GroupsList key={item.id} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}
