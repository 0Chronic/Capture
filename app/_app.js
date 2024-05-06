const { default: Navbar } = require("./components/Navbar");
import '../app/'

function MyApp ({Component, pageProps}) {
    return (
        <>
        <Navbar />
        <Component {...pageProps} />
        </>
    )
}

export default MyApp