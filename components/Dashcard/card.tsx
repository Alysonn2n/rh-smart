import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ContactlessIcon from '@mui/icons-material/Contactless';

interface props {
 alt: string
 nome: string
}

const MediaCard:React.FC<props> = ({alt, nome}) => {
    return (
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea >
            <CardMedia
              component="img"
              height="170px"
              image={ContactlessIcon}
              alt=""
              sx={{bgcolor: '#B22222'}}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {nome}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eligendi dolore distinctio aut mollitia cum recusandae nihil est accusantium voluptate labore laboriosam delectus perferendis dolores excepturi, sequi blanditiis nisi asperiores.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }

export default MediaCard