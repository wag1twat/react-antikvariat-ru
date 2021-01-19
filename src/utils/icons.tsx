import React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'
import { FaUserCircle, FaVrCardboard } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineCreditCard } from 'react-icons/ai'
import { MdLanguage } from 'react-icons/md'

export const UserIcon: React.FC<IconProps> = (props) => (
  <Icon as={FaUserCircle} {...props} />
)
export const MenuIcon: React.FC<IconProps> = (props) => (
  <Icon as={AiOutlineMenu} {...props} />
)
export const LanguageIcon: React.FC<IconProps> = (props) => (
  <Icon as={MdLanguage} {...props} />
)
export const CardIcon: React.FC<IconProps> = (props) => (
  <Icon as={AiOutlineCreditCard} {...props} />
)
