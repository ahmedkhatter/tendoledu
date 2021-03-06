import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../constants';

const LeadContainer = styled.div`
  width: 50%;
  
  ${media.lessThan('laptop')`
    width: 70%;
  `};

  ${media.lessThan('tablet')`
    width: 80%;
  `};

  ${media.lessThan('mobileMedium')`
    width: 100%;
  `};
  
  margin: 0 auto;
`;

const LeadMessage = styled.p`
  text-align: center;
  font-size: 2em;

  ${media.lessThan('laptop')`
      font-size: 1.75em;
  `};

  ${media.lessThan('tablet')`
      font-size: 1.5em;
  `};

  ${media.lessThan('mobileMedium')`
      font-size: 1.25em;
  `};
`;

const HeroLead = ({ message }) => (
  <LeadContainer>
    <LeadMessage>
      {message}
    </LeadMessage>
  </LeadContainer>
);

HeroLead.propTypes = {
  message: PropTypes.string.isRequired,
};

export default HeroLead;
