import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface props {
 alt: string
 nome: string
 description: string
}

const MediaCard:React.FC<props> = ({alt, nome, description}) => {
    return (
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea >
            <CardMedia
              component="img"
              height="170px"
              image=''
              alt=""
              sx={{bgcolor: '#B22222'}}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {nome}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }

export default MediaCard