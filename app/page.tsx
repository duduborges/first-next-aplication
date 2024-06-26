'use client'
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [jogada, setJogada] = useState("")
  const [lista, setLista] = useState(['', '', '', '', '', '', '', '', ''])
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
  function verificarVitoria() {
    if (lista[2] == lista[5] && lista[2] == lista[8] && lista[2] != "") alert(`"${jogada}" Venceu o jogo`)
    if (lista[0] == lista[1] && lista[0] == lista[2] && lista[0] != "") alert(`"${jogada}" Venceu o jogo`)
    if (lista[3] == lista[4] && lista[3] == lista[5] && lista[3] != "") alert(`"${jogada}" Venceu o jogo`)
    if (lista[6] == lista[7] && lista[6] == lista[8] && lista[6] != "") alert(`"${jogada}" Venceu o jogo`)
    if (lista[0] == lista[3] && lista[0] == lista[6] && lista[0] != "") alert(`"${jogada}" Venceu o jogo`)
    if (lista[0] == lista[4] && lista[0] == lista[8] && lista[0] != "") alert(`"${jogada}" Venceu o jogo`)
    if (lista[1] == lista[4] && lista[1] == lista[7] && lista[1] != "") alert(`"${jogada}" Venceu o jogo`)
    if (lista[2] == lista[4] && lista[2] == lista[6] && lista[2] != "") alert(`"${jogada}" Venceu o jogo`)
  }

  return (
    <>
      <main className="h-[100vh] bg-black flex flex-row justify-center align-middle items-center">
        <table className=" text-center text-5xl bg-white w-3/4 m-auto h-[70%]">
          <tbody className="border-[5px] border-red-600 ">

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
          </tbody>
        </table>
      </main>
    </>
  );
}
