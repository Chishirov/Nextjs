import styled from "styled-components";

export const StyledCardBox = styled((props) => <div {...props} />)`
  display:inline-block ;
  width:90%;
  background-color: #f5f5f5;
  border-radius:10px;
  :nth-child(2){
  width:95%;
};
&:nth-child(3){
  width:100%;
};
`