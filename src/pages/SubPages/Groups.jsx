import React, { useState } from "react";
import Depths from "../../components/Groups/Depths";
import Savings from "../../components/Groups/Savings";
import { DashboardBody } from "../../components/Home/Dashboard/styles";
import {
  GroupNavDiv,
  GroupNavigationBar,
} from "../../components/Home/Groups/styles";

const Groups = () => {
  const [active, setActive] = useState(0);

  return (
    <DashboardBody>
      <GroupNavigationBar>
        <GroupNavDiv
          active={active === 0 ? true : false}
          onClick={() => setActive(0)}
        >
          Depths
        </GroupNavDiv>
        <GroupNavDiv
          active={active === 1 ? true : false}
          onClick={() => setActive(1)}
        >
          Savings
        </GroupNavDiv>
      </GroupNavigationBar>
      <div style={{ flex: 1, display: "flex", flexDirection: "row", minHeight: "100vh"}}>
        <Depths on={active === 0} />
        <Savings on={active !== 0} />
      </div>
    </DashboardBody>
  );
};

export default Groups;
