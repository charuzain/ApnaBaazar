import logo from "./logo.svg";
import "./App.css";
import useApplicationData from "./hooks/useEffect";

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
      <h1> Users </h1>

      <ul> {userList} </ul>
    </div>
  );
};

export default App;
