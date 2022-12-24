import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Accord() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Que medios de pago se aceptan?
        </AccordionHeader>
        <AccordionBody>
          <p className="font-bold text-base">Efectivo</p>
          <br />
          <p className="font-bold text-base">Debito</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Categorias
        </AccordionHeader>
        <AccordionBody>
          <p>Hamburguesas</p>
          <p>Pizzas</p>
          <p>Vegetariano</p>
          <p>Comida china</p>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}
