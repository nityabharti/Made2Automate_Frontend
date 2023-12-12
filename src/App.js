import Mainpage from "./Components/Mainpage/Mainpage";
import Sidebar from "./Components/Sidebar/Sidebar";
import Stocks from "./Components/Stocks/Stocks";

function App() {
  return (
    <div>
      <Sidebar />
      <Mainpage>
        <Stocks />
      </Mainpage>
    </div>
  );
}

export default App;
