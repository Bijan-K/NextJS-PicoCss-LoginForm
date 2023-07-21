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
          Username:
          <p>name</p>
        </label>
        <div className="grid">
          <label>
            Name:
            <p>name</p>
          </label>
          <label>
            Last name:
            <p>name</p>
          </label>
        </div>

        <div className="grid">
          <label>
            Email address:
            <p>name</p>
          </label>
          <label>
            Birth date:
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
