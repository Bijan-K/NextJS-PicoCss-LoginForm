import Layout from '@/components/Layout';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Home</h1>

        <Link href="/Login">
          <button>Login</button>
        </Link>

        <Link href="/Signup">
          <button>Register</button>
        </Link>
      </div>
    </Layout>
  );
}
