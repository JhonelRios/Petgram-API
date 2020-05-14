import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const useGetPhotos = (categoryId) => {
  const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `;

  return useQuery(GET_PHOTOS, { variables: { categoryId } });
};
