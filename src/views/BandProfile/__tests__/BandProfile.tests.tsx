import React, { FC } from 'react';
import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { unmountComponentAtNode } from 'react-dom';
import { QueryClient } from 'react-query';
import { ThemeProvider } from '@material-ui/core';

import { theme } from '../../../styles/theme';
import { PATHS } from '../../../utils/consts';
import { MusicianExtended, MusicianToolbar } from '../../../components';
import { musician as mockedMusician } from '../../../mocks/musician';
import { BandProfile } from '..';
import { renderWithRouterMatch } from '../../../utils/helpers/testWithRouter';


let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if(container) {
    unmountComponentAtNode(container);
    container.remove();
  }
});

const queryClient = new QueryClient();
queryClient.getQueryData = jest.fn;

const wrapper: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </ThemeProvider>
);

describe('Band profile page', () => {

  it('display correct data about musician', () => {
    const { getByText, getByRole, getByTestId } = render(
      <MusicianExtended musician={mockedMusician} />,
      { container, wrapper }
    );
    const bandName = getByRole('heading');
    const contact= getByTestId('contact');
  
    expect(bandName).toHaveTextContent('Super band');
    expect(contact).toHaveTextContent('Ela');
    expect(getByText('jazz')).toBeInTheDocument();
    expect(getByText('folklor')).toBeInTheDocument();
  });

  it(`display default image when musician doesn't have one`, () => {
    const { getByRole } = render(
      <MusicianExtended musician={mockedMusician} />,
      { container, wrapper }
    );
    const image = getByRole('img');
  
    expect(image.src).toContain('bcg.jpg');
  });

  it('shows deactivate button when musician is active', () => {
    const { getByText } = render(
      <MusicianToolbar musician={mockedMusician} setIsEditing={jest.fn()} />,
      { container, wrapper }
    );
    const buttonLabel = getByText(/profile.deactivate/i);
  
    expect(buttonLabel).toBeInTheDocument();
  });

  it('shows activate button when musician is not active', () => {
    const deactivatedMusician = {
      ...mockedMusician,
      active: false,
    }
    const { getByText } = render(
      <MusicianToolbar musician={deactivatedMusician} setIsEditing={jest.fn()} />,
      { container, wrapper }
    );
    const buttonLabel = getByText(/profile.activate/i);
  
    expect(buttonLabel).toBeInTheDocument();
  });

  it('display message when musician not found in api', () => {
    const { getByRole } = renderWithRouterMatch(
      <BandProfile />,
      { path: `${PATHS.BANDS}/:id`, route: `${PATHS.BANDS}/2` },
      { container, wrapper }
    );
    const header = getByRole('generic');
  
    expect(header).toHaveTextContent(`You profile couldn't be displayed. Contact our service.`);
  });
});