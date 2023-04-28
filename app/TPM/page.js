import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen h-screen flex">
      <div
        className="main container relative mx-auto bg-black mx-auto my-auto w-5/6 h-5/6 lg:h-3/4 rounded-lg flex xl:justify-center flex-col sm:flex-row md:flex-row lg:flex-row overflow-scroll scroll-smooth "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <div className="left order-1 flex flex-col justify-center">
          <Link href="/characters" className="no-underline">
            <h1 id="link" className="hover:transition-all hover:animate-pulse">
              characters
            </h1>
          </Link>
          <Link href="/species" className="no-underline">
            <h1 id="link" className="hover:transition-all hover:animate-pulse">
              species
            </h1>
          </Link>
          <Link href="/planets" className="no-underline">
            <h1 id="link" className="hover:transition-all hover:animate-pulse">
              planets
            </h1>
          </Link>
        </div>

        <div className="center sm:order-1 md:order-1 lg:order-1 max-w-3xl">
          <h1 className="text-center xxl:text-6xl lg:text-4xl md:text:2xl mt-4">
            The Phantom
            <br />
            Menace
          </h1>
          <p className="text-center mt-14 mx-1 text-lg lg:text-2xl text-bMilk">
            Explore the world of The Phantom Menace! Choose from the categories
            to discover more about this epic Star Wars movie......
          </p>
          <div className="crawl h-72 xl:w-3/4 w-72 mt-9 mx-auto mb-10 overflow-hidden">
            <p className="crawl-text xl:text-3xl text-swYellow text-center w-auto xl:text-3xl">
              Turmoil has engulfed the Galactic Republic. The taxation of trade
              routes to outlying star systems is in dispute. Hoping to resolve
              the matter with a blockade of deadly battleships, the greedy Trade
              Federation has stopped all shipping to the small planet of Naboo.
              While the Congress of the Republic endlessly debates this alarming
              chain of events, the Supreme Chancellor has secretly dispatched
              two Jedi Knights, the guardians of peace and justice in the\
              galaxy, to settle the conflict....
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
              galactic<br />home
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
