import '../globals.css';


export const metadata = {
  title: 'The Empire Strikes Back',
  description: "No, I am your father. - Darth Vader"
}

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body id="tesb">{children}</body>
    </html>
  )
}