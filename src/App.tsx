import { Switch, Route, Redirect } from 'react-router-dom'
import  StepperProvider from './store/stepper-api'
import HomePage from "./pages/HomePage";
import RegistrationPage from './pages/RegistrationPage'

const App = () => {
  return (
      <StepperProvider>
          <Switch>
              <Route path='/' exact>
                  <RegistrationPage/>
              </Route>
              <Route path='/home' exact>
                  <HomePage />
              </Route>
              <Redirect to="/" />
          </Switch>
      </StepperProvider>
  );
}

export default App;
