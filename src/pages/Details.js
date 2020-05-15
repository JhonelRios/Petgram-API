import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import PhotoCard from '../components/PhotoCard';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const Details = ({ detailId: id }) => {
  console.log(id);
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } });

  if (loading) return 'Loading...';
  if (error) return 'Error';

  return <PhotoCard {...data.photo} />;
};

export default Details;
