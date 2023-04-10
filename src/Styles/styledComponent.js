import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    margin: 0px 20px;
    text-decoration: none;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const DentistaProfile = styled.div`
    margin: 30px;
    width: 20%;
    box-sizing: border-box;
    padding: 10px;
`;

export const DentistaPic = styled.img`
    max-width: 100%;
    height: auto;
`;