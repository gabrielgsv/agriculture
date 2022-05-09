import { css } from '@emotion/css';

export const animation = css`
  width: 50px;
`;

export const navItem = css`
  display: flex;
  align-items: center;
  justify-content: last baseline;
  border-radius: 7px;
  cursor: pointer;
  width: 90%;
  text-decoration: none;
  padding: 16px;
  margin: 0 16px;
`

export const activeNavItem = css`
  background-color: #319795;
  color: #fff;
`