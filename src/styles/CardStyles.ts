import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 314px;
  margin: 16px;
  padding: 16px;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #007bff;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const Name = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

export const CardContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;