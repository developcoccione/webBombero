import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@suid/material";
import CustomModal from "../modal/modal";

export default function CustomTable() {
  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        {/* Encabezados principales */}
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }} colSpan={3}>
              EMPRESA
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }} colSpan={2}>
              REPRESENTANTE LEGAL
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              PLANO DE BOMBERO
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }} colSpan={2}>
              METROS CUADRADOS
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              CARGA CALORÍFICA
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }} colSpan={4}>
              EXTINTORES
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }} colSpan={4}>
              CURSOS REALIZADOS
            </TableCell>
          </TableRow>

          {/* Sub-encabezados */}
          <TableRow>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              NOMBRE DE LA EMPRESA
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              RIF COMERCIAL
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              DIRECCIÓN
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              NOMBRE Y APELLIDO
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              CÉDULA DE IDENTIDAD
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              Si/No
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              ANCHO
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              LARGO
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              BAJA / MEDIA / ALTA
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              PQS
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              CO²
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              H²O
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              ESPUMA
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              PRIMEROS AUXILIOS
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              USO Y MANEJO DE EXTINTORES
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              MATERIALES PELIGROSOS
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              PLAN DE EMERGENCIA
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Ejemplo de cuerpo de la tabla */}
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              Empresa ABC
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              J-123456789
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              Calle Falsa 123
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              John Doe
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              12345678
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              No
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              10m
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              20m
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              Media
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              PQS
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>

            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              H²O
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              ESPUMA
            </TableCell>

            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              Primeros Auxilios
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              Uso y Manejo de Extintores
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              
            </TableCell>
            <TableCell align="center" sx={{ border: '1px solid black', padding: '10px' }}>
              Plan de Emergencia
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <CustomModal/>
    </>
  );
}
