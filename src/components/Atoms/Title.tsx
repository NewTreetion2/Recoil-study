import styled from 'styled-components';

const Title = styled.h1<React.CSSProperties>`
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-align-items: center; /* Safari 7.0+ */

  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};

  height: ${({ height }) => height || '40px'};

  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize || '28px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};

  cursor: ${({ cursor }) => cursor};
  z-index: ${({ zIndex }) => zIndex};
`;

export default Title;
