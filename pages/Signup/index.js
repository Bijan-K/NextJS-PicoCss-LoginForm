import Link from 'next/link';
import { useState } from 'react';
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

  return (
    <article className="container">
      <Link href="/">
        <button className="back outline width">back</button>
      </Link>
      <h3 className="mid">Register</h3>

      <form className="flex">
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
            onBlur={validatePassword}
            required
          />
          {ValidPassword && (
            <p className="alert">
              Your password must contain at least eight characters, one
              uppercase letter, one lowercase letter, and one number.
            </p>
          )}
        </label>
        <Link href="/myaccount">
          <button type="submit">Register</button>
        </Link>
      </form>
    </article>
  );
}
