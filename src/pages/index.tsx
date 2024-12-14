import { Inter } from "next/font/google";
import { ChangeEventHandler, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [myState, setMyState] = useState<number>(0);
  // const [myState2, setMyState2] = useState({
  //   username: String,
  // });
  const [input, setInput] = useState({
    username: String,
    password: String,
  });

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <main
      className={`flex flex-col h-screen justifyx-center w-screen p-24 gap-8 row-start-2 items-center  ${inter.className}`}
    >
      {/* <h1>{myState}</h1> */}

      <form action="" className="flex flex-col bg-black w-full h-full p-2 gap-4">
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleOnChange}
        />

        <input
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
        />
      </form>

      <button
        className="p-4 bg-blue-500"
        onClick={() => {
          console.log(input);
        }}
      >
        Click
      </button>
    </main>
  );
}
