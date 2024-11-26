import { Box, Button, Modal, Typography, TextField, Grid, IconButton } from "@suid/material";
import EditIcon from "@suid/icons-material/Edit";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal, For } from "solid-js";

interface Mission {
  description: string;
}

export default function MissionModal() {
  const [missions, setMissions] = createSignal<Mission[]>([]); // Lista de misiones
  const [openEditModal, setOpenEditModal] = createSignal(false); // Estado del modal de edición
  const [description, setDescription] = createSignal(""); // Campo de descripción
  const [selectedMissionIndex, setSelectedMissionIndex] = createSignal<number | null>(null); // Índice de la misión seleccionada
  const theme = useTheme(); // Tema para estilos

  // Abre y cierra el modal de edición
  const handleEditOpen = (index: number) => {
    setSelectedMissionIndex(index);
    setDescription(missions()[index].description);
    setOpenEditModal(true);
  };
  const handleEditClose = () => {
    setOpenEditModal(false);
    setDescription("");
  };

  // Actualiza la misión seleccionada
  const handleUpdateMission = () => {
    if (description()) {
      const updatedMissions = [...missions()];
      const index = selectedMissionIndex();
      if (index !== null) {
        updatedMissions[index] = { description: description() };
        setMissions(updatedMissions);
        handleEditClose();
      }
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Misiones Registradas
      </Typography>

      {/* Lista de misiones */}
      <Grid container spacing={2}>
        <For each={missions()}>
          {(mission, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "10px",
                  p: 2,
                  bgcolor: theme.palette.background.paper,
                }}
              >
                <Typography variant="body1">{mission.description}</Typography>
                <Box sx={{ textAlign: "right", mt: 2 }}>
                  <IconButton onClick={() => handleEditOpen(index())}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          )}
        </For>
      </Grid>

      {/* Modal para editar misiones */}
      <Modal open={openEditModal()} onClose={handleEditClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            borderRadius: "10px",
            bgcolor: theme.palette.background.paper,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Actualizar Misión
          </Typography>
          <TextField
            fullWidth
            label="Descripción"
            variant="outlined"
            value={description()}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
          />
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateMission}
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
              }}
            >
              Guardar Cambios
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
