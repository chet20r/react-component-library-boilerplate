import styled from 'styled-components';
import React, { Component } from 'react';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-weight: 'ss';
`;

class KButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
    );
  }
}

// const KButton = () => {
//   return (
//     <div>
//       <Button>Normal</Button>
//       <Button primary>Primary</Button>
//     </div>
//   );
// };

export default KButton;
