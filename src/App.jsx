import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Content color="blue" text="This is my first React Application!" />
        <Content color="red" text="Wish me luck..." />
        <Content color="green" text="I think I've got it!" />
      </div>
      <Footer />
    </div>
  );
}

export default App;