import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const SectionTitle = styled.h1`
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 24px;
  color: hsl(200deg 48% 86%);
  text-shadow: 2px 2px 5px black;
`;
