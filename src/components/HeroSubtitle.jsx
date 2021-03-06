import styled from 'styled-components';
import { media } from '../constants';

export default styled.h2`
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

    text-align: center;
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
`;
