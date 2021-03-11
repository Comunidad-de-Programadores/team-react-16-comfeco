import React from "react";
import Groups from "../TabsContainers/Groups/Groups";
import Loading from "../Loading/Loading";
import { useGlobalContext } from "../../context/contextTabGroups";

export default function GroupsList() {
  const { groups, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (groups.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {groups.map((item) => {
          return <Groups key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
