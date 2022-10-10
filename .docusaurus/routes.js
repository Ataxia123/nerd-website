import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/nerddao/blog',
    component: ComponentCreator('/nerddao/blog', 'c2e'),
    exact: true
  },
  {
    path: '/nerddao/blog/archive',
    component: ComponentCreator('/nerddao/blog/archive', 'f28'),
    exact: true
  },
  {
    path: '/nerddao/blog/Nerd-Bogota',
    component: ComponentCreator('/nerddao/blog/Nerd-Bogota', '4bb'),
    exact: true
  },
  {
    path: '/nerddao/blog/NerdOS',
    component: ComponentCreator('/nerddao/blog/NerdOS', '714'),
    exact: true
  },
  {
    path: '/nerddao/blog/perpetual-motion',
    component: ComponentCreator('/nerddao/blog/perpetual-motion', '667'),
    exact: true
  },
  {
    path: '/nerddao/blog/strudel-briefing',
    component: ComponentCreator('/nerddao/blog/strudel-briefing', '7c9'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags',
    component: ComponentCreator('/nerddao/blog/tags', '715'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/bitcoin',
    component: ComponentCreator('/nerddao/blog/tags/bitcoin', '6cc'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/ethereum',
    component: ComponentCreator('/nerddao/blog/tags/ethereum', '6c8'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/hacks',
    component: ComponentCreator('/nerddao/blog/tags/hacks', 'ba2'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/nerddao',
    component: ComponentCreator('/nerddao/blog/tags/nerddao', 'ef4'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/strudel',
    component: ComponentCreator('/nerddao/blog/tags/strudel', 'e14'),
    exact: true
  },
  {
    path: '/nerddao/blog/what-is-nerd',
    component: ComponentCreator('/nerddao/blog/what-is-nerd', 'b04'),
    exact: true
  },
  {
    path: '/nerddao/markdown-page',
    component: ComponentCreator('/nerddao/markdown-page', '560'),
    exact: true
  },
  {
    path: '/nerddao/docs',
    component: ComponentCreator('/nerddao/docs', '1bc'),
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
    component: ComponentCreator('/nerddao/', 'a4f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
