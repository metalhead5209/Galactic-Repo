
export default function Home() {
  return (
    <main className="min-h-screen h-screen flex">

      <div className="main container relative mx-auto bg-black mx-auto my-auto w-5/6 h-5/6 lg:h-3/4 rounded-lg flex xl:justify-center flex-col sm:flex-row md:flex-row lg:flex-row overflow-scroll scroll-smooth "  style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>

      <div className="left order-1 flex flex-col justify-center">
        <h1 id="link">ep.1<br />
        tpm</h1>
        <h1 id="link">ep.2<br />
        aotc</h1>
        <h1 id="link">ep.3<br />
        rots</h1>
      </div>

        <div className="center sm:order-1 md:order-1 lg:order-1 max-w-5xl">
          <h1 className="text-center xxl:text-6xl lg:text-4xl md:text:2xl mt-4">Galactic Repo</h1>
          <p className="text-center mt-14 mx-1 text-lg lg:text-2xl text-bMilk">Select an episode to view its repository...</p>
          <div className="crawl h-72 xl:w-3/4 w-72 mt-9 mx-auto mb-10 overflow-hidden">
            <p className="crawl-text xl:text-3xl text-swYellow text-center w-auto xl:text-3xl">
            Welcome to the Galactic Repo, the ultimate destination for Star Wars fans! if you&#39;re looking for information about the first six movies - the ones we all know and love - then you&#39;ve come to the right place. Galactic Repo is packed with all the details you could ever want about the original trilogy and the prequels, from character bios and their planets, to the vehicles used in the trilogies. Whether you&#39;re a die-hard fan or just getting started on your Star Wars journey, we&#39;ve got something for everyone. So come on in, explore the galaxy, and discover all the secrets that the Galactic Repo has to offer!
            </p>
          </div>
        </div>

        <div className="right order-3 sm:order-3 md:order-3 lg:order-3 flex flex-col justify-center align-center">
          <h1 id="link">ep.4<br />
          anh</h1>
          <h1 id="link">ep.5<br />
          tesb</h1>
          <h1 id="link">ep.6<br />
          rotj</h1>
        </div>

      </div>
    </main>
  )
}
