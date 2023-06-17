import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main className="p-2 text-xl">
        <p className="flex gap-1">
          <span>News API V1.0</span>
        </p>
        <p className="flex gap-1">
          <span>Author : </span>
          <a href="https://github.com/riad-azz" className="underline">
            @riad-azz
          </a>
        </p>
        <p className="flex gap-1">
          <span>API documentation : </span>
          <a
            href="https://github.com/riad-azz/next-news-api"
            className="underline"
          >
            Github Repository
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
