import Link from 'next/link';
export default function SignUp() {
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
            required
          />
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
            required
          />
        </label>
        <Link href="/myaccount">
          <button type="submit">Register</button>
        </Link>
      </form>
    </article>
  );
}
