import '../styles/globals.css'

import { Navigation } from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Esto es un titulo</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
