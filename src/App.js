import React from 'react';
import { MyApp } from './MyApp';
import { ThemeProvider } from '@ui5/webcomponents-react/dist/ThemeProvider'
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
      {/* <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
          Getting Started with UI5 Web Component for React
        </Link>
      </FlexBox> */}

          <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
