import './App.css';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import ScrollRestoration from 'components/ScrollRestoration';
import Details from 'pages/Details';
import Listing from 'pages/Listing';
import NotFound from 'pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
});

const App = (): JSX.Element => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <ScrollRestoration />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Listing />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
