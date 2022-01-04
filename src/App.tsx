import  StepperProvider from './store/stepper-api'
import Stepper from "./components/Stepper"
const App = () => {
  return (
      <StepperProvider>
        <Stepper/>
      </StepperProvider>
  );
}

export default App;
