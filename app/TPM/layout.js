import '../globals.css';
export const metadata = {
    title: 'The Phantom Menace',
    description: ' "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering." - Yoda',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body id="tpm">{children}</body>
      </html>
    )
  }