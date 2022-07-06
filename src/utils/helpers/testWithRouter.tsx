import React, { ComponentType } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Route, BrowserRouter } from 'react-router-dom';

type HistoryObj = {
  path: string;
  route: string;
}

export const renderWithRouterMatch: RenderResult = (
  ui: ComponentType,
  routes: HistoryObj = {
    path: '/',
    route: '/',
  },
  {...props}) => { 
    return (
      render( 
        <BrowserRouter> 
          <Route path={routes.path} component={ui} /> 
        </BrowserRouter>, {...props}
      )
    );
};
