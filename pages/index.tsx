import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";

const Home: React.FC = () => {
  const [fechaInicio, setFechaInicio] = useState<string>("");
  const [fechaFin, setFechaFin] = useState<string>("");
  const [tareas, setTareas] = useState<any[]>([]);
  const [empleados, setEmpleados] = useState<{ [key: number]: string }>({});
  const [proyectos, setProyectos] = useState<{ [key: number]: string }>({});

  const handleConsultarTareas = async () => {
    try {
      const tareasResponse = await axios.get(
        `https://minicorebackend-production.up.railway.app/api/tareas/atrasadas?fecha_inicio_usuario=${fechaInicio}&fecha_fin_usuario=${fechaFin}`
      );
      setTareas(tareasResponse.data);

      const empleadosResponse = await axios.get(
        `https://minicorebackend-production.up.railway.app/api/empleados`
      );
      const empleadosData = empleadosResponse.data.reduce(
        (acc: any, empleado: any) => {
          acc[empleado.id] = empleado.nombre;
          return acc;
        },
        {}
      );
      setEmpleados(empleadosData);

      const proyectosResponse = await axios.get(
        `https://minicorebackend-production.up.railway.app/api/proyectos`
      );
      const proyectosData = proyectosResponse.data.reduce(
        (acc: any, proyecto: any) => {
          acc[proyecto.id] = proyecto.nombre;
          return acc;
        },
        {}
      );
      setProyectos(proyectosData);
    } catch (error) {
      console.error("Error al consultar tareas, empleados o proyectos:", error);
    }
  };

  return (
    <Container>
      <h1 style={{ alignContent: "center" }}>
        AR-MiniCore <br />
        Consulta de Tareas Atrasadas
      </h1>
      <TextField
        label="Fecha de Inicio"
        type="date"
        value={fechaInicio}
        onChange={(e) => setFechaInicio(e.target.value)}
        InputLabelProps={{ shrink: true }}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Fecha de Fin"
        type="date"
        value={fechaFin}
        onChange={(e) => setFechaFin(e.target.value)}
        InputLabelProps={{ shrink: true }}
        margin="normal"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleConsultarTareas}
        sx={{ marginTop: 2 }}
      >
        Consultar Tareas Atrasadas
      </Button>

      <Box
        sx={{
          marginTop: 4,
          marginBottom: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="div">
          Tareas Atrasadas
        </Typography>
        <Typography variant="h6" component="div">
          Total: {tareas.length}
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Empleado Asignado</TableCell>
              <TableCell>Proyecto Asignado</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Fecha Inicio</TableCell>
              <TableCell>Días Estimados</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Fecha Final Calculada</TableCell>
              <TableCell>Días Atrasados</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tareas.map((tarea) => (
              <TableRow key={tarea.id}>
                <TableCell>{tarea.id}</TableCell>
                <TableCell>
                  {empleados[tarea.empleado_asignado] || "Desconocido"}
                </TableCell>
                <TableCell>
                  {proyectos[tarea.proyecto_asignado] || "Desconocido"}
                </TableCell>
                <TableCell>{tarea.descripcion}</TableCell>
                <TableCell>{tarea.fecha_inicio}</TableCell>
                <TableCell>{tarea.dias_estimados}</TableCell>
                <TableCell>{tarea.estado}</TableCell>
                <TableCell>
                  {new Date(tarea.fecha_final_calculada)
                    .toISOString()
                    .slice(0, 10)}
                </TableCell>
                <TableCell>{tarea.dias_atrasados}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
