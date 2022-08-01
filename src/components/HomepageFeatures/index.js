import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Decentralized Coordination',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nerd DAO is focused on making ideas happen. 
        We believe that the best way to do that is to coordinate.
        Is by having fun with your friends.
      </>
    ),
  },
  {
    title: 'Focus on What You Like',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Everything in Nerd DAO is opt-in. We'd like users to find where 
        they can apply their skills or learn something new while having
        fun doing it.
      </>
    ),
  },
  {
    title: 'Powered by the BuidlGuild',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Nerd DAO wants to be a central part of the BuidlGuild by organizing
        the community by creating events where Buidlers can showcase their 
        stuff to the world 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
