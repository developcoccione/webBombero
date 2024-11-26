import AddIcon from "@suid/icons-material/Add";
import {
  Box,
  Fab,
  Button,
  Modal,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@suid/material";
import EditIcon from "@suid/icons-material/Edit";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal, For } from "solid-js";

interface News {
  name: string;
  description: string;
  date: string;
  image: string | null;
}

export default function NewsModalWithCard() {
  const [open, setOpen] = createSignal(false); // Estado del modal de registro
  const [editOpen, setEditOpen] = createSignal(false); // Estado del modal de edición
  const [newsList, setNewsList] = createSignal<News[]>([]); // Lista de noticias
  const [name, setName] = createSignal(""); // Campo de nombre
  const [description, setDescription] = createSignal(""); // Campo de descripción
  const [date, setDate] = createSignal(""); // Campo de fecha
  const [image, setImage] = createSignal<string | null>(null); // Imagen cargada
  const [selectedNewsIndex, setSelectedNewsIndex] = createSignal<number | null>(
    null
  ); // Índice de la noticia seleccionada
  const theme = useTheme(); // Tema para estilos

  // Abre y cierra los modales
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditOpen = (index: number) => {
    setSelectedNewsIndex(index);
    const news = newsList()[index];
    setName(news.name);
    setDescription(news.description);
    setDate(news.date);
    setImage(news.image);
    setEditOpen(true);
  };
  const handleEditClose = () => setEditOpen(false);

  // Maneja el envío de datos para registrar o editar
  const handleSubmit = () => {
    if (name() && description() && date()) {
      const newNews: News = {
        name: name(),
        description: description(),
        date: date(),
        image: image(),
      };
      setNewsList([...newsList(), newNews]);
      clearFields();
      setOpen(false);
    }
  };

  const handleEditSubmit = () => {
    if (name() && description() && date()) {
      const updatedNewsList = [...newsList()];
      const index = selectedNewsIndex();
      if (index !== null) {
        updatedNewsList[index] = {
          name: name(),
          description: description(),
          date: date(),
          image: image(),
        };
        setNewsList(updatedNewsList);
        clearFields();
        setEditOpen(false);
      }
    }
  };

  // Limpia los campos del formulario
  const clearFields = () => {
    setName("");
    setDescription("");
    setDate("");
    setImage(null);
  };

  // Maneja la carga de la imagen
  const handleImageUpload = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Botón flotante para abrir el modal */}
      <Box sx={{ position: "fixed", bottom: 50, right: 50 }}>
        <Button component="button" onClick={handleOpen}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Button>
      </Box>

      {/* Modal para registrar noticias */}
      <Modal open={open()} onClose={handleClose}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: 500,
      bgcolor: theme.palette.background.paper,
      borderRadius: "10px",
      p: 4,
    }}
  >
    <Typography variant="h5" component="h2" sx={{ mb: 3, textAlign: "center" }}>
      Registrar Noticias
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Nombre"
          variant="outlined"
          value={name()}
          onChange={(e) => setName(e.target.value)}
          multiline
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Descripcion"
          variant="outlined"
          value={description()}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="date"
          label="Fecha"
          InputLabelProps={{ shrink: true }}
          value={date()}
          onChange={(e) => setDate(e.target.value)}
          variant="outlined"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{
            height: "56px",
            textTransform: "none",
            borderRadius: "10px",
            justifyContent: "start",
          }}
        >
          {image() ? "Image Uploaded" : "Upload Image"}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  </Box>
</Modal>


      {/* Modal para actualizar noticias */}
      <Modal open={editOpen()} onClose={handleEditClose}>
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
            Edit News
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="standard"
                value={name()}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                value={description()}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                variant="outlined"
                value={date()}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ "margin-top": "10px" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button variant="contained" color="primary" onClick={handleEditSubmit}>
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      {/* Sección de tarjetas de noticias */}
      <Box sx={{ mt: 4, px: 2 }}>
        <Typography variant="h4" gutterBottom>
          Noticias Registradas
        </Typography>
        <Grid container spacing={2}>
          <For each={newsList()}>
            {(news, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ borderRadius: "10px", bgcolor: theme.palette.background.paper }}
                >
                  <CardContent>
                    {news.image && (
                      <img
                        src={news.image}
                        alt="News"
                        style={{
                          width: "100%",
                          height: "150px",
                          "object-fit": "cover",
                          "margin-bottom": "10px",
                        }}
                      />
                    )}
                    <Typography variant="h5" gutterBottom>
                      {news.name}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {news.description}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {news.date}
                    </Typography>
                    <Box sx={{ textAlign: "right", mt: 2 }}>
                      <IconButton onClick={() => handleEditOpen(index())}>
                        <EditIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </For>
        </Grid>
      </Box>
    </>
  );
}
