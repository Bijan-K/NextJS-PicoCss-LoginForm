import Link from 'next/link';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [ValidPassword, setValidPassword] = useState(false);
  const [ValidEmail, setValidEmail] = useState(false);

  function validatePassword() {
    const password = document.getElementById('password').value;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (pattern.test(password)) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  }

  function validateEmail() {
    const password = document.getElementById('email').value;
    const pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (pattern.test(password)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  }

  const notify = () =>
    toast(
      'This functionality has not been implemented as the files deployed to netlify are immutable.',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      }
    );

  return (
    <article className="container">
      <Link href="/">
        <button className="back outline width">back</button>
      </Link>

      <form className="flex">
        <h3 className="mid">Register</h3>
        <div className="grid">
          <label for="name">
            Name:
            <input id="name" type="text" placeholder="Name" required />
          </label>
          <label for="lastname">
            Last name:
            <input id="lastname" type="text" placeholder="LastName" required />
          </label>
        </div>
        <label for="email">
          Email address:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            onBlur={validateEmail}
            required
          />
          {ValidEmail && <p className="alert">Please enter a valid email.</p>}
        </label>

        <div className="grid">
          <label for="username">
            Username:
            <input id="username" type="text" placeholder="Username" required />
          </label>
          <label for="birthdate">
            Birth date:
            <input id="birthdate" type="date" placeholder="ss" required />
          </label>
        </div>
        <label for="password">
          Password:
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={validatePassword}
            required
          />
          {ValidPassword && (
            <p className="alert">
              Your password must contain at least eight characters, one
              uppercase letter, one lowercase letter, and one number.
            </p>
          )}
        </label>
        <Link href="/Signup/#" onClick={notify}>
          <button type="submit">Register</button>
        </Link>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </article>
  );
}
