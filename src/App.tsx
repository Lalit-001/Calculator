import React, { useState } from "react";
import Buttons from "./Buttons";
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const App = () => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  // const [value, setValue] = useState("");
  const [expresion, setExpresion] = useState<String[]>([""]);

  const ClickButton = (e: any) => {
    const buttonValue = e.target.getAttribute("data-cell-index");
    if (buttonValue == "=") {
      const x = expresion.join("");
      setExpresion([eval(x)]);
    } else {
      const newExpresion = [...expresion, buttonValue];
      setExpresion(newExpresion);
    }
  };
  const backSpace = () => {
    expresion.pop();
    setExpresion([...expresion]);
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl font-bold font-serif mt-3 text-cyan-600">
          Calculator By Lucky
        </h1>{" "}
        <div className="border-2 rounded-md w-64 md:w-96 h-10 mb-4 mt-6 text-right p-2 text-2xl font-semibold border-black flex items-center justify-end">
          {expresion}
        </div>
        <div className="grid grid-cols-4 w-64 md:w-96 mx-auto">
          {buttons.map((items: string, index: number) => {
            return (
              <Buttons
                key={index}
                items={items}
                ClickButton={ClickButton}
              ></Buttons>
            );
          })}
        </div>
        <div className="flex gap-4">
          {" "}
          <div
            className="px-4 py-1 bg-red-400 border border-black rounded-sm mt-6 hover:cursor-pointer"
            onClick={() => setExpresion([""])}
          >
            All Clear
          </div>
          <div
            className="px-4 py-1 bg-green-400 border border-black rounded-sm mt-6 hover:cursor-pointer"
            onClick={backSpace}
          >
            Backspace
          </div>
        </div>
      </div>
      <div className="w-full bg-cyan-500 h-24 mt-10 border-t-2 border-black text-center">
        <div className="flex justify-center gap-2 mt-6 ">
          <a href="https://www.instagram.com/mr.luckyy_001/">
            {" "}
            <BsInstagram className="text-xl cursor-pointer hover:text-white" />{" "}
          </a>
          <a href="https://www.facebook.com/adhikari.lalit.31">
            {" "}
            <BsFacebook className="text-xl cursor-pointer hover:text-white" />
          </a>
          <a href="https://github.com/Lalit-001">
            {" "}
            <BsGithub className="text-xl cursor-pointer hover:text-white" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/lalit-adhikari-39349a24b/">
            {" "}
            <BsLinkedin className="text-xl cursor-pointer hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
