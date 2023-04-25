import CharSearch from '../components/charSearch';



export default function Page() {
  return (
    <>
      <main>
        <section>
          <h1 className="text-3xl font-bold underline">
            Hello, Next.js!
          </h1>
          <div>
            <CharSearch />
          </div>
        </section>
      </main>
    </>
  )
}
