import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold">CUK Software Development</h1>
      <p className="mt-4 text-lg">Create Until Kickass</p>
      <Link
        href="/ceo"
        className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        CEO
      </Link>
    </section>
  );
}
