import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React from "react";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useNoticias from "../hooks/useNoticias";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

const Formulario = () => {

  const { categoria, handleChangeCategoria } = useNoticias()

  return (
    <form>
      <FormControl >
        <InputLabel>Categoria</InputLabel>
        <Select label="categoria" onChange={handleChangeCategoria} value={categoria}>
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
        {/* <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary">
            Buscar Noticias
          </Button> */}
        {/* </Box> */}
      </FormControl>
    </form>
  );
};

export default Formulario;
