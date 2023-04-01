import {
  Conference,
  Division,
} from "../../assets/data/nba/Standings";
import StandingTable from "../StandingTable/StandingTable";
import { uid } from "../../hooks/useUId";
import { getTableList } from "./model";
import "./Standings.scss";

interface Data {
  id: string;
  type: "conference" | "division";
  name: Conference | Division;
}

const Standings = () => {
  const data: Data[] = [
    { id: uid(), type: "conference", name: "west" },
    { id: uid(), type: "conference", name: "east" },
    { id: uid(), type: "division", name: "atlantic" },
    { id: uid(), type: "division", name: "central" },
    { id: uid(), type: "division", name: "northwest" },
    { id: uid(), type: "division", name: "pacific" },
    { id: uid(), type: "division", name: "southeast" },
    { id: uid(), type: "division", name: "southwest" }
  ];

  return (
    <div className="standings">
      {data.map((table, index) => (
        <StandingTable
          key={table.id}
          title={table.name}
          firstTable={index === 0}
          data={getTableList(table.type, table.name)}
        />
      ))}
    </div>
  );
};

export default Standings;
