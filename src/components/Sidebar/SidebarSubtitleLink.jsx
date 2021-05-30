import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux/actions'

const SubtitleLink = styled.button`
  text-align: left;
  color: ${({theme}) => theme.primary.contrastText};
  padding: 0 1rem;
  font-size: 12px;
  font-weight: 600;
  line-height: 2.25rem;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: ${({theme}) => theme.common.white};
    background: ${({theme}) => theme.primary.main};
  };
  &:focus {
    color: ${({theme}) => theme.common.white};
    background: ${({theme}) => theme.primary.main};
  };
`

const SidebarSubtitleLink = ({
  children,
  href
}) => {

  const theme = useSelector(state => state.theme)

  const dispatch = useDispatch()

  return (
    <SubtitleLink theme={theme} onClick={() => dispatch(changePage([href]))}>
      {children}
    </SubtitleLink>
  )
}

SidebarSubtitleLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
}

SidebarSubtitleLink.defaultProps = {
  children: '',
  href: ''
}

export default SidebarSubtitleLink
