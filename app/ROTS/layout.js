import '../globals.css';


export const metadata = {
  title: 'Revenge of the Sith',
  description: "I don't like sand. It's coarse and rough and irritating, and it gets everywhere. - Anakin Skywalker,"
}

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body id="rots">{children}</body>
    </html>
  )
}