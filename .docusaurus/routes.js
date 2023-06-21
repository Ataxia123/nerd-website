import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/nerddao/blog',
    component: ComponentCreator('/nerddao/blog', '8b6'),
    exact: true
  },
  {
    path: '/nerddao/blog/archive',
    component: ComponentCreator('/nerddao/blog/archive', 'ae1'),
    exact: true
  },
  {
    path: '/nerddao/blog/infinite-universe',
    component: ComponentCreator('/nerddao/blog/infinite-universe', 'd1b'),
    exact: true
  },
  {
    path: '/nerddao/blog/Nerd-Bogota',
    component: ComponentCreator('/nerddao/blog/Nerd-Bogota', '546'),
    exact: true
  },
  {
    path: '/nerddao/blog/Nerd-OS',
    component: ComponentCreator('/nerddao/blog/Nerd-OS', '836'),
    exact: true
  },
  {
    path: '/nerddao/blog/Nerd-OS-Update',
    component: ComponentCreator('/nerddao/blog/Nerd-OS-Update', 'ed6'),
    exact: true
  },
  {
    path: '/nerddao/blog/Network-State',
    component: ComponentCreator('/nerddao/blog/Network-State', '1db'),
    exact: true
  },
  {
    path: '/nerddao/blog/perpetual-motion',
    component: ComponentCreator('/nerddao/blog/perpetual-motion', '6f6'),
    exact: true
  },
  {
    path: '/nerddao/blog/strudel-briefing',
    component: ComponentCreator('/nerddao/blog/strudel-briefing', '33a'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags',
    component: ComponentCreator('/nerddao/blog/tags', '8e0'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/ai-universe',
    component: ComponentCreator('/nerddao/blog/tags/ai-universe', '012'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/bitcoin',
    component: ComponentCreator('/nerddao/blog/tags/bitcoin', '218'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/buidl-guild',
    component: ComponentCreator('/nerddao/blog/tags/buidl-guild', 'ac1'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/dev-con',
    component: ComponentCreator('/nerddao/blog/tags/dev-con', 'e29'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/eth-os',
    component: ComponentCreator('/nerddao/blog/tags/eth-os', 'cd3'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/ethereum',
    component: ComponentCreator('/nerddao/blog/tags/ethereum', '26a'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/hacks',
    component: ComponentCreator('/nerddao/blog/tags/hacks', 'd3a'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/nerd',
    component: ComponentCreator('/nerddao/blog/tags/nerd', '1ee'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/nerddao',
    component: ComponentCreator('/nerddao/blog/tags/nerddao', 'f2f'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/nft',
    component: ComponentCreator('/nerddao/blog/tags/nft', 'd30'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/strudel',
    component: ComponentCreator('/nerddao/blog/tags/strudel', '80a'),
    exact: true
  },
  {
    path: '/nerddao/blog/WAAS',
    component: ComponentCreator('/nerddao/blog/WAAS', 'e0f'),
    exact: true
  },
  {
    path: '/nerddao/blog/what-is-nerd',
    component: ComponentCreator('/nerddao/blog/what-is-nerd', '725'),
    exact: true
  },
  {
    path: '/nerddao/markdown-page',
    component: ComponentCreator('/nerddao/markdown-page', '917'),
    exact: true
  },
  {
    path: '/nerddao/docs',
    component: ComponentCreator('/nerddao/docs', '218'),
    routes: [
      {
        path: '/nerddao/docs/intro',
        component: ComponentCreator('/nerddao/docs/intro', '149'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nerddao/docs/NERD COMMUNITIES 🧠🧠🧠🤓',
        component: ComponentCreator('/nerddao/docs/NERD COMMUNITIES 🧠🧠🧠🤓', 'fb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nerddao/docs/Projects/miticushqui',
        component: ComponentCreator('/nerddao/docs/Projects/miticushqui', '8ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nerddao/docs/Projects/NerdCon 🧠🧠🧠🤓',
        component: ComponentCreator('/nerddao/docs/Projects/NerdCon 🧠🧠🧠🤓', '576'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/nerddao/docs/Projects/rubixDAO',
        component: ComponentCreator('/nerddao/docs/Projects/rubixDAO', '32a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/nerddao/',
    component: ComponentCreator('/nerddao/', '122'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
