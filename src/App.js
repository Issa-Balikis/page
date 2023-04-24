import About from "./Components/About";
import Card from "./Components/card";
import Interest from "./Components/interest";
import Footer from "./Components/footer";


function App () {
    return(
        <div className="app">
            <Card />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

export default App;