import './globals.css';

export const metadata = {
  title: 'Galactic Repository',
  description: 'I find your lack of knowledge disturbing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
