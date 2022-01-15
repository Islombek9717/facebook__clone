import "./App.css";
import Body from "./components/AppBody/Body";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Body />
        </>
      )}
    </div>
  );
}

export default App;
