import React from "react";
import styled from "styled-components";
import { Grid, Text } from "./index";

const Input = (props) => {
  const { label, placeholder, _onChange, type } = props;

  return (
    <>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </>
  );
};

Input.defaultProps = {
  lebel: "text",
  placeholder: "값을 입력해주세요",
  type: "text",
  _onChange: () => {},
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
