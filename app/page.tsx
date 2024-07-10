import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <h2 className="mb-2">Hello, welcome to the Climate Visualization website!</h2>
      <Link href={`/stations`}>Proceed to Stations here.</Link>
    </section>
  );
}
