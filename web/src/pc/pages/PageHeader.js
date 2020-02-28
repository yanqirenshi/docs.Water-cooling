import React from 'react';

function PageHeader (props) {
    let style = {
        root: {
            fontFamily: 'Baloo Chettan',
            fontSize: '222px',
            margin: '0px 88px 0px 0px',
            color: '#333333',
            padding: '33px 88px',
            display: 'inline-block',
        }
    };

    return (
        <div style={style.root}>
          {props.source.label}
        </div>
    );
}

export default PageHeader;
