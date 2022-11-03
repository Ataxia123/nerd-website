import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/nerddao/blog',
    component: ComponentCreator('/nerddao/blog', '44a'),
    exact: true
  },
  {
    path: '/nerddao/blog/archive',
    component: ComponentCreator('/nerddao/blog/archive', 'b6c'),
    exact: true
  },
  {
    path: '/nerddao/blog/infinite-universe',
    component: ComponentCreator('/nerddao/blog/infinite-universe', 'd94'),
    exact: true
  },
  {
    path: '/nerddao/blog/Nerd-Bogota',
    component: ComponentCreator('/nerddao/blog/Nerd-Bogota', 'ae6'),
    exact: true
  },
  {
    path: '/nerddao/blog/Nerd-OS',
    component: ComponentCreator('/nerddao/blog/Nerd-OS', '57f'),
    exact: true
  },
  {
    path: '/nerddao/blog/Nerd-OS-Update',
    component: ComponentCreator('/nerddao/blog/Nerd-OS-Update', '55d'),
    exact: true
  },
  {
    path: '/nerddao/blog/Network-State',
    component: ComponentCreator('/nerddao/blog/Network-State', 'df0'),
    exact: true
  },
  {
    path: '/nerddao/blog/perpetual-motion',
    component: ComponentCreator('/nerddao/blog/perpetual-motion', 'c53'),
    exact: true
  },
  {
    path: '/nerddao/blog/strudel-briefing',
    component: ComponentCreator('/nerddao/blog/strudel-briefing', 'e6f'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags',
    component: ComponentCreator('/nerddao/blog/tags', '4ca'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/ai-universe',
    component: ComponentCreator('/nerddao/blog/tags/ai-universe', 'eef'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/bitcoin',
    component: ComponentCreator('/nerddao/blog/tags/bitcoin', 'd58'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/buidl-guild',
    component: ComponentCreator('/nerddao/blog/tags/buidl-guild', '904'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/dev-con',
    component: ComponentCreator('/nerddao/blog/tags/dev-con', 'ee2'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/eth-os',
    component: ComponentCreator('/nerddao/blog/tags/eth-os', '7cf'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/ethereum',
    component: ComponentCreator('/nerddao/blog/tags/ethereum', '629'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/hacks',
    component: ComponentCreator('/nerddao/blog/tags/hacks', '140'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/nerd',
    component: ComponentCreator('/nerddao/blog/tags/nerd', 'dde'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/nerddao',
    component: ComponentCreator('/nerddao/blog/tags/nerddao', 'dfd'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/nft',
    component: ComponentCreator('/nerddao/blog/tags/nft', '976'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/strudel',
    component: ComponentCreator('/nerddao/blog/tags/strudel', '110'),
    exact: true
  },
  {
    path: '/nerddao/blog/what-is-nerd',
    component: ComponentCreator('/nerddao/blog/what-is-nerd', '6b1'),
    exact: true
  },
  {
    path: '/nerddao/markdown-page',
    component: ComponentCreator('/nerddao/markdown-page', 'e66'),
    exact: true
  },
  {
    path: '/nerddao/docs',
    component: ComponentCreator('/nerddao/docs', '1f2'),
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
    component: ComponentCreator('/nerddao/', '18d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
