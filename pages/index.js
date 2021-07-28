import Link from 'next/link';

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
    </div>
  );
}
