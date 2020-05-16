import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --font-family: 'Proxima Nova', -apple-system, 'Helvetica Neue', Helvetica, Roboto,
    Arial, sans-serif;
  --font-size-base: 16px;

  --header-bg: #fff;
  --body-bg: #fff;

  --text-color: #82939e;
  --strong-color: #333;
  --text-muted: #666;
  --primary-color: #00b8d4;

  --divider: #e9e9e9;

  --padding: 20px;
  --margin: 30px;
}


  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #__next {
    background-color: var(--body-bg);
    color: var(--strong-color);
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    font-weight: 300;
    height: 100%;
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
    padding: 0;

    &:not(h1, h2, h3, h4, h5, h6, b, strong) {
      color: var(--text-color);
    }
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .next-content {
      flex: 1;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  strong {
    color: var(--strong-color);
    font-weight: 500;
  }

  h1 {
    font-size: 1.5rem;
  }

`;
