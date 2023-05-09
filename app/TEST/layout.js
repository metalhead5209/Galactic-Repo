import '../globals.css';


export const metadata = {
  title: 'test',
  description: "test"
}

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}