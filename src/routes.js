import React from 'react';
import Router from 'react-routing/src/Router';
import App from './components/App';
//import Provider from 'react-redux';
import store from './stores/Store';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Home';

const router = new Router(on => {
/*
  on('*', async(state, next) => {
    console.log('router.on(*) state: ' + JSON.stringify(state));
    const component = await next();
    return (<App />);
  });
*/

  on('*', async (state, next) => {
    console.log('router.on(*) ');
    const component = await next();
    return <App store={store}>{component}</App>;
  });

  on('/', async (state, next) => {
    console.log('router.on(/)');
    const component = await next();
    return <Home store={store}>{component}</Home>
  });

/*
  on('*', () => {
    console.log('router.on(*) ');
    return (<App store={store}/>);
  });
*/

  on('/about', async(state) => {
    console.log('router.on(/#/about)');
    return (<NotFoundPage store={store}/>)
  });

  on('/feed/:id', async(state) => {
    console.log('router.on(/feed/:id)');
    return (<App store={store}/>)
  });

  on('/error', async(state,next) => {
    console.log('router.on(/error)');
    //if(state.statusCode === 404)
    return <NotFoundPage store={store} />
  });

  //on('/contact', async () => <ContactPage />);
  /*
  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
  */
});

export default router;
