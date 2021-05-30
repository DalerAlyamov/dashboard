import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux/actions'
import Icon from '../Icon'
  
const Label = styled.span`
  font-size: 12px;
  width: 100%;
  display: flex;
  align-items: center;
`

const LinkIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  fill: ${({theme}) => theme.primary.contrastText};
`

const Link = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 0 1rem;
  line-height: 2.25rem;
  width: 100%;
  color: ${({theme}) => theme.primary.contrastText}; 
  &:hover {
    background: ${({theme}) => theme.primary.main};
    ${Label} {
      color: ${({theme}) => theme.common.white};
    };
    ${LinkIcon} {
      fill: ${({theme}) => theme.common.white} !important;
    };
  }; 
  &:focus {
    background: ${({theme}) => theme.primary.main};
    ${Label}{
      color: ${({theme}) => theme.common.white};
    }
    ${LinkIcon}{
      fill: ${({theme}) => theme.common.white};
    }
  }; 
`

const LinkTools = styled.div`
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
  margin-right: 1.875rem;
  color: ${({theme}) => theme.common.black};
`

const SidebarLink = ({
  icon,
  href,
  children,
  number,
  infoColor
}) => {

  const theme = useSelector(state => state.theme)

  const dispatch = useDispatch()

  return (
    <Link theme={theme} onClick={() => dispatch(changePage([href]))}>

      <Label theme={theme}>

        <LinkIcon theme={theme}>
          {icon}
        </LinkIcon>

        {children}

      </Label>

      <LinkTools>

        <InfoNumber theme={theme} color={infoColor}>
          {number}
        </InfoNumber>

      </LinkTools>

    </Link>
  )
}

SidebarLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  number: PropTypes.string,
  infoColor: PropTypes.string
}

SidebarLink.defaultProps = {
  href: '',
  children: '',
  number: null,
  infoColor: ''
}

export default SidebarLink
