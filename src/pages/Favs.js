import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import ListOfFavs from '../components/ListOfFavs';
import Layout from '../components/Layout';

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
    <Layout title="Favoritos" description="Aquí puedes encontrar tus fotografías favoritas">
      <h1>Favoritos</h1>
      <ListOfFavs favs={data.favs} />
    </Layout>
  );
};

export default Favs;
