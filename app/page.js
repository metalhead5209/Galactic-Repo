
export default function Home() {
  return (
    <main className="min-h-screen h-screen flex">
      <div className="container relative mx-auto bg-black mx-auto my-auto w-5/6 h-5/6 lg:h-3/4 rounded-lg flex justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
        <div className="center">
          <h1 className="text-center xl:text-6xl lg:text-4xl md:text:2xl mt-4">Galactic Repo</h1>
          <p className="text-center mt-14 mx-1 text-lg lg:text-2xl text-bMilk">Select an episode to view its repository...</p>

          {/* <div> */}

            <div className="crawl h-72 xl:w-1/3 w-64 mt-9 mx-auto mb-10 overflow-hidden">
            <p className="crawl-text xl:text-2xl text-swYellow text-center mx-2">
            Welcome to the Galactic Repo, the ultimate destination for Star Wars fans! if you&#39;re looking for information about the first six movies - the ones we all know and love - then you&#39;ve come to the right place. Galactic Repo is packed with all the details you could ever want about the original trilogy and the prequels, from character bios and their planets, to the vehicles used in the trilogies. Whether you&#39;re a die-hard fan or just getting started on your Star Wars journey, we&#39;ve got something for everyone. So come on in, explore the galaxy, and discover all the secrets that the Galactic Repo has to offer!
            </p>
          </div>

          {/* </div> */}
          
        </div>
      </div>
    </main>
  )
}
