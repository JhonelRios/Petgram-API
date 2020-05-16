import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useNearScreen } from '../../hooks/useNearScreen';

import { Article, ImgWrapper, Img, Button } from './styles';

const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const [show, ref] = useNearScreen();

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
      likePhoto(input: $input) {
        id
        likes
        liked
      }
    }
  `;

  const [addLike] = useMutation(LIKE_PHOTO);

  const handleFavClick = () => {
    addLike({ variables: { input: { id } } });
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </Link>

          <Button type="button" onClick={handleFavClick}>
            <Icon size="32px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
