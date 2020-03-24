import withReduxStore from "../lib/with-redux-store";
import Layout from "../components/Layout";

// import "../styles/app.scss";

import React from "react";
import App from "next/app";
import { Provider } from "react-redux";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <style jsx>{`
          #__next {
            display: flex;
            margin-top: 4.5rem;
          }
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
