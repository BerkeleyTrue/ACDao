import { Stack, StackProps } from '@chakra-ui/react';

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="16"
    px="1rem"
    {...props}
  />
);
