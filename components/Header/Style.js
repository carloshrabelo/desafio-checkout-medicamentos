import styled from "styled-components";

export const Header = styled.div`
  background: #fafafa;
  border-bottom: 1px solid var(--divider);
  cursor: pointer;
  display: flex;
`;

export const Content = styled.div`
  padding: calc(var(--padding) / 2) 0;
`;

export const Icon = styled.div`
  line-height: 2rem;
  padding: calc(var(--padding) / 2) var(--margin);
  text-align: center;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
`;
