
export default function Home() {
  return (
    <main className="min-h-screen h-screen flex">

      <div className="main container relative mx-auto bg-black mx-auto my-auto w-5/6 h-5/6 lg:h-3/4 rounded-lg flex xl:justify-center flex-col sm:flex-row md:flex-row lg:flex-row overflow-scroll scroll-smooth "  style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>

      <div className="left order-1 flex flex-col justify-center">
        <h1 id="link">Characters</h1>
        <h1 id="link">Species</h1>
        <h1 id="link">Planets</h1>
      </div>

        <div className="center sm:order-1 md:order-1 lg:order-1 max-w-3xl">
          <div>
            <h1 className="text-center xxl:text-6xl lg:text-4xl md:text:2xl">Attack<br /></h1>
          <h1 className="text-center sm:text-md xxl:text-2xl lg:text-xl md:text-md m-0">of the</h1><br />
          <h1 className="text-center xxl:text-6xl lg:text-4xl md:text:2xl m-0">clones</h1>
          </div>
          
          <p className="text-center mt-14 mx-1 text-lg lg:text-2xl text-bMilk">Explore the world of Attack of the Clones! Choose from the categories to discover more about this epic Star Wars movie......</p>
          <div className="crawl h-72 xl:w-3/4 w-72 mt-9 mx-auto mb-10 overflow-hidden">
            <p className="crawl-text xl:text-3xl text-swYellow text-center w-auto xl:text-3xl">
            There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.
            This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy.
            Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....
            </p>
          </div>
        </div>

        <div className="right order-3 sm:order-3 md:order-3 lg:order-3 flex flex-col justify-center align-center">
          <h1 id="link">Starships</h1>
          <h1 id="link">vehicles</h1>
          <h1 id="link">Galactic<br />
          Home</h1>
        </div>

      </div>
    </main>
  )
}
