import React from 'react';

import PageHeader from './PageHeader';

function PagePump () {
    let source = {label:'Pump'};

    return (
        <div>
          <PageHeader source={source}/>
        </div>
    );
}

export default PagePump;
