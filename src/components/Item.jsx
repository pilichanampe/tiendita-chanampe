import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  return (
    <Card
      sx={{
        width: 284,
      }}
      elevation={3}

    >
      <CardContent>
        <CardMedia
          component="img"
          sx={{
            height: 284,
            objectFit: 'contain',
            borderRadius: '4px',
          }}
          image={item.pictureUrl}
          alt="green iguana"
        />
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '14px 16px',
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: '1.8rem',
            mb: 2,
          }}
        >
          ${item.price}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: '1rem',
            mb: 2,
          }}
          color="text.secondary"
        >
          {item.title}
        </Typography>
        <Link to={`/item/${item.id}`}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              display: 'flex',
              width: '100%',
              alignSelf: 'flex-end',
            }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
