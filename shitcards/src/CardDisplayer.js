import abuelo from "./imagenes/abuelo.png";
import bar from "./imagenes/barsinso.png";
import burns from "./imagenes/burns.png";
import dolph from "./imagenes/dolph.png";
import flanders from "./imagenes/flanders.png";
import lisa from "./imagenes/fuckofflisa.png";
import gordo from "./imagenes/gordo.png";
import hibert from "./imagenes/hibert.png";
import jomer from "./imagenes/jomer.png";
import marsh from "./imagenes/marsh.png";
import nelson from "./imagenes/nelson.png";
import sam from "./imagenes/sam.png";
import { useState } from "react";
const imageArray = [
  { name: abuelo, number: 1 },
  { name: bar, number: 2 },
  { name: burns, number: 3 },
  { name: dolph, number: 4 },
  { name: flanders, number: 5 },
  { name: lisa, number: 6 },
  { name: gordo, number: 7 },
  { name: hibert, number: 8 },
  { name: jomer, number: 9 },
  { name: marsh, number: 10 },
  { name: nelson, number: 11 },
  { name: sam, number: 12 },
];

export default function CardDisplayer({ handleCard }) {
  let indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="simpsonContainer">
      {imageArray.map((e, i) => {
        let rando = indexes.splice(
          Math.floor(Math.random() * indexes.length),
          1
        );
        return (
          <img
            src={imageArray[rando].name}
            alt={`imagen ${i}`}
            key={e.name}
            number={imageArray[rando].number}
            className="simpson"
            onClick={handleCard}
          />
        );
      })}
    </div>
  );
}
