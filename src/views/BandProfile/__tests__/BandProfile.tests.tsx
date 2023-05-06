import React, { ReactNode } from 'react';
import { render, act } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { unmountComponentAtNode } from 'react-dom';
import { QueryClient } from 'react-query';
import { ThemeProvider } from '@material-ui/core';

import { musicianClient } from '../../../client/Musician';
import { theme } from '../../../styles/theme';
import { MusicianExtended, MusicianToolbar } from '../../../components';
import { musician as mockedMusician } from '../../../mocks/musician';
import { BandProfile } from '..';


let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '2' },
  })
}))

const wrapper = ({ children }: { children?: ReactNode }) => (
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
    const contact = getByTestId('contact');

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
      <MusicianToolbar musician={mockedMusician} />,
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
      <MusicianToolbar musician={deactivatedMusician} />,
      { container, wrapper }
    );
    const buttonLabel = getByText(/profile.activate/i);

    expect(buttonLabel).toBeInTheDocument();
  });

  it('display message when musician not found in api', async () => {
    jest.spyOn(musicianClient, 'getMusician').mockImplementation(id => Promise.reject());

    await act(async () => {
      render(
        <BandProfile />,
        { container, wrapper }
      );
    });

    expect(container).toHaveTextContent(`You profile couldn't be displayed. Contact our service`);
  });

});
