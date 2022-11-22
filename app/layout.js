export default function RootLayout ({ children }) {
  return (
    <html>
      <head>Esto es un titulo</head>
      <body>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
