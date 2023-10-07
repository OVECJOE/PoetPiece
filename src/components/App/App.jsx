import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";

function App() {
    return (
        <>
            <div className="App">
                <Header />
                <main>
                    <Sidebar />
                    <div>{/* Poems */}</div>
                </main>
            </div>
        </>
    );
}

export default App;
