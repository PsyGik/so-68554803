import Link from 'next/link';

export default function IndexPage() {
  return (
    <div>
      Hello, to view the demo, visit{' '}
      <Link href="/contact">
        <a>this page</a>
      </Link>
    </div>
  );
}
