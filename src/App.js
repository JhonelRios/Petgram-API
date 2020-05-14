import React from 'react';
import ListOfCategories from './components/ListOfCategories';
import ListOfPhotoCards from './components/ListOfPhotoCards';
import PhotoCardDetails from './components/PhotoCardDetails';
import Logo from './components/Logo';

import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardDetails id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </>
  );
};

export default App;
