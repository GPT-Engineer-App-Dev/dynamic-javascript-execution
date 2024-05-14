import React, { useState } from 'react';
import { Box, Button, Textarea, useToast } from '@chakra-ui/react';

const Index = () => {
  const [code, setCode] = useState('');
  const toast = useToast();

  const executeCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
      toast({
        title: 'Execution Successful',
        description: 'Your JavaScript code has been executed.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Execution Failed',
        description: `Error: ${error.message}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5}>
      <Textarea
        placeholder="Write your JavaScript code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
        size="lg"
        height="200px"
      />
      <Button onClick={executeCode} colorScheme="blue" mt={4}>
        Execute JavaScript
      </Button>
    </Box>
  );
};

export default Index;