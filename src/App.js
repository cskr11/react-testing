import './App.css';
import Banner from './components/Banner/Banner';
import { Switch, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <div className='App'>
      <a testId={`id-val`} href='http://www.microsoft.com'>
        hello world
      </a>
      <Banner />
      <Switch>
        <Route strict exact path='/' component={TodoPage} />
        <Route strict exact path='/followers' component={FollowersPage} />
      </Switch>
    </div>
  );
}

export default App;
