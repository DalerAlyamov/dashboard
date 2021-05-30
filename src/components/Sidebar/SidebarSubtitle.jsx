import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Subtitle = styled.p`
  color: ${({theme}) => theme.primary.contrastText};
  padding: 0 1rem;
  font-size: 12px;
  font-weight: 600;
  line-height: 2.25rem;
  width: 100%;
`

const SidebarSubtitle = ({
  children
}) => {

  const theme = useSelector(state => state.theme)

  return (
    <Subtitle theme={theme}>
      {children}
    </Subtitle>
  )
}

SidebarSubtitle.propTypes = {
  children: PropTypes.node
}

SidebarSubtitle.defaultProps = {
  children: ''
}

export default SidebarSubtitle
