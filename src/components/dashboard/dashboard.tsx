import { Typography, Card, CardContent, Grid, Box } from "@suid/material";
import Footer from "../footer/Footer";

function Dashboard() {
  const cards = [
    { title: "Users", value: 1200 },
    { title: "Sales", value: 300 },
    { title: "Visits", value: 4500 },
    { title: "Sales", value: 300 },
    { title: "Visits", value: 4500 },
    
  ];

  return (
    <Box
      component="div"
      sx={{
        marginTop: { xs: "5vh", md: "5vh", lg: "5vh" }, // Espaciado controlado
      }}
    >
      <Typography variant="h4">Welcome to the Dashboard</Typography>
      <Typography variant="body1" sx={{ marginTop: "2vh" }}>
        This is your dashboard content area.
      </Typography>
      <Grid container spacing={7} sx={{ marginTop: "1vh", justifyContent: "center", padding: "0vh 2vh 0vh 2vh"}}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} xl={4}>
            <Card sx={{justifyContent: "center", height: "25vh"}}>
              <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="h4">{card.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer/>
    </Box>
  );
}

export default Dashboard;
