import styled from 'styled-components';
import { Button } from 'antd';
/* eslint-disable-next-line */
export interface MyButtonProps {
  label: string;
}

const StyledMyButton = styled(Button)`
  color: pink;
`;

export function MyButton(props: MyButtonProps) {
  return <StyledMyButton>{props.label}</StyledMyButton>;
}

export default MyButton;
