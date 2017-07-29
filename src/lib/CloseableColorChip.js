import React from 'react';

import Chip from 'material-ui/Chip';

const chipStyle = {
  fontSize: '16px',
  width: '425px',
  height: '39px',
  marginRight: '36px',
  display: 'inline-block',
  lineHeight: '24px',
};

export default class CloseableColorChip extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    onRequestDelete: React.PropTypes.func,
    width: React.PropTypes.string,
  };

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  };

  render() {
    const { width, text, onRequestDelete } = this.props;

    return (
      <div style={{ ...chipStyle, width }}>
        <Chip
          backgroundColor={this.context.muiTheme.palette.primary1Color}
          labelStyle={{ color: 'white' }}
          onRequestDelete={onRequestDelete}
        >
          {text}
        </Chip>
      </div>
    );
  }
}
