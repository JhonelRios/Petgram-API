import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ListOfFavs from '../components/ListOfFavs';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const Favs = () => {
  const { data, loading, error } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' });

  if (loading) return 'Loading...';
  if (error) return 'Error';

  return (
    <>
      <h1>Favoritos</h1>
      <ListOfFavs favs={data.favs} />
    </>
  );
};

export default Favs;
