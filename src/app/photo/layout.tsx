import Header from '@/components/Header'

export default function PhotoLayout( { children }: { children: React.ReactNode } ) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
