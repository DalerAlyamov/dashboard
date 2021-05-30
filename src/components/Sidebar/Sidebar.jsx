import React, { useState } from 'react'
import SidebarTitle from './SidebarTitle'
import SidebarSubtitle from './SidebarSubtitle'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import { ReactComponent as DashboardIcon } from '../../icons/dashboard.svg'
import { ReactComponent as AppsIcon } from '../../icons/apps.svg'
import { ReactComponent as LayersIcon } from '../../icons/layers.svg'
import { ReactComponent as WidgetIcon } from '../../icons/widgets.svg'
import { ReactComponent as PagesIcon } from '../../icons/pages.svg'
import { ReactComponent as FormIcon } from '../../icons/form.svg'
import SidebarDropdown from './SidebarDropdown'
import SidebarSubtitleLink from './SidebarSubtitleLink'

const StyledSidebar = styled.div`
  background: ${({theme}) => theme.primary.light};
  height: 100vh;
  width: 12.5rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  };
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  };
  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.scroll.thumbColor};
    outline: 1px solid ${({theme}) => theme.primary.dark};
  }
`

const Sidebar = ({
  className
}) => {

  const [data, setData] = useState([
    {
      text: 'Main',
      type: 'subtitle',
    },
    {
      type: 'link',
      icon: <DashboardIcon />,
      href: 'dashboard',
      text: 'Dashboard',
      infoColor: '',
      number: '',
    },
    {
      type: 'dropdown',
      open: false,
      icon: <AppsIcon />,
      text: 'Apps',
      infoColor: '#FCC100',
      number: '5',
      links: [
        {
          text: 'Inbox',
          href: 'inbox'
        },
        {
          text: 'Contacts',
          href: 'contacts',    
        },
        {
          text: 'Calendar',
          href: 'calendar',    
        },
        {
          text: 'Note',
          href: 'note',    
        },
        {
          text: 'Todo',
          href: 'todo',    
        },
      ]
    },
    {
      type: 'dropdown',
      open: false,
      icon: <LayersIcon />,
      text: 'Layouts',
      infoColor: '',
      number: '',
      links: [
        {
          text: 'Header',
          href: 'header'
        },
        {
          text: 'Aside',
          href: 'aside',    
        },
        {
          text: 'Footer',
          href: 'footer',    
        }
      ]
    },
    {
      type: 'link',
      icon: <WidgetIcon />,
      href: 'widgets',
      text: 'Widgets',
      infoColor: '',
      number: '',
    },
    {
      type: 'subtitle',
      text: 'Components'
    },
    {
      type: 'dropdown',
      open: false,
      icon: <PagesIcon />,
      text: 'Pages',
      infoColor: '#fff',
      number: '9',
      links: [
        {
          text: 'Profile',
          href: 'profile'
        },
        {
          text: 'Setting',
          href: 'setting',    
        },
        {
          text: 'Search',
          href: 'search',    
        },
        {
          text: 'FAQ',
          href: 'faq',    
        },
        {
          text: 'Gallery',
          href: 'gallery',    
        },
        {
          text: 'Invoice',
          href: 'invoice',    
        },
        {
          text: 'Price',
          href: 'price',    
        },
        {
          text: 'Blank',
          href: 'blank',    
        },
        {
          text: 'Sign In',
          href: 'sign-in',    
        },
        {
          text: 'Sign Up',
          href: 'sign-up',    
        },
        {
          text: 'Forgot Password',
          href: 'forgot password',    
        }
      ]
    },
    {
      type: 'dropdown',
      open: false,
      icon: <FormIcon />,
      text: 'Form',
      infoColor: '',
      number: '',
      links: [
        {
          text: 'Form Layout',
          href: 'form-layout'
        },
        {
          text: 'Form Element',
          href: 'form-element',    
        },
        {
          text: 'Form Validation',
          href: 'form-validation',    
        },
        {
          text: 'Select',
          href: 'select',    
        },
        {
          text: 'Editor',
          href: 'editor',    
        },
        {
          text: 'Slider',
          href: 'slider',    
        },
        {
          text: 'Tree',
          href: 'tree',    
        },
        {
          text: 'File Upload',
          href: 'file-upload',    
        },
        {
          text: 'Image Crop',
          href: 'image-crop',    
        },
        {
          text: 'Editable',
          href: 'editable',    
        }
      ]
    },
    {
      type: 'subtitleLink',
      text: 'Documents',
      href: 'documents',
    }
  ])

  const theme = useSelector(state => state.theme)

  const openDropdown = dropdownName => {
    setData(prev => {
      const newData = prev.concat()
      newData.forEach(dataItem => {
        if (dataItem.text === dropdownName)
          dataItem.open = !dataItem.open
        else if (dataItem.type === 'dropdown')
          dataItem.open = false
      })
      return newData
    })
  }

  return (
    <StyledSidebar theme={theme} className={className} >

      <SidebarTitle>Tcell</SidebarTitle>

      {data.map(dataItem => {
        if (dataItem.type === 'subtitle')
          return (
            <SidebarSubtitle key={dataItem.text}>{dataItem.text}</SidebarSubtitle>
          )
        if (dataItem.type === 'subtitleLink')
          return (
            <SidebarSubtitleLink key={dataItem.text}>{dataItem.text}</SidebarSubtitleLink>
          )
        if (dataItem.type === 'link')
          return (
            <SidebarLink 
              key={dataItem.text}
              icon={dataItem.icon}
              href={dataItem.href}
              number={dataItem.number} 
              infoColor={dataItem.infoColor}
            >{dataItem.text}</SidebarLink>
          )
        if (dataItem.type === 'dropdown')
          return (
            <SidebarDropdown 
              open={dataItem.open}
              key={dataItem.text}
              icon={dataItem.icon}
              number={dataItem.number} 
              onOpen={dropdownName => openDropdown(dropdownName)}
              infoColor={dataItem.infoColor}
              links={dataItem.links}
            >{dataItem.text}</SidebarDropdown>
          )
        return ''
      })}


    </StyledSidebar>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string
}

Sidebar.defaultProps = {
  className: ''
}

export default Sidebar
