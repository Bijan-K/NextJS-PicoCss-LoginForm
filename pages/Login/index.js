import Link from 'next/link';

export default function Login() {
  return (
    <>
      <article className="container">
        <Link href="/">
          <button className="back outline width">back</button>
        </Link>

        <form className="flex">
          <h3 className="mid">Login</h3>
          <input type="text" placeholder="Username" />
          <input
            className="lowermargin"
            type="password"
            placeholder="Password"
          />
          <Link href="/">forgot password?</Link>
          <Link href="/myaccount">
            <button className="margin" type="submit">
              Login
            </button>
          </Link>
        </form>
      </article>
      <article className="container">
        <div className="middle">
          <h3>example</h3>
          <h6> username:name1 password:12345678Ab</h6>
        </div>
      </article>
    </>
  );
}
