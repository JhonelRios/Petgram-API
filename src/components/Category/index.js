import React from 'react';
import { Anchor, Image } from './styles';

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover = DEFAULT_IMG, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt="cover" />
      {emoji}
    </Anchor>
  );
};

export default Category;
