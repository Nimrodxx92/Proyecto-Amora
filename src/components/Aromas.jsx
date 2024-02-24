import { useState } from "react";
import aromasDescription from "../json/aromas.json";
import AromasDescription from "./AromasDescription";

const Aromas = () => {
  const [arrayAromas, setArrayAromas] = useState([...aromasDescription.aromas]);

  console.log(arrayAromas);
  return (
    <section className="section__container">
      {arrayAromas.map((info, id) => (
        <AromasDescription item={info} key={id} />
      ))}
    </section>
  );
};

export default Aromas;
