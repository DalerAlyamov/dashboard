import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux/actions'
import Icon from '../Icon'
import { ReactComponent as ArrowIcon } from '../../icons/arrow_drop_down.svg'

const SidebarDropdown = ({
  icon,
  links,
  children,
  number,
  infoColor,
  onOpen,
  open
}) => {

  const theme = useSelector(state => state.theme)

  const dispatch = useDispatch()

  return (
    <Dropdown>
      <Label 
        theme={theme} 
        onClick={() => onOpen(children)} 
        open={open}
      >
        <Name theme={theme}>
          <LabelIcon theme={theme}>
            {icon}
          </LabelIcon>
          {children}
        </Name>
        <DropdownTools>
          <InfoNumber color={infoColor}>
            {number}
          </InfoNumber>
          <Arrow theme={theme} open={open}>
            <ArrowIcon />
          </Arrow>
        </DropdownTools>
      </Label>

      <Menu open={open}>
        {links.map(link => 
          <Link 
            key={link.href}
            theme={theme} 
            onClick={() => dispatch(changePage([link.href]))}
          >{link.text}</Link>
        )}
      </Menu>
    </Dropdown>
  )
}

const Dropdown = styled.div``

const Menu = styled.ul`
  overflow-y: hidden;
  display: block;
  transition: .4s ease;
  max-height: ${({open}) => !open ? `0` : '50rem'};
`

const Link = styled.button`
  width: 100%;
  text-align: left;
  line-height: 36px;
  background: ${({theme}) => theme.primary.main};
  transition: 200ms ease;
  font-size: 12px;
  padding-left: 44px;
  cursor: pointer;
  color: ${({theme}) => theme.primary.contrastText};
  &:hover {
    background: ${({theme}) => theme.primary.dark};
    color: ${({theme}) => theme.common.white};
  }
  &:focus {
    background: ${({theme}) => theme.primary.dark};
    color: ${({theme}) => theme.common.white};
  }
`
  
const Name = styled.span`
  font-size: 12px;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.primary.contrastText};
`

const LabelIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  fill: ${({theme}) => theme.primary.contrastText};
`

const Label = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 12px;
  width: 100%;
  ${({open, theme}) => open && `
    background: ${theme.primary.main};
    ${Name} {
      color: ${theme.common.white};
    };
    ${LabelIcon} {
      fill: ${theme.common.white};
    };
  `};
  &:hover {
    background: ${({theme}) => theme.primary.main};
    ${Name} {
      color: ${({theme}) => theme.common.white};
    };
    ${LabelIcon} {
      fill: ${({theme}) => theme.common.white};
    };
  };
`

const DropdownTools = styled.div`
  display: flex;
  align-items: center;
`
    
const InfoNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: .875rem;
  height: .875rem;
  background: ${({color}) => color};
  border-radius: .625rem;
  font-size: 10px;
  margin-right: .375rem;
`

const Arrow = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${({theme}) => theme.primary.contrastText};
  transition: .4s;
  ${({open}) => open && `
    transform: rotateZ(-180deg);
  `}
`

SidebarDropdown.propTypes = {
  href: PropTypes.string,
  onOpen: PropTypes.func,
  children: PropTypes.node,
  number: PropTypes.string,
  open: PropTypes.bool,
  infoColor: PropTypes.string
}

SidebarDropdown.defaultProps = {
  href: '',
  onOpen: () => {},
  children: '',
  number: null,
  open: false,
  infoColor: ''
}

export default SidebarDropdown
