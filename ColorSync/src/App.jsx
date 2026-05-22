import { useState } from "react";
import "./index.css";

function App() {
  const colors = {
    red: "bg-[red]",
    green: "bg-[green]",
    blue: "bg-[blue]",
    olive: "bg-[#7E7C00]",
    grey: "bg-[#7E7E80]",
    yellow: "bg-[yellow]",
    pink: "bg-[pink]",
    purple: "bg-[purple]",
    lavender: "bg-[#E5E5FB]",
    white: "bg-[white]",
    black: "bg-[black]",
  };
  const [color, setColor] = useState(colors["white"]);
  return (
    <>
      {" "}
      <main>
        <div className={`${color} h-screen w-screen relative flex justify-center`}>
          <div className="absolute bottom-12  bg-white h-auto w-[93%] p-3.5 rounded-4xl">
            <ul className="[&>li>button]:h-16 [&>li>button]:w-28 [&>li>button]:rounded-4xl flex flex-wrap justify-center gap-4">
              <li>
                <button
                  className="bg-[red]"
                  onClick={() => setColor(colors["red"])}
                >
                  Red
                </button>
              </li>
              <li>
                <button
                  className="bg-[green]"
                  onClick={() => setColor(colors["green"])}
                >
                  Green
                </button>
              </li>
              <li>
                <button
                  className="bg-[blue]"
                  onClick={() => setColor(colors["blue"])}
                >
                  Blue
                </button>
              </li>
              <li>
                <button
                  className="bg-[#7E7C00]"
                  onClick={() => setColor(colors["olive"])}
                >
                  Olive
                </button>
              </li>
              <li>
                <button
                  className="bg-[#7E7E80]"
                  onClick={() => setColor(colors["grey"])}
                >
                  Grey
                </button>
              </li>
              <li>
                <button
                  className="bg-[yellow]"
                  onClick={() => setColor(colors["yellow"])}
                >
                  Yellow
                </button>
              </li>
              <li>
                <button
                  className="bg-[pink]"
                  onClick={() => setColor(colors["pink"])}
                >
                  Pink
                </button>
              </li>
              <li>
                <button
                  className="bg-[purple]"
                  onClick={() => setColor(colors["purple"])}
                >
                  Purple
                </button>
              </li>
              <li>
                <button
                  className="bg-[#E5E5FB]"
                  onClick={() => setColor(colors["lavender"])}
                >
                  Lavender
                </button>
              </li>
              <li>
                <button
                  className="bg-[white] text-black"
                  onClick={() => setColor(colors["white"])}
                >
                  White
                </button>
              </li>
              <li>
                <button
                  className="bg-[black] text-white"
                  onClick={() => setColor(colors["black"])}
                >
                  Black
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
