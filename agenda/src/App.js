import './App.scss';
import Router from './router';
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from './components/Navbar';
import LargeWithAppLinksAndSocial from './components/Footer';

function App() {
  return (
    <ChakraProvider>

      <WithSubnavigation />
      <Router />
      <LargeWithAppLinksAndSocial />
    </ChakraProvider>
  );
}

export default App;
