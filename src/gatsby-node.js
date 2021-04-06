const path = require(`path`);

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    
    createPage({
        path: `/profile/:id`,
        matchPath: `/profile/:id`,
        component: path.resolve(`./src/pages/profile.js`),
    });
}
