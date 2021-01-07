import React, { Suspense } from "react";

import "./App.css";
import Parameters from "../Parameters/Parameters";
import Header from "../Header/Header";
import Toolbar from "../Toolbar/Toolbar";
import IconGrid from "../IconGrid/IconGrid";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Notice from "../Notice/Notice";

const errorFallback = <Notice message="Search error" />;
// const waitingFallback = <Notice type="wait" message="Loading..." />;
const waitingFallback = <Notice type="none" message="" />;

const App: React.FC<any> = () => {
  return (
    <React.StrictMode>
      <Parameters />
      <Header />
      <main>
        <Toolbar />
        <ErrorBoundary fallback={errorFallback}>
          <Suspense fallback={waitingFallback}>
            <IconGrid />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
