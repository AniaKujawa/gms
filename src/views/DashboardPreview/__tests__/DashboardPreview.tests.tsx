import React, { FC } from 'react';
import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { unmountComponentAtNode } from 'react-dom';
import { QueryClient } from 'react-query';

import { Welcome, MusiciansList } from '../../../components';
import { MusicianCard } from '../../../components/MusiciansList/MusicianCard';
import { musician as mockedMusician } from '../../../mocks/musician';


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

const wrapper: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('Dashboard preview page', () => {

  it('renders welcome component with welcome text', () => {
    const { getByText } = render(<Welcome />, { container });
    const welcomeText = getByText(/dashboard.title/i);
  
    expect(welcomeText).toBeInTheDocument();
  });

  it('renders title of list with musicians', () => {
    const { getByText } = render(<MusiciansList />, { container, wrapper });
    const text = getByText(/dashboard.subtitle/i);
  
    expect(text).toBeInTheDocument();
  });

  it('display correct data about music', () => {
    const { getByText, getByRole } = render(<MusicianCard musician={mockedMusician} />, { container, wrapper });
    const bandName = getByRole('heading');
  
    expect(bandName).toHaveTextContent('Super band');
    expect(getByText('jazz')).toBeInTheDocument();
    expect(getByText('folklor')).toBeInTheDocument();
  });

  it(`display default image when musician doesn't have one`, () => {
    const { getByRole } = render(<MusicianCard musician={mockedMusician} />, { container, wrapper });
    const image = getByRole('img');
  
    expect(image.src).toContain('bcg.jpg');
  });

});
