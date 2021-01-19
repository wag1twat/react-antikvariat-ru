import {
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'
import DefaultLayoutMenu from 'components/DefaultLayoutMenu'
import CustDrawerBody from 'components/Drawerscomponents/CustDrawerBody'
import CustDrawerCloseButton from 'components/Drawerscomponents/CustDrawerCloseButton'
import CustDrawerHeader from 'components/Drawerscomponents/CustDrawerHeader'
import DrawerBox from 'components/Drawerscomponents/DrawerBox'
import useLocations from 'hooks/useLocations'
import React from 'react'
import { Nullable } from 'types/utility'
import { MenuIcon } from 'utils/icons'
import { margin, spacing } from 'utils/styles'

const MenuDrawer = () => {
  const { localization } = useLocations()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref: React.MutableRefObject<Nullable<HTMLInputElement>> = React.useRef(
    null,
  )

  return (
    <DrawerBox>
      <IconButton
        aria-label="data-menu-drawer-antikvariat-ru"
        size="sm"
        colorScheme="teal"
        onClick={onOpen}
        my={margin}
        icon={<MenuIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        initialFocusRef={ref}
      >
        <DrawerOverlay>
          <DrawerContent>
            <CustDrawerCloseButton />
            <CustDrawerHeader>{localization.drawerMenuHeader}</CustDrawerHeader>
            <CustDrawerBody>
              <DefaultLayoutMenu
                direction="column"
                mx={margin}
                spacing={spacing / 2}
              />
            </CustDrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                {localization.buttonCancel}
              </Button>
              <Button color="blue">{localization.buttonLogin}</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </DrawerBox>
  )
}

export default MenuDrawer
