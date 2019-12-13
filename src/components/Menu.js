import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { MenuItemLink, getResources, translate } from 'react-admin'
import { Divider } from '@material-ui/core'
import { Dashboard } from '@material-ui/icons'
import { withRouter } from 'react-router-dom'

const Menu = ({ resources, onMenuClick, translate }) => (
  <div>
    <MenuItemLink key="dashboard" to="/" primaryText="Tableau de bord" leftIcon={<Dashboard />} onClick={onMenuClick} />
    {resources.map(resource => (
      <Fragment key={resource.name}>
        <MenuItemLink
          to={`/${resource.name}`}
          leftIcon={resource.icon}
          onClick={onMenuClick}
          primaryText={(resource.options && resource.options.label) || translate(resource.name)}
        />
        {resource.options && resource.options.nextDivider && <Divider />}
      </Fragment>
    ))}
  </div>
)

const mapStateToProps = state => ({
  resources: getResources(state)
})

export default withRouter(connect(mapStateToProps)(translate(Menu)))
