import { useMediaQuery, useTheme } from '@chakra-ui/react'

const useBreakpoints = () => {
  const theme = useTheme()

  const [isXSmall] = useMediaQuery(`(max-width: ${theme.breakpoints['xs']})`)

  const [isSmall] = useMediaQuery(`(max-width: ${theme.breakpoints['sm']})`)

  const [isMedium] = useMediaQuery(`(max-width: ${theme.breakpoints['md']})`)

  const [isLarge] = useMediaQuery(`(max-width: ${theme.breakpoints['lg']})`)

  return {
    isXSmall,
    isSmall,
    isMedium,
    isLarge,
  }
}

export default useBreakpoints
