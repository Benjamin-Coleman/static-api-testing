/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios')

// const get = endpoint => axios.get(`http://localhost8080/api/1/projects`)
const get = endpoint => axios.get(endpoint)

// const getProjectData = clientIdMaybe =>
//     const { data: projects } = await get(clientIdMaybe)
//     return { ...projects }
//   })

// const getProjectData = async () => {
//   const { data: projects } = await get()

//   return { ...projects }
// }

const getProjectData = nums =>
  Promise.all(
    nums.map(async num => {
      const { data: project } = await get(
        `http://localhost:8080/public/api/project/${num}`
      )
      console.log(data)
      //   const comments = await Promise.all(
      //     project.comments.map(async ({ comment: { comment: commentContent } }) => {
      //       const { data: comment } = await get(`https://jsonplaceholder.typicode.com/comments?postId=${num}`);

      //       return ability;
      //     })
      //   );
      return { ...project }
    })
  )

exports.createPages = async ({ actions: { createPage } }) => {
  console.log('doing stuff')
  const allProjects = await getProjectData([1, 2, 3, 4])

  // Create a page that lists all Projects.
  createPage({
    path: `/all`,
    component: require.resolve('./src/templates/all-projects.js'),
    context: { allProjects },
  })

  // Create a page for each Project.
  allProjects.forEach(project => {
    createPage({
      path: `/project/${project.id}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { project },
    })
  })
}
