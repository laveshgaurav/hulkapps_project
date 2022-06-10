import React from "react";
import Bag from "./components/Bag/Bag";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import LearnMore from "./components/LearnMore/LearnMore";

function App() {
  // state
  const [showBag, setShowBag] = React.useState(false);

  return (
    <div>
      <Header showbag={() => setShowBag(true)} />
      <Banner />
      {showBag && <Bag hideBag={() => setShowBag(false)} />}
      <LearnMore />
    </div>
  );
}

export default App;
