import React, { Fragment, createElement } from 'react'
import { useSelector } from 'react-redux'
import { MenuItemLink, getResources, translate } from 'react-admin'
import { Divider } from '@material-ui/core'
import { Dashboard } from '@material-ui/icons'
import { withRouter } from 'react-router-dom'

const Menu = ({ onMenuClick, translate }) => {
  const open = useSelector(state => state.admin.ui.sidebarOpen)
  const resources = useSelector(getResources)
  return (
    <div>
      <MenuItemLink key="dashboard" to="/" primaryText="Tableau de bord" leftIcon={<Dashboard />} onClick={onMenuClick} sidebarIsOpen={open} />
      {resources.map(resource => (
        <Fragment key={resource.name}>
          <MenuItemLink
            to={`/${resource.name}`}
            leftIcon={createElement(resource.icon)}
            onClick={onMenuClick}
            primaryText={(resource.options && resource.options.label) || translate(`resources.${resource.name}.name`, { smart_count: 2 })}
            sidebarIsOpen={open}
          />
          {resource.options && resource.options.nextDivider && <Divider />}
        </Fragment>
      ))}
    </div>
  )
}

export default withRouter(translate(Menu))
