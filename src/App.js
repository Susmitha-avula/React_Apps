import './App.css';
import Email from './Components/EmailValidation';
import Register from './Components/Registration';

function App() {
  return (
    <div>
      <h3>Email and Password Validation</h3>
      <Email/>
      <h3>Registration Form</h3>
      <Register />
    </div>
  );
}

export default App;
