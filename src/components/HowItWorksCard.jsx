import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Outline = styled.div`
  width: 250px;
  margin: 0 auto;
  margin-bottom: 5vh;
`;

const LogoContainer = styled.div`

`;

const MainTextContainer = styled.div`
  text-align: center;
  margin: 1.5vh 0;
`;

const SubTextContainer = styled.div`
  text-align: center;
`;

const MainText = styled.strong`
  font-weight: bold;
`;

const SubText = styled.strong`
  font-style: italic;
  font-weight: 0;
`;

const HowItWorksCard = ({ logo, mainText, subText }) => (
  <Outline>
    <LogoContainer>
      {logo}
    </LogoContainer>

    <MainTextContainer>
      <MainText>
        {mainText}
      </MainText>
    </MainTextContainer>

    {subText
      ? (
        <SubTextContainer>
          <SubText>
            {subText}
          </SubText>
        </SubTextContainer>
        )
      : null
    }
  </Outline>
);

HowItWorksCard.defaultProps = {
  subText: null,
};

HowItWorksCard.propTypes = {
  logo: PropTypes.element.isRequired,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

export default HowItWorksCard;
