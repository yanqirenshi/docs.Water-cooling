import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageHome      from './pages/PageHome';
import PageCoolant   from './pages/PageCoolant';
import PageFan       from './pages/PageFan';
import PageFittings  from './pages/PageFittings';
import PagePump      from './pages/PagePump';
import PageRadiator  from './pages/PageRadiator';
import PageReservoir from './pages/PageReservoir';
import PageTube      from './pages/PageTube';
import PageBrand     from './pages/PageBrand';
import PageShop      from './pages/PageShop';


function AppPc () {
    return (
        <BrowserRouter>
          <Route exact path='/'          component={PageHome} />
          <Route exact path='/coolant'   component={PageCoolant} />
          <Route exact path='/fan'       component={PageFan} />
          <Route exact path='/fittings'  component={PageFittings} />
          <Route exact path='/pump'      component={PagePump} />
          <Route exact path='/radiator'  component={PageRadiator} />
          <Route exact path='/reservoir' component={PageReservoir} />
          <Route exact path='/tube'      component={PageTube} />
          <Route exact path='/brand'     component={PageBrand} />
          <Route exact path='/shop'      component={PageShop} />
        </BrowserRouter>
    );
}

export default AppPc;
