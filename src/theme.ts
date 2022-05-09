// theme.js
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Version 2: Using functions
const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('gray.50', 'gray.800')(props),
        lineHeight: 'base',
      },
    }),
  },
})

export default theme