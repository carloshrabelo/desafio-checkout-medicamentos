import styled from "styled-components";

export const ListItem = styled.div`
  border-bottom: 1px solid var(--divider);
  cursor: pointer;
  display: flex;
  padding: var(--padding) var(--margin);

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
`;

export const Icon = styled.div`
  margin-right: var(--padding);
  text-align: center;
  width: 32px;
`;
