import React from 'react';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCards from '../components/ListOfPhotoCards';
import Layout from '../components/Layout';

const Home = ({ id }) => {
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      description="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};

export default React.memo(Home, (prevProps, props) => prevProps.id === props.id);
