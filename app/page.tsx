'use client'
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [jogada, setJogada] = useState("")
  const [lista, setLista] = useState(['', '', '', '', '', '', '', '', ''])
  const [win, setWin] = useState("")
  const [jogavel, setJogavel] = useState(true)

  function jogar(i: number) {

    if (lista[i] == "") {
      if (jogada == 'X') {
        setJogada("0")
      } else {
        setJogada("X")
      }
      lista[i] = jogada
      setLista([...lista])
      verificarVitoria()
    }
  }
  function deuVelha() {
    setWin("Deu velha")
    setLista(['', '', '', '', '', '', '', '', ''])

  }
  function resetar() {
    setWin("")
    setJogavel(true)
    setLista(['', '', '', '', '', '', '', '', ''])
  }
  function verificarVitoria() {
    if (lista[2] == lista[5] && lista[2] == lista[8] && lista[2] != "") { setWin(`"${jogada}" Venceu o jogo`), setJogavel(false) }
    else if (lista[0] == lista[1] && lista[0] == lista[2] && lista[0] != "") { setWin(`"${jogada}" Venceu o jogo`), setJogavel(false) }
    else if (lista[3] == lista[4] && lista[3] == lista[5] && lista[3] != "") { setWin(`"${jogada}" Venceu o jogo`), setJogavel(false) }
    else if (lista[6] == lista[7] && lista[6] == lista[8] && lista[6] != "") { setWin(`"${jogada}" Venceu o jogo`), setJogavel(false) }
    else if (lista[0] == lista[3] && lista[0] == lista[6] && lista[0] != "") { setWin(`"${jogada}" Venceu o jogo`), setJogavel(false) }
    else if (lista[0] == lista[4] && lista[0] == lista[8] && lista[0] != "") { setWin(`"${jogada}" Venceu o jogo`), setJogavel(false) }
    else if (lista[1] == lista[4] && lista[1] == lista[7] && lista[1] != "") { setWin(`"${jogada}" Venceu o jogo`), setJogavel(false) }
    else if (lista[2] == lista[4] && lista[2] == lista[6] && lista[2] != "") { setWin(`"${jogada}" Venceu o jogo`), setJogavel(false) }
    else if (lista[0] != '' && lista[1] != '' && lista[2] != '' && lista[3] != '' && lista[4] != '' && lista[5] != '' && lista[6] != '' && lista[7] != '' && lista[8]) { return (deuVelha()) }


  }

  return (
    <>
      <main className="h-[100vh] bg-black flex flex-col justify-center align-middle items-center pt-2">
        <table className=" text-center text-5xl bg-white w-3/4 m-auto h-[70%]">
          <tbody className="border-[5px] border-red-600 ">
            {jogavel ? (
              <>
                <tr className=" h-auto">
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(0)}>{lista[0]}</td>
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(1)}>{lista[1]}</td>
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(2)}>{lista[2]}</td>
                </tr>
                <tr className="border h-auto">
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(3)}>{lista[3]}</td>
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(4)}>{lista[4]}</td>
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(5)}>{lista[5]}</td>
                </tr>
                <tr className="border h-auto">
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(6)}>{lista[6]}</td>
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(7)}>{lista[7]}</td>
                  <td className="w-[33.3%] hover:bg-red-400 duration-500 border h-[33.3%]" onClick={() => jogar(8)}>{lista[8]}</td>
                </tr>
              </>
            ) : (
              <>
                <tr className=" h-auto">
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[0]}</td>
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[1]}</td>
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[2]}</td>
                </tr>
                <tr className="border h-auto">
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[3]}</td>
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[4]}</td>
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[5]}</td>
                </tr>
                <tr className="border h-auto">
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[6]}</td>
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[7]}</td>
                  <td className="w-[33.3%] hover:bg-red-900 duration-500 border h-[33.3%]" >{lista[8]}</td>
                </tr>
              </>
            )}

          </tbody>
        </table>
        <div>
          <p className="text-white underline decoration-red-800 text-3xl  py-4">{win}</p>
        </div>
        <button className="bg-red-600 text-white p-4 mb-20 rounded-md" onClick={resetar}>Resetar</button>
      </main>
    </>
  );
}
