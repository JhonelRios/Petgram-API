import React from 'react';
import { Link, Grid, Img } from './styles';

const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/details/${fav.id}`}>
          <Img src={fav.src} alt={fav.id} />
        </Link>
      ))}
    </Grid>
  );
};

export default ListOfFavs;
