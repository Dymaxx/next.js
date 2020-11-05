import '../styles/index.css'
import '../styles/custom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
