import HomePage from "@src/pages/HomePage";
import IntroductionPage from "@src/pages/IntroductionPage";
import { createContext, useEffect, useState } from "react";

export const UsedAppContext = createContext();

function App() {
  const [hasClaimed, setHasClaimed] = useState(false);

  useEffect(() => {
    const claimed = localStorage.getItem("hasClaimed") === "true";
    setHasClaimed(claimed);
  }, []);

  const handleClaim = () => {
    localStorage.setItem("hasClaimed", "true");
    setHasClaimed(true);
  };
  return (
    <div className="app">
      {/* <UsedAppContext.Provider value={hasClaimed}>
        {hasClaimed ? <HomePage /> : <IntroductionPage onClaim={handleClaim} />}
      </UsedAppContext.Provider> */}
      <h1>hi</h1>
      {/* <IntroductionPage onClaim={handleClaim} /> */}
    </div>
  );
}

export default App;
