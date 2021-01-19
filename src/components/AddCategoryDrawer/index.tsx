import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  ModalProps,
} from '@chakra-ui/react'
import GradienCanceltButton from 'components/Buttons/GradientCancelButton'
import GradientConfirmButton from 'components/Buttons/GradientConfirmButton'
import AddCategoryForm from 'Forms/AddCategoryForm'
import useLocations from 'hooks/useLocations'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IAddCategoryFormData } from 'Forms/AddCategoryForm/types'
import { AddCategorySchema } from 'Forms/AddCategoryForm/schema'
import { yupResolver } from '@hookform/resolvers/dist/yup'
import DrawerBox from 'components/DrawersComponents/DrawerBox'
import CustDrawerHeader from 'components/DrawersComponents/CustDrawerHeader'
import CustDrawerBody from 'components/DrawersComponents/CustDrawerBody'

interface IAddCategoryDrawer {
  onClose: ModalProps['onClose']
  isOpen: ModalProps['isOpen']
}
const AddCategoryDrawer: React.FC<IAddCategoryDrawer> = ({
  isOpen,
  onClose,
}) => {
  const { localization } = useLocations()

  return (
    <DrawerBox>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <CustDrawerHeader>
              {localization.drawerNewCategory}
            </CustDrawerHeader>
            <CustDrawerBody>
              <AddCategoryForm />
            </CustDrawerBody>
            <DrawerFooter>
              <GradienCanceltButton mr={3} onClick={onClose}>
                {localization.buttonCancel}
              </GradienCanceltButton>
              <GradientConfirmButton>
                {localization.buttonAdd}
              </GradientConfirmButton>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </DrawerBox>
  )
}

export default AddCategoryDrawer
