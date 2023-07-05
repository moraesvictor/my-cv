import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { AiOutlineShareAlt } from 'react-icons/ai';

type Props = {
  image: string;
  imageTitle: string;
  cardDescription: string;
  link: string;
};

export const ProjectCard = ({
  image,
  imageTitle,
  cardDescription,
  link,
}: Props) => {
  return (
    <Card style={{ minWidth: 345, marginRight: '24px', marginBottom: '24px' }}>
      <CardMedia style={{ height: 140 }} image={image} title={imageTitle} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {imageTitle}
        </Typography>
        <Typography variant="body2">{cardDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button endIcon={<AiOutlineShareAlt />} size="small">
          Share
        </Button>
        <Button onClick={() => window.open(link, '__blank')} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
