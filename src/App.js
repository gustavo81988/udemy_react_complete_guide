import AddUser from './components/Users/AddUser';
import UsersLists from './components/Users/UsersLists';

function App() {
  return (
    <div className="App">
      <AddUser/>
      <UsersLists users={[]}/>
    </div>
  );
}

export default App;
