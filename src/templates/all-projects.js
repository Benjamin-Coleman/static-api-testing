import React from 'react'
import { Link } from 'gatsby'

export default ({ pageContext: { allProjects } }) => (
  <div>
    <ul>
      {allProjects.map(project => (
        <Link to={'/project/' + project.id}>
          <li key={project.id}>{project.name}</li>
        </Link>
      ))}
    </ul>
  </div>
)
