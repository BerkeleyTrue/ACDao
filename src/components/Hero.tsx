import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => (
  <Flex
    flexBasis="auto"
    justifyContent="flex-end"
    alignItems="center"
    flexFlow="column"
    height="50%"
    width="100%"
    flexShrink="0"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    px="16"
  >
    <Heading fontSize={{ base: '4xl', md: '5xl' }}>{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'ACDao: Create Pacts, fund each other',
};
