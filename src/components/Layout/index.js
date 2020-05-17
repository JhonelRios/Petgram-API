import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram</title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
