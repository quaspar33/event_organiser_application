import MenuBar from "./components/MenuBar.tsx";
import Lecture1 from "./assets/Lecture_1.svg";
import Lecture2 from "./assets/Lecture_2.svg";
import Lecture3 from "./assets/Lecture_3.svg";
import Lecture4 from "./assets/Lecture_4.svg";

function App() {
    return (
        <div className="relative bg-color-8">
            <MenuBar />
            <div className="grid grid-cols-2 gap-4 p-4">
                <img
                    className="w-100 h-auto object-cover shadow-lg rounded-lg mt-2"
                    src={Lecture1}
                    alt=""
                />
                <img
                    className="w-100 h-auto object-cover shadow-lg rounded-lg mt-2"
                    src={Lecture2}
                    alt=""
                />
                <img
                    className="w-auto h-auto object-cover shadow-lg rounded-lg mt-2"
                    src={Lecture3}
                    alt=""
                />
                <img
                    className="w-100 h-auto object-cover shadow-lg rounded-lg mt-2"
                    src={Lecture4}
                    alt=""
                />
            </div>
        </div>
    );
}

export default App;
