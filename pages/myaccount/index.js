import Link from 'next/link';

export default function Account() {
  return (
    <article className="container">
      <div className="middle">
        <h3 className="mid">Dashboard</h3>
        <label>
          <span>Username:</span>
          <p>name1</p>
        </label>
        <div className="grid">
          <label>
            <span>Name:</span>
            <p>ExmapleName</p>
          </label>
          <label>
            <span>Last name:</span>
            <p>ExmapleLastName</p>
          </label>
        </div>

        <div className="grid">
          <label>
            <span>Email address:</span>
            <p>Example@gmail.com</p>
          </label>
          <label>
            <span>Birth date:</span>
            <p>1/1/1970</p>
          </label>
        </div>
      </div>

      <Link href="/">
        <button className="outline logout">Log out</button>
      </Link>
    </article>
  );
}
