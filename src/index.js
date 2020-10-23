import {
    h,
    render
} from 'preact';

import {App} from './views/home';

const app = document.getElementById('app')
render(
  <App/>,
  app,
  app.lastChild
)