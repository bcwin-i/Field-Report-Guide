import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { colors } from "../../../utils/colors";
import { AAInput } from "../../AccountAccess/styles";
import {
  ApproveContainer,
  GroupButton,
  GroupIns,
  GroupName,
} from "../../Home/Groups/styles";

const members = [
  {
    name: "Mr Aboagye Samuel",
    amount: 200.45,
  },
  {
    name: "Mr. Sarpong David",
    amount: 5530.34,
  },
  {
    name: "Mrs Gerrard Emilia",
    amount: 7000,
  },
  {
    name: "Mr Agyei Richmond",
    amount: 73450,
  },
  {
    name: "Miss Cynthia Addae",
    amount: 135,
  },
];

const PaymentSheet = ({ on, toggle, data }) => {
  const [choice, setChoice] = useState(null);
  const [label, setLabel] = useState("Group Payment");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setLabel("Complete Payment");
  }, [choice]);

  const close = () => {
    toggle(null, false);
    setChoice(null);
    setComplete(false)
  };

  return (
    <ApproveContainer on={on}>
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
          style={{
            position: "absolute",
            top: "2.5%",
            right: "2.5%",
            cursor: "pointer",
          }}
          color={colors.secondary}
          size={30}
          onClick={() => close()}
        />
        <RiSecurePaymentFill
          size={50}
          color={complete ? "green" : colors.secondary}
        />
        <GroupName>
          {complete ? "Payment approved" : "Approve payment"}
        </GroupName>
        {!complete ? (
          <>
            <GroupIns>
              Confirm the payment below. Total amont is {data?.depth}
            </GroupIns>
            {choice ? (
              <AAInput
                type={"number"}
                onChange={(event) => console.log(event.target.value)}
                style={{ marginTop: 10 }}
                placeholder="Enter group total amount"
              />
            ) : choice !== null ? (
              members.map((data, index) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    alignItems: "baseline",
                  }}
                >
                  <GroupName style={{ marginRight: 10 }}>{data.name}</GroupName>
                  <AAInput
                    type={"number"}
                    onChange={(event) => console.log(event.target.value)}
                    style={{ marginTop: 10 }}
                    placeholder="Enter user amount"
                  />
                </div>
              ))
            ) : null}
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
                onClick={() =>
                  choice !== null ? setComplete(true) : setChoice(true)
                }
              >
                {label}
              </GroupButton>

              {choice === null ? (
                <GroupButton
                  background={colors.accent}
                  color={colors.primary}
                  onClick={() => setChoice(false)}
                >
                  Individual Payment
                </GroupButton>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </ApproveContainer>
  );
};

export default PaymentSheet;
