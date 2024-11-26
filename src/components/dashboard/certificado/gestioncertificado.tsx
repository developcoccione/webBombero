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
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  CardHeader,
} from "@suid/material";
import EditIcon from "@suid/icons-material/Edit";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal, For } from "solid-js";

interface Certificate {
  rif: string;
  address: string;
  companyName: string;
  inspectionName: string;
  inspectorName: string;
  requirements: string;
  sanctioned: string;
  valid: string;
}

export default function CertificateManagement() {
  const [open, setOpen] = createSignal(false); // Estado del modal de registro
  const [editOpen, setEditOpen] = createSignal(false); // Estado del modal de edición
  const [certificates, setCertificates] = createSignal<Certificate[]>([]); // Lista de certificados
  const [rif, setRif] = createSignal("");
  const [address, setAddress] = createSignal("");
  const [companyName, setCompanyName] = createSignal("");
  const [inspectionName, setInspectionName] = createSignal("");
  const [inspectorName, setInspectorName] = createSignal("");
  const [requirements, setRequirements] = createSignal("No");
  const [sanctioned, setSanctioned] = createSignal("No");
  const [valid, setValid] = createSignal("No");
  const [selectedCertificateIndex, setSelectedCertificateIndex] = createSignal<null | number>(null);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    clearFields();
    setOpen(false);
  };

  const handleEditOpen = (index: number) => {
    const cert = certificates()[index];
    setSelectedCertificateIndex(index);
    setRif(cert.rif);
    setAddress(cert.address);
    setCompanyName(cert.companyName);
    setInspectionName(cert.inspectionName);
    setInspectorName(cert.inspectorName);
    setRequirements(cert.requirements);
    setSanctioned(cert.sanctioned);
    setValid(cert.valid);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    clearFields();
    setEditOpen(false);
  };

  const handleSubmit = () => {
    if (rif() && address() && companyName()) {
      const newCertificate: Certificate = {
        rif: rif(),
        address: address(),
        companyName: companyName(),
        inspectionName: inspectionName(),
        inspectorName: inspectorName(),
        requirements: requirements(),
        sanctioned: sanctioned(),
        valid: valid(),
      };
      setCertificates([...certificates(), newCertificate]);
      clearFields();
      setOpen(false);
    }
  };

  const handleEditSubmit = () => {
    const index = selectedCertificateIndex();
    if (index !== null) {
      const updatedCertificates = [...certificates()];
      updatedCertificates[index] = {
        rif: rif(),
        address: address(),
        companyName: companyName(),
        inspectionName: inspectionName(),
        inspectorName: inspectorName(),
        requirements: requirements(),
        sanctioned: sanctioned(),
        valid: valid(),
      };
      setCertificates(updatedCertificates);
      clearFields();
      setEditOpen(false);
    }
  };

  const clearFields = () => {
    setRif("");
    setAddress("");
    setCompanyName("");
    setInspectionName("");
    setInspectorName("");
    setRequirements("No");
    setSanctioned("No");
    setValid("No");
  };

  return (
    <>
      <Box sx={{ position: "fixed", bottom: 50, right: 50 }}>
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Box>

      {/* Modal para registrar certificados */}
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
          <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
            Registrar Certificado
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="RIF"
                variant="outlined"
                type="number"
                value={rif()}
                onChange={(e) => setRif(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Dirección"
                variant="outlined"
                value={address()}
                onChange={(e) => setAddress(e.target.value)}
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre de Empresa"
                variant="outlined"
                value={companyName()}
                onChange={(e) => setCompanyName(e.target.value)}
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre de Inspección"
                variant="outlined"
                value={inspectionName()}
                onChange={(e) => setInspectionName(e.target.value)}
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre del Inspector"
                variant="outlined"
                value={inspectorName()}
                onChange={(e) => setInspectorName(e.target.value)}
                multiline
              />
            </Grid>
            {/* Radios */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1">Requisitos</Typography>
                <RadioGroup
                  row
                  value={requirements()}
                  onChange={(e) => setRequirements(e.target.value)}
                >
                  <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1">Sancionado</Typography>
                <RadioGroup
                  row
                  value={sanctioned()}
                  onChange={(e) => setSanctioned(e.target.value)}
                >
                  <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="subtitle1">Vigente</Typography>
                <RadioGroup
                  row
                  value={valid()}
                  onChange={(e) => setValid(e.target.value)}
                >
                  <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Modal open={editOpen()} onClose={handleEditClose}>
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
    <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
      Editar Certificado
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="RIF"
          variant="outlined"
          type="number"
          value={rif()}
          onChange={(e) => setRif(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Dirección"
          variant="outlined"
          value={address()}
          onChange={(e) => setAddress(e.target.value)}
          multiline
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Nombre de Empresa"
          variant="outlined"
          value={companyName()}
          onChange={(e) => setCompanyName(e.target.value)}
          multiline
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Nombre de Inspección"
          variant="outlined"
          value={inspectionName()}
          onChange={(e) => setInspectionName(e.target.value)}
          multiline
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Nombre del Inspector"
          variant="outlined"
          value={inspectorName()}
          onChange={(e) => setInspectorName(e.target.value)}
          multiline
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <Typography variant="subtitle1">Requisitos</Typography>
          <RadioGroup
            row
            value={requirements()}
            onChange={(e) => setRequirements(e.target.value)}
          >
            <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <Typography variant="subtitle1">Sancionado</Typography>
          <RadioGroup
            row
            value={sanctioned()}
            onChange={(e) => setSanctioned(e.target.value)}
          >
            <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <Typography variant="subtitle1">Vigente</Typography>
          <RadioGroup
            row
            value={valid()}
            onChange={(e) => setValid(e.target.value)}
          >
            <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth onClick={handleEditSubmit}>
          Actualizar
        </Button>
      </Grid>
    </Grid>
  </Box>
</Modal>;




      {/* Tarjetas */}
      <Box sx={{ mt: 4, px: 2 }}>
        <Typography variant="h4" gutterBottom>
          Certificados Registrados
        </Typography>
        <Grid container spacing={2}>
          <For each={certificates()}>
            {(certificate, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ borderRadius: "10px" }}>
                  <CardHeader
                    title={certificate.companyName}
                    subheader={`RIF: ${certificate.rif}`}
                  />
                  <CardContent>
                    <Typography>Dirección: {certificate.address}</Typography>
                    <Typography>Inspección: {certificate.inspectionName}</Typography>
                    <Typography>Inspector: {certificate.inspectorName}</Typography>
                    <Typography>Requisitos: {certificate.requirements}</Typography>
                    <Typography>Sancionado: {certificate.sanctioned}</Typography>
                    <Typography>Vigente: {certificate.valid}</Typography>
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
