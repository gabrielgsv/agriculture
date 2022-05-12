import React from 'react';
import { Box, BoxProps, CloseButton, Flex, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FiPieChart, FiUser, FiXCircle } from 'react-icons/fi';
import NavItem from './NavItem';
import Lottie from 'react-lottie-player';

import animationPlant from '../../assets/animations/plant.json';
import { animation } from './style';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiPieChart, url: '/' },
  { name: 'Produtor Rural', icon: FiUser, url: '/producer' },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRight='1px'
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos='fixed'
        h='100vh'
        {...rest}>
        <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
          <Lottie
            animationData={animationPlant}
            play
            loop={false}
            className={animation}
          />

          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        <Flex flexDirection='column' h='100vh' justifyContent='space-between'>
          <Flex flexDirection='column'>
            {LinkItems.map((link) => (
              <NavItem key={link.name} icon={link.icon} url={link.url}>
                {link.name}
              </NavItem>
            ))}
          </Flex>
          <Box bg='gray.200' h='140px'>
            <NavItem icon={FiXCircle} url='/login'>
              Sair
            </NavItem>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SidebarContent;
