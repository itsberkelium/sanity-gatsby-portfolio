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
                  buildHookId: '616d872227b0877cb1b7a0f1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j5f48swz',
                  apiId: '429c91d7-5503-4908-ab64-b1f52d1237bd'
                },
                {
                  buildHookId: '616d87237f9d4ff1e3def44a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-orvoomvq',
                  apiId: 'f19975b6-bc44-41b4-83c8-7e409cc39f74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/itsberkelium/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-orvoomvq.netlify.app',
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
