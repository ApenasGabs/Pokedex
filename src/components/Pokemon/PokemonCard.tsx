import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pokemon } from "./PokemonCard.types";

const PokemonCard = (props: { Pokemon: Pokemon }) => {
  const { Pokemon } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        title={Pokemon.name}
        image={Pokemon.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Pokemon.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default PokemonCard;
