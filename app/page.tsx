import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Welcome to
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                AI Content Pro{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              AI Content Pro is a tool that helps you generate content for your
              blog, website, or social media. It uses state-of-the-art AI
              technology to create high-quality, engaging content in seconds.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/sign-in"
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Login
              </Link>

              <Link
                href="/sign-up"
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
