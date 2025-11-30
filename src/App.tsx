import type React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter basename="/">
      <AppRouter />
    </BrowserRouter>
  );
}
