import MenuBar from "./components/MenuBar.tsx";
import Wave from "./assets/Wave.svg";
// import Circle from "./assets/IrregularCircle.svg";

function App() {
    return (
        <div className="app bg-app-background">
            <MenuBar />
            {/*<div*/}
            {/*    className="w-64 h-64 absolute top-0 left-0 bg-cover bg-center"*/}
            {/*    style={{ backgroundImage: `url(${Wave})` }}*/}
            {/*></div>*/}
            <div
                className="w-64 h-64 absolute bottom-0 right-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${Wave})` }}
            ></div>
            {/*<div*/}
            {/*    className="w-64 h-64 absolute bottom-0 left-0 bg-cover bg-center"*/}
            {/*    style={{ backgroundImage: `url(${Circle})` }}*/}
            {/*></div>*/}
            {/*<div*/}
            {/*    className="w-64 h-64 absolute top-0 right-0 bg-cover bg-center"*/}
            {/*    style={{ backgroundImage: `url(${Circle})` }}*/}
            {/*></div>*/}
        </div>
    );
}

export default App;
