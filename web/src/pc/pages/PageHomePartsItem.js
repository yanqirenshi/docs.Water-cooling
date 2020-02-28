import React from 'react';
import { Link } from 'react-router-dom';

function PageHomePartsItem (props) {
    let style = {
        root: {
            fontFamily: 'Baloo Chettan',
            fontSize: '222px',
            margin: '0px 44px 0px 44px',
            color: '#333333',
        }
    };

    let enter = (e) => {
        e.target.classList.toggle('rainbow');
    };

    let leave = (e) => {
        e.target.classList.toggle('rainbow');
    };

    return (
        <Link to={props.source.to} style={{ textDecoration: 'none' }}>
          <div style={style.root}
               onMouseEnter={enter}
               onMouseLeave={leave}>
            {props.source.label}
          </div>
        </Link>
    );
}

export default PageHomePartsItem;
