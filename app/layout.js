import './globals.css'

export const metadata = {
  title: 'K. Praveen | Portfolio',
  description: 'Portfolio of K. Praveen — CS student, Java/C++ learner, and ML enthusiast.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
