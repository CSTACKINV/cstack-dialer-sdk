import React from "react";
import ReactDOM from "react-dom";
import { CSDialer } from "@cleverstack/dialer-widget";

const CSDialerSDK = {
  init: (options) => {
    const { apiKey, user_id, authAPI, open, wssServer, wssPort, sipDomain, isCallingEnabled, mode, displayMode } = options;

    if (!document.getElementById("cleverstack-dialer")) {
      const dialerElement = document.createElement("div");
      dialerElement.setAttribute("id", "cleverstack-dialer");
      document.body.appendChild(dialerElement);
      ReactDOM.createRoot(document.getElementById("cleverstack-dialer")).render(
        <CSDialer
          apiKey={apiKey}
          user_id={user_id}
          authAPI={authAPI}
          showFloatingIcon={true}
          open={open}
          wssServer={wssServer}
          wssPort={wssPort}
          sipDomain={sipDomain}
          isCallingEnabled={isCallingEnabled}
          mode={mode}
          displayMode={displayMode}
        />
      );
    }
  },
};

// export default CSDialerSDK;
export { CSDialerSDK };
