import '../globals.css';


export const metadata = {
  title: 'A New Hope',
  description: "May the Force Be with you. -Ben Kenobi"
}

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body id="anh">{children}</body>
    </html>
  )
}