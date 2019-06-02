import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { BrowserRouter } from 'react-router-dom';

import App from './app.component';

describe('Application', () => {
  afterEach(cleanup);

  const THEMES = [
    {
      value: 'light',
      label: 'Light'
    },
    {
      value: 'dark',
      label: 'Dark'
    }
  ];

  it('should render the application in logged out state', () => {
    const user = null;
    const fetchUser = jest.fn();
    const history = {};
    const logout = jest.fn();
    const selectedTheme = THEMES[0];
    const selectTheme = jest.fn();

    const { container, getByText } = render(
      <BrowserRouter>
        <App
          user={user}
          fetchUser={fetchUser}
          history={history}
          logout={logout}
          themes={THEMES}
          selectedTheme={selectedTheme}
          selectTheme={selectTheme}
        />
      </BrowserRouter>
    );

    expect(container.querySelector('.app.light')).toBeInTheDocument();
    expect(container.querySelector('.notification-container')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
  });

  it('should re-render the application from logged out to logged in state', () => {
    let user = null;
    const fetchUser = jest.fn();
    const history = {};
    const logout = jest.fn();
    const selectedTheme = THEMES[0];
    const selectTheme = jest.fn();

    const { container, getByText, queryByText, rerender } = render(
      <BrowserRouter>
        <App
          user={user}
          fetchUser={fetchUser}
          history={history}
          logout={logout}
          themes={THEMES}
          selectedTheme={selectedTheme}
          selectTheme={selectTheme}
        />
      </BrowserRouter>
    );

    expect(container.querySelector('.app.light')).toBeInTheDocument();
    expect(container.querySelector('.notification-container')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();

    user = {};

    rerender(
      <BrowserRouter>
        <App
          user={user}
          fetchUser={fetchUser}
          history={history}
          logout={logout}
          themes={THEMES}
          selectedTheme={selectedTheme}
          selectTheme={selectTheme}
        />
      </BrowserRouter>
    );

    expect(container.querySelector('.app.light')).toBeInTheDocument();
    expect(container.querySelector('.notification-container')).toBeInTheDocument();
    expect(queryByText('Register')).not.toBeInTheDocument();
    expect(queryByText('Login')).not.toBeInTheDocument();
  });
});
