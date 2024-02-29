import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

function Loginn() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data === "SuccessKasun") {
        navigate('/khome')
      } else if (result.data === "SuccessDimantha") {
        navigate('/dhome')
      } else if (result.data === "SuccessBandara") {
        navigate('/bhome')
      }
      
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Loging</h1>
      <form onSubmit={handleSubmit}>
        <h3>Email</h3>
        <input 
            type="email" 
            name="email" 
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

        <h3>Password</h3>
        <input 
            type="password" 
            name="password" 
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Login</button>
      </form>

      <br />
      <p>OR</p>

      <Link to="/signup">SignUp Page</Link>
    </div>
  );
}

export default Loginn;
