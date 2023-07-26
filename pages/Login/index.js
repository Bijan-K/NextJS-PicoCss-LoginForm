import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
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

          <Link href="/Login/#" onClick={notify}>
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

      <div className="popup-bg">
        <div id="popup" class="popup"></div>
      </div>

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
    </>
  );
}
