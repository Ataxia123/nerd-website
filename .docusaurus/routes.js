import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/nerddao/__docusaurus/debug',
    component: ComponentCreator('/nerddao/__docusaurus/debug', '922'),
    exact: true
  },
  {
    path: '/nerddao/__docusaurus/debug/config',
    component: ComponentCreator('/nerddao/__docusaurus/debug/config', 'e77'),
    exact: true
  },
  {
    path: '/nerddao/__docusaurus/debug/content',
    component: ComponentCreator('/nerddao/__docusaurus/debug/content', '4a7'),
    exact: true
  },
  {
    path: '/nerddao/__docusaurus/debug/globalData',
    component: ComponentCreator('/nerddao/__docusaurus/debug/globalData', '46d'),
    exact: true
  },
  {
    path: '/nerddao/__docusaurus/debug/metadata',
    component: ComponentCreator('/nerddao/__docusaurus/debug/metadata', '9a8'),
    exact: true
  },
  {
    path: '/nerddao/__docusaurus/debug/registry',
    component: ComponentCreator('/nerddao/__docusaurus/debug/registry', '1af'),
    exact: true
  },
  {
    path: '/nerddao/__docusaurus/debug/routes',
    component: ComponentCreator('/nerddao/__docusaurus/debug/routes', '831'),
    exact: true
  },
  {
    path: '/nerddao/blog',
    component: ComponentCreator('/nerddao/blog', 'b94'),
    exact: true
  },
  {
    path: '/nerddao/blog/archive',
    component: ComponentCreator('/nerddao/blog/archive', 'b6c'),
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
    path: '/nerddao/blog/tags/bitcoin',
    component: ComponentCreator('/nerddao/blog/tags/bitcoin', 'd58'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/nerddao',
    component: ComponentCreator('/nerddao/blog/tags/nerddao', '79c'),
    exact: true
  },
  {
    path: '/nerddao/blog/tags/strudel',
    component: ComponentCreator('/nerddao/blog/tags/strudel', '3a5'),
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
