import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import { colors } from "../../utils/colors";
import {
  ApproveContainer,
  DataList,
  DataListInput,
  DepthContainer,
  DepthSearch,
  DepthSep,
  GroupButton,
  GroupContainer,
  GroupFilContainer,
  GroupImg,
  GroupIns,
  GroupName,
  GroupOthers,
  GroupShowType,
} from "../Home/Groups/styles";
import GroupsData from "../../utils/data";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AAInput } from "../AccountAccess/styles";
import { GiCancel } from "react-icons/gi";

const Depths = ({ on }) => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [data, setData] = useState(null);
  const [approve, setApprove] = useState(false);
  const [groups, setGroups] = useState(GroupsData);

  const makePayment = (id, amount) => {
    setGroups((item) =>
      item.forEach((data) =>
        data.id === id ? { ...data, amount: data.amount - amount } : data
      )
    );
  };

  const toggle = (data, state) => {
    setApprove(state);
    setData(data);
  };

  return (
    <GroupShowType on={on}>
      <DepthContainer>
        <GroupFilContainer searchFocus={searchFocus ? true : false}>
          <DepthSearch
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            placeholder={`search debths by group name`}
          />
          <button
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: colors.secondary,
              padding: "4px 10px",
              borderRadius: 5,
              width: "30%",
              justifyContent: "space-evenly",
              cursor: "pointer",
              border: "none",
              color: colors.primary,
            }}
          >
            <BiSearchAlt2
              color={colors.primary}
              size={15}
              style={{ marginRight: 5 }}
            />
            search
          </button>
        </GroupFilContainer>
        <GroupFilContainer borderOff={true}>
          <DepthSep />
          <DataListInput style={{ marginRight: 10 }}>
            <option value="" disabled selected>
              choose location
            </option>
            <option>Tema com 5</option>
            <option>Apenkwa</option>
            <option>Tesano</option>
            <option>Lapaz</option>
            <option>Adjringano</option>
          </DataListInput>
          <DataListInput>
            <option value="" disabled selected>
              choose month
            </option>
            <option>January </option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </DataListInput>
        </GroupFilContainer>
      </DepthContainer>
      {groups.map((data, index) => (
        <GroupContainer key={index}>
          <GroupImg src={data.img} alt="icon" />
          <div
            style={{
              flexDirection: "column",
              paddingLeft: "3%",
              paddingRight: "3%",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <GroupName>{data.name}</GroupName>
            <GroupIns>{data.leader}</GroupIns>
            <GroupOthers>
              {data.institution} ({data.location})
            </GroupOthers>
          </div>
          <div
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <GroupName style={{ textAlign: "right", fontSize: 12 }}>
              GH₵ <span style={{ fontSize: 16 }}>{data.depth}</span>
            </GroupName>
            <GroupButton
              background={colors.primary}
              color={colors.accent}
              onClick={() => toggle(data, true)}
            >
              Make Payment
            </GroupButton>
          </div>
        </GroupContainer>
      ))}
      <ApproveContainer on={approve}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            display: "flex",
            height: "max-content",
            padding: "5%",
            flexDirection: "column",
            marginTop: "10%",
            alignItems: "center",
            position: "relative",
          }}
          onClick={() => null}
        >
          <GiCancel
            style={{ position: "absolute", top: "2.5%", right: "2.5%", cursor: "pointer" }}
            color={colors.secondary}
            size={30}
            onClick={() => toggle(null, false)}
          />
          <RiSecurePaymentFill size={50} color={colors.secondary} />
          <GroupName>Approve payment</GroupName>
          <GroupIns>Confirm the payment below</GroupIns>
          <AAInput
            type={"number"}
            onChange={(event) => console.log(event.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <GroupButton
              background={colors.primary}
              color={colors.accent}
              style={{ marginRight: 10 }}
              onClick={() => toggle(data, true)}
            >
              Group Payment
            </GroupButton>

            <GroupButton
              background={colors.accent}
              color={colors.primary}
              onClick={() => toggle(data, true)}
            >
              Individual Payment
            </GroupButton>
          </div>
        </div>
      </ApproveContainer>
    </GroupShowType>
  );
};

export default Depths;
