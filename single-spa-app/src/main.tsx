import './index.css'
import React, { StrictMode } from "react";
import ReactDOMClient, { createRoot } from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from './App.tsx'

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

const render = false
if (render) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export default App
