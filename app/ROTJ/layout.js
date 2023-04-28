import '../globals.css';


export const metadata = {
  title: 'Return of the JEdi',
  description: "It's a Trap!! -Admiral Ackbar"
}

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body id="rotj">{children}</body>
    </html>
  )
}