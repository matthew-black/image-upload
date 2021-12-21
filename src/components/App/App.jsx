import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Nav from '../Nav/Nav';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from '../HomePage/HomePage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <HashRouter>

      <Nav />
      <main>
        <Switch>
          <Redirect exact from="/" to="/home" />

          <ProtectedRoute exact path="/user">
            <HomePage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ?
              <Redirect to="/user" />
              :
              <LoginPage />
            }
          </Route>

          <Route exact path="/registration">
            {user.id ?
              <Redirect to="/user" />
              :
              <RegisterPage />
            }
          </Route>

          <Route exact path="/home">
            {user.id ?
              <Redirect to="/user" />
              :
              <LoginPage />
            }
          </Route>

          <Route>
            {/* Shows a 404 if no other routes are matched: */}
            <h1 className="formPanel">404</h1>
          </Route>
        </Switch>
      </main>
    </HashRouter>
  );
}


export default App;
