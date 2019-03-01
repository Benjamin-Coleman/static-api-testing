import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ pageContext: { project } }) => (
  <Layout>
    <div style={{ width: 960, margin: '4rem auto' }}>
      <h1>{project.name}</h1>
      {/* <ul>
          {project.abilities.map(ability => (
            <li key={ability.name}>
              <Link to={`./project/${project.name}`}>{ability.name}</Link>
            </li>
          ))}
        </ul> */}
      <Link to="/">Back to all Projects</Link>
    </div>
  </Layout>
)
