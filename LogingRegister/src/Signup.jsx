import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/register', {name, email, password})
    .then(result => {console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Registor</h1>
      <form onSubmit={handleSubmit}>
        <h3>user name</h3>
        <input
          type="text"
          name="name"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />

        <h3>email</h3>
        <input
          type="email"
          name="email"
          id=""
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
        <button>Register</button>
      </form>

      <br />
      <p>OR</p>

      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Signup;
