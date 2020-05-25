import React from 'react';
import Anchor from '../../atoms/Anchor/Anchor';

const Header = (props) => {
  console.log('props', props);
  const { item, className,style } = props;
  return (
    <React.Fragment>
      <div className={className} style={style}>
        <Anchor keys={item.name} to={item.url}>
          {item.name}
        </Anchor>
      </div>
    </React.Fragment>
  );
};
export default Header;
