import "./App.css";
import useApplicationData from "./hooks/useEffect";
import Checkout from "./components/Checkout";
import Signup from "./components/Signup";

const App = () => {
  const { state, dispatch } = useApplicationData();
  console.log(state.users);
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));
  console.log(userList);
  return (
    <div className="App">
      <div>
        <Signup></Signup>
      </div>
      <ul> {userList} </ul>
    </div>
  );
};

export default App;
