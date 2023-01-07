import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { NoticiasProvider } from "./context/NoticiasProvider";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>
        </header>
        <Grid container direction="row" justifyContent="center" alignitems="center">
          <Grid item md={6} xs={12} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  );
}

export default App;
