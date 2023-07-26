import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const router = useRouter();

  function validateForm(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'name1' && password === '12345678Ab') {
      router.push('/myaccount');
    } else {
      notifyInvalid();
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

  const notifyInvalid = () =>
    toast.error('Invalid Credentials for logging in', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    <>
      <article className="container">
        <Link href="/">
          <button className="back outline width">back</button>
        </Link>

        <form className="flex">
          <h3 className="mid">Login</h3>
          <input type="text" id="username" placeholder="Username" />
          <input
            className="lowermargin"
            id="password"
            type="password"
            placeholder="Password"
          />

          <Link href="/Login/#" onClick={notify}>
            forgot password?
          </Link>

          <button type="submit" className="margin" onClick={validateForm}>
            Login
          </button>
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
