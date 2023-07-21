import Layout from '@/components/Layout';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout>
      <article className="container">
        <h3 className="mid">Home</h3>

        <div className="flex">
          <Link href="/Login">
            <button className="contrast outline width">Login</button>
          </Link>

          <Link href="/Signup">
            <button className="width">Register</button>
          </Link>
        </div>
      </article>

      <footer className="footer">
        <div>Made by Bijan</div>
      </footer>
    </Layout>
  );
}
