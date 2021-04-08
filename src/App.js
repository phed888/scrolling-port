import PageBlock from './Components/PageBlock';
import "./Styles/Fonts/Fonts.css";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <div className="welcome">Hello there</div>
        <div className="welcome2">Hello there</div>
        <div className="welcome3">Hello there</div>
        <PageBlock />
      </div>
    </>
  );
}

export default App;
