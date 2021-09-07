export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6137da7a0c61ed0faac335c9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s8zasd3q',
                  apiId: '3af88d34-aa2b-4883-83d0-e8d148069c98'
                },
                {
                  buildHookId: '6137da7b1a23c6105f9a860e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-os3ot1m2',
                  apiId: 'f615c4b3-f3b8-495b-86fd-3977b9bbefb1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sinrez/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-os3ot1m2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
