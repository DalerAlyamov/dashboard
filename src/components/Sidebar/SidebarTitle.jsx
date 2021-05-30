import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as LogoIcon } from '../../icons/logo.svg'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const ThemedTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  min-height: 3.5rem;
`

const ThemedText = styled.div`
  color: ${({theme}) => theme.common.white};
  margin-left: 10px;
  font-weight: 700;
  font-size: 20px;
`

const SidebarTitle = ({
  children
}) => {

  const theme = useSelector(state => state.theme)

  return (
    <ThemedTitle theme={theme}>
      <LogoIcon />
      <ThemedText theme={theme}>
        {children}
      </ThemedText> 
    </ThemedTitle>
  )
}

SidebarTitle.propTypes = {
  children: PropTypes.node
}

SidebarTitle.defaultProps = {
  children: ''
}

export default SidebarTitle