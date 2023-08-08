import React from 'react';
import { Helmet } from 'react-helmet-async';
import OfferBlock from '../../components/offer-block/offer-block.tsx';


function OfferPage(): React.JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <OfferBlock/>
      </main>
    </div>
  );
}

export default OfferPage;
