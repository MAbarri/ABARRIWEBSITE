export default defineAppConfig({
    global: {
        email: 'mohamed.abarri@abarri.tech',
        projectsTitle: "Building Innovative SaaS Solutions & Enterprise Platforms.",
        projectsDescription: "I transform business ideas into powerful SaaS platforms and enterprise solutions using modern technologies and best practices. Each project represents my passion for solving complex business challenges through scalable architectures, AI integration, and thoughtful user experiences.",
    },
    footer: {
        credits: `Copyright © ${new Date().getFullYear()}`,
        links: [{
            'icon': 'lucide:github',
            'to': 'https://github.com/MAbarri',
            'target': '_blank',
            'aria-label': 'GitHub'
        }, {
            'icon': 'lucide:linkedin',
            'to': 'https://www.linkedin.com/in/mohamed-abarri-26a38a72/',
            'target': '_blank',
            'aria-label': 'LinkedIn'
        }, {
            'icon': 'lucide:twitter',
            'to': 'https://twitter.com/@Abarri7',
            'target': '_blank',
            'aria-label': 'Twitter'
        }, {
            'icon': 'lucide:mail',
            'to': 'mailto:contact@abarri.tech',
            'target': '_blank',
            'aria-label': 'Email'
        }]
    }
})
