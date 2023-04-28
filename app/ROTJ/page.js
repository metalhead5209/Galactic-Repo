import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen h-screen flex">
      <div
        className="main container relative mx-auto bg-black mx-auto my-auto w-5/6 h-5/6 lg:h-3/4 rounded-lg flex xl:justify-center flex-col sm:flex-row md:flex-row lg:flex-row overflow-scroll scroll-smooth "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <div className="left order-1 flex flex-col justify-center">
          <div className="left order-1 flex flex-col justify-center">
            <Link href="/characters" className="no-underline">
              <h1
                id="link"
                className="hover:transition-all hover:animate-pulse"
              >
                characters
              </h1>
            </Link>
            <Link href="/species" className="no-underline">
              <h1
                id="link"
                className="hover:transition-all hover:animate-pulse"
              >
                species
              </h1>
            </Link>
            <Link href="/planets" className="no-underline">
              <h1
                id="link"
                className="hover:transition-all hover:animate-pulse"
              >
                planets
              </h1>
            </Link>
          </div>
        </div>

        <div className="center sm:order-1 md:order-1 lg:order-1 max-w-3xl">
          <div>
            <h1 className="text-center xxl:text-6xl lg:text-4xl md:text:2xl">
              Return
              <br />
            </h1>
            <h1 className="text-center sm:text-md xxl:text-2xl lg:text-xl md:text-md m-0">
              of the
            </h1>
            <br />
            <h1 className="text-center xxl:text-6xl lg:text-4xl md:text:2xl m-0">
              Jedi
            </h1>
          </div>

          <p className="text-center mt-14 mx-1 text-lg lg:text-2xl text-bMilk">
            Explore the world of Return of the Jedi! Choose from the categories
            to discover more about this epic Star Wars movie......
          </p>
          <div className="crawl h-72 xl:w-3/4 w-72 mt-9 mx-auto mb-10 overflow-hidden">
            <p className="crawl-text xl:text-3xl text-swYellow text-center w-auto xl:text-3xl">
              Luke Skywalker has returned to his home planet of Tatooine in an
              attempt to rescue his friend Han Solo from the clutches of the
              vile gangster, Jabba the Hutt. Little does Luke know that the
              GALACTIC EMPIRE has secretly begun construction on a new armored
              space station even more powerful than the first dreaded Death
              Star. When completed, this ultimate weapon will spell certain doom
              for the small band of rebels struggling to restore freedom to the
              galaxy...
            </p>
          </div>
        </div>

        <div className="right order-3 sm:order-3 md:order-3 lg:order-3 flex flex-col justify-center align-center">
          <Link href="/starships" className="no-underline">
            <h1 id="link" className="hover:transition-all hover:animate-pulse">
              starships
            </h1>
          </Link>
          <Link href="/vehicles" className="no-underline">
            <h1 id="link" className="hover:transition-all hover:animate-pulse">
              vehicles
            </h1>
          </Link>
          <Link href="/" className="no-underline">
            <h1 id="link" className="hover:transition-all hover:animate-pulse">
              galactic
              <br />
              home
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
