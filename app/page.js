import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Streamline Your Editing Workflow.
              <strong className="font-extrabold text-red-700 sm:block"> Seamless YouTube Integration. </strong>
            </h1>

            <p className="mt-4 sm:text-xl text-gray-600">
              Empower your video production with our collaborative platform that bridges the gap between YouTubers and professional editors. Approve and publish content directly to your channel with ease.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/auth/register">
                <p className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                  Get Started
                </p>
              </Link>

              <Link href="/learn-more">
                <p className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
