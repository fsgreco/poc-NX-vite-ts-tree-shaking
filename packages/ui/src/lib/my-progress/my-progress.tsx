import styled from 'styled-components';
import { Progress } from 'antd';

/* eslint-disable-next-line */
export interface MyProgressProps {}

const StyledMyProgress = styled.div`
  background-color: grey;
`;

export function MyProgress(props: MyProgressProps) {
  return (
    <StyledMyProgress>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </StyledMyProgress>
  );
}

export default MyProgress;
