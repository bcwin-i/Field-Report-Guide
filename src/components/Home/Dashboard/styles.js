import styled from "styled-components";

export const DashboardBody = styled.div`
  display: flex;
  padding: 5%;
  flex-direction: column;
  flex: 1;
`;

export const DashboardDiv = styled.div`
  height: 250px;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const Dashbg = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
  position: absolute;
  z-index: 0;
`;

export const DashItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  padding: 2.5%;
`;

export const DashItemsGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content:space-between;
    height: max-content;
    margin-bottom: 5px;
`
export const DashLine = styled.div`
    border-bottom: 1px dotted white;
    flex: 1;
    margin: 0 10px
`