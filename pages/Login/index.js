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

          <Link href="/Login/#test-popup" data-effect="mfp-move-horizontal">
            forgot password?
          </Link>
          <Link href="/myaccount">
            <button className="margin" type="submit">
              Login
            </button>
          </Link>
        </form>
      </article>
      <article className="container">
        <div className="middle">
          <h3>Use this credentials to login</h3>
          <h6>
            {' '}
            username: name1 <br /> password: 12345678Ab
          </h6>
        </div>
      </article>
      <div id="test-popup" class="white-popup mfp-with-anim mfp-hide">
        You may put any HTML here. This is dummy copy. It is not meant to be
        read. It has been placed here solely to demonstrate the look and feel of
        finished, typeset text. Only for show. He who searches for meaning here
        will be sorely disappointed.
      </div>
    </>
  );
}
