import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import GlobalStyle from "Layout/GlobalStyle";
import Logged from "Layout/Logged";
import withReduxStore from "lib/with-redux-store";
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <GlobalStyle />
        <Logged>
          <Component {...pageProps} className="next-content" />
        </Logged>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
