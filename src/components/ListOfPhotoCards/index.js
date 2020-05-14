import React from 'react';
import { useGetPhotos } from '../../hooks/graphql/useGetPhotos';

import PhotoCard from '../PhotoCard';

const ListOfPhotoCards = (props) => {
  const { categoryId } = props;
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) return 'Loading...';
  if (error) return 'Error';

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

export default ListOfPhotoCards;
