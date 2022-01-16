import { useToast } from '@chakra-ui/react';
import { useMutation, useQuery } from 'react-query';

export function useLogin() {
  const toast = useToast();
  return useQuery<{ documents: any }>('demo', async () => {
    const response = await fetch(
      'https://api.github.com/repos/tannerlinsley/react-query',
    );
    if (!response.ok) {
      toast({
        title: 'Error: ',
        description: `Could not get repo information`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      throw new Error('Network response was not ok');
    }
    return await response.json();
  });
}

// export function useLoginMutation(email, password) {
//   return useMutation(async (info) => {
//     const response = await fetch('http://localhost:4000/authenticate', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(info),
//     });

//     return await response.json();
//   });
// }
