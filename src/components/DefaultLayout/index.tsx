import { Flex, Stack, Box } from '@chakra-ui/react'
import React from 'react'
import { margin, spacing } from 'utils/styles'
import LoginDrawer from 'components/LoginDrawer'
import Logo from './Logo'
import SwitchLocation from 'components/SwitchLocation'
import MenuDrawer from 'components/MenuDrawer.tsx'
import DefaultLayoutMenu from 'components/DefaultLayoutMenu'
import useBreakpoints from 'hooks/useBreakpoints'
import { IDefaultLayout } from 'types/components/DefaultLayout'

const DefaultLayout: IDefaultLayout = ({ children }) => {
  const { isSmall } = useBreakpoints()

  return (
    <Stack spacing={spacing / 2}>
      <Flex
        flexDirection="column"
        bg="#fff"
        spacing={0}
        position="fixed"
        width="100%"
        height={90}
        zIndex={1}
      >
        <Flex justifyContent="space-between">
          <Logo />
          {!isSmall && (
            <Stack direction="row" spacing={spacing / 2}>
              <SwitchLocation />
              <LoginDrawer />
            </Stack>
          )}
          {isSmall && <MenuDrawer />}
        </Flex>
        <DefaultLayoutMenu direction="row" mx={margin} spacing={spacing / 2} />
      </Flex>
      <Box pt="90px">{children}</Box>
    </Stack>
  )
}

export default DefaultLayout
