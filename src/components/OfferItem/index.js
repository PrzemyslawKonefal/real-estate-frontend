import React from 'react';
import { Item, Icon } from 'semantic-ui-react'
import { Offer, OfferHeader, Title, Price, Date, Image } from './styles';
import PropTypes from 'prop-types';

function OfferItem({date, href, imgUrl, title, price}) {
  return (
    <Offer>
      <Image src={imgUrl} />
      <Item.Content>
        <OfferHeader>
          <Title href={href}>{title}</Title>
          <Price color="green"> {`${price} PLN`}</Price>
        </OfferHeader>
        <Date> {`${price} PLN`}</Date>
      </Item.Content>
    </Offer>
  )
};

OfferItem.propTypes = {
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default OfferItem;
