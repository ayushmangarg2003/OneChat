import Register from "./Register";
import axios from "axios";

function App() {
  axios.defaults.baseURL = 'http://127.0.0.1:4000/';
  axios.defaults.withCredentials=true;

  return (
    <div>
      <Register/>
    </div>
  )
}

export default App
