import {
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';

const Index = () => (
  <Container height="100vh" width="100vw">
    <Hero />
    <Main px="16" flexGrow="1">
      <Text fontSize="md" lineHeight="6" my="6">
        Join a leagure to fund each other when a rainy day turns into a storm.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://tezos.com/"
            flexGrow={1}
            mr={2}
          >
            Tezos <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer width="100%" minHeight="10" maxHeight="16" justifyContent="center" alignItems="center">
      <Text>Made with ❤️ </Text>
    </Footer>
  </Container>
);

export default Index;
