import { Grid } from '@suid/material';
import { Card, CardContent, CardMedia } from '@suid/material';

export default function CardTra() {

  const cardsData = [
    {
      text: "Lorem ipsum"
    },
    {
      text: " dolor sit amet, consectetur adipisicing elit. Nesciunt dolores id voluptatibus fugiat. Hic explicabo dolorem voluptatum fugit iure modi asperiores amet repudiandae praesentium? Perferendis vel ullam hic qui tempora!"
    },
    {
      text: "Lorem ipsum"
    },
    {
      text: " dolor sit amet, consectetur adipisicing elit. Nesciunt dolores id voluptatibus fugiat. Hic explicabo dolorem voluptatum fugit iure modi asperiores amet repudiandae praesentium? Perferendis vel ullam hic qui tempora!"
    },
  ];

  return (
    <div style={{ "margin-top": '9%', "margin-left": "14.5%" }}>
      <Grid container spacing={10}>
        {/* Primera tarjeta */}
        <Grid item xs={10} sm={5}>
          <Card class="hoverable" sx={{ marginBottom: '5.9%', width: '100%', borderBottom: '10px solid #fbf11f'}}>
            <CardContent>
              <p style={{ "font-size": '125%' }}>{cardsData[2].text}</p>
              <p style={{ "font-size": '125%' }}>{cardsData[3].text}</p>
            </CardContent>
          </Card>
        </Grid>

        {/* Segunda tarjeta */}
        <Grid item xs={10} sm={5}>
          <Card class="hoverable" sx={{ width: '100%', borderBottom: '10px solid #fbf11f' }}>
            <CardContent>
              <p style={{ "font-size": '125%' }}>{cardsData[0].text}</p>
              <p style={{ "font-size": '125%' }}>{cardsData[1].text}</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
