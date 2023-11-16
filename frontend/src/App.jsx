import "bootstrap/dist/css/bootstrap.min.css";
import setAuth from "./hooks/useAuth";
import Guest from "./components/navbar/guest";
import Auth from "./components/navbar/Auth";

function App() {
  const { getToken } = setAuth();

  if (!getToken) {
    return <Guest />;
  }
  return <Auth />;
}

export default App;
