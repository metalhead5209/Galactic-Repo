import '../globals.css';


export const metadata = {
  title: 'Attack of the Clones',
  description: "I don't like sand. It's coarse and rough and irritating, and it gets everywhere. - Anakin Skywalker,"
}

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body id="aotc">{children}</body>
    </html>
  )
}