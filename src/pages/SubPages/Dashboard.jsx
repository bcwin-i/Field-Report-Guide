import React from "react";

import DashboardOne from "../../assets/dashboard.svg";
import Dashboard2 from "../../assets/dashboard2.svg";
import { AppDesc, AppName } from "../../components/AccountAccess/styles";
import { GButton } from "../../components/Global/styles";

import {
  Dashbg,
  DashboardBody,
  DashboardDiv,
  DashItems,
  DashItemsGroup,
  DashLine,
} from "../../components/Home/Dashboard/styles";
import { colors } from "../../utils/colors";

const Dashboard = () => {
  return (
    <DashboardBody>
      <DashboardDiv style={{ marginBottom: 70 }}>
        <Dashbg alt="dashboard background" src={DashboardOne} />
        <DashItems>
          <AppName style={{ color: "white", margin: 0 }}>
            Group Loan Repayment
          </AppName>
          <div>
            <DashItemsGroup>
              <AppDesc>Name</AppDesc>
              <AppDesc>Amount</AppDesc>
            </DashItemsGroup>
            <DashItemsGroup>
              <AppDesc style={{ color: "white" }}>Amount Expected </AppDesc>
              <DashLine />
              <AppName style={{ color: "white", margin: 0 }}>
                {" "}
                GH₵ 20,000.00
              </AppName>
            </DashItemsGroup>
            <DashItemsGroup>
              <AppDesc style={{ color: "white" }}>Actual Amount </AppDesc>
              <DashLine />
              <AppName style={{ color: "white", margin: 0 }}>
                {" "}
                GH₵ 15,070.50
              </AppName>
            </DashItemsGroup>
          </div>
          <DashItemsGroup>
            <AppDesc style={{ textAlign: "left" }}>
              Number of groups{" "}
              <span style={{ fontWeight: "bold", fontSize: 20, marginLeft: 5 }}>
                7
              </span>
            </AppDesc>
            <GButton background={colors.accent} color={colors.primary}>
              Collect Payment
            </GButton>
          </DashItemsGroup>
        </DashItems>
      </DashboardDiv>
      <DashboardDiv>
        <Dashbg alt="dashboard background" src={Dashboard2} />
        <DashItems>
          <AppName style={{ color: "white", margin: 0 }}>
            Group Savings
          </AppName>
          <div>
            <DashItemsGroup>
              <AppDesc>Name</AppDesc>
              <AppDesc style={{color: colors.primary}}>Amount</AppDesc>
            </DashItemsGroup>
            <DashItemsGroup>
              <AppDesc style={{ color: "white" }}>Amount Recorded </AppDesc>
              <DashLine />
              <AppName style={{ color: colors.primary, margin: 0 }}>
                {" "}
                GH₵ 11,050.00
              </AppName>
            </DashItemsGroup>
          </div>
          <DashItemsGroup>
            <AppDesc style={{ textAlign: "left" }}>
              Number of groups{" "}
              <span style={{ fontWeight: "bold", fontSize: 20, marginLeft: 5 }}>
                7
              </span>
            </AppDesc>
            <GButton background={colors.primary} color={colors.accent}>
              Collect Deposits
            </GButton>
          </DashItemsGroup>
        </DashItems>
      </DashboardDiv>
    </DashboardBody>
  );
};

export default Dashboard;
