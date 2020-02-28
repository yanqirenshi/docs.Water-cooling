import React from 'react';

import PageHomePartsItem from './PageHomePartsItem';

function PageHome () {
    let style = {
        root: {
            width: '100vw',
            height: '100vh',
        },
        background: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            fontFamily: "Sawarabi Mincho",
            fontSize: '888px',
            color: '#bce2e8',
            background: '#f3f3f3',
        },
        item_pool: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
    };

    let i = 1;
    let list = [
        { id: i++, label: 'Radiator',  to: '/radiator' },
        { id: i++, label: 'Reservoir', to: '/reservoir' },
        { id: i++, label: 'Pump',      to: '/pump' },
        { id: i++, label: 'Coolant',   to: '/coolant' },
        { id: i++, label: 'Tube',      to: '/tube' },
        { id: i++, label: 'Fittings',  to: '/fittings' },
        { id: i++, label: 'Fan',       to: '/fan' },
        { id: i++, label: 'Brand',     to: '/brand' },
        { id: i++, label: 'Shop',      to: '/shop' },
    ];

    return (
        <div style={style.root}>
          <div style={style.background}>
            <p>水冷</p>
          </div>

          <div style={style.item_pool}>
            {
                list.map((d) => {
                    return <PageHomePartsItem key={d.id} source={d} />;
                })
            }
          </div>

          {/* <div> */}
          {/*   <p>だいたい 27 cm (270mm)</p> */}
          {/* </div> */}
        </div>
    );
}

export default PageHome;
