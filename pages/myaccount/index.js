import Link from 'next/link';

export default function Account() {
  return (
    <article className="container">
      <Link href="/">
        <button className="back outline width">back</button>
      </Link>

      <div className="middle">
        <h3 className="mid">Dashboard</h3>
        <label>
          <span>Username:</span>
          <p>name</p>
        </label>
        <div className="grid">
          <label>
            <span>Name:</span>
            <p>name</p>
          </label>
          <label>
            <span>Last name:</span>
            <p>name</p>
          </label>
        </div>

        <div className="grid">
          <label>
            <span>Email address:</span>
            <p>name</p>
          </label>
          <label>
            <span>Birth date:</span>
            <p>name</p>
          </label>
        </div>
      </div>

      <Link href="/">
        <button className="outline logout">Log out</button>
      </Link>
    </article>
  );
}
