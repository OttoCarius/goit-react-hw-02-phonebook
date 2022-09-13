import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 20px;
`;

export const StyledText = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-transform: ${p => p.theme.textTransform.cap};
`;
