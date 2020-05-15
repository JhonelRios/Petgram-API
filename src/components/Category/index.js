import React from 'react';
import { Link, Image } from './styles';

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover = DEFAULT_IMG, path = '#', emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} alt="cover" />
      {emoji}
    </Link>
  );
};

export default Category;
