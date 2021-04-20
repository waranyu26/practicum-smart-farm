import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

const Layout = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gray-100">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
