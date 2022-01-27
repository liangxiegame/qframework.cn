import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '简单',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        QFramework 只有不到 800 行代码，其概念都是大家所熟知的 MVC、Utility、分层等大家所熟知的概念。
      </>
    ),
  },
  {
    title: '强大',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        QFramework 支持多种开发范式，MVC、CQRS、分层、领域驱动设计（DDD）、事件驱动、数据驱动。
        可以选择在 MVC 的基础上选择一种或多种，甚至全部都使用或者全部都不使用，也可以修改源码轻松定制自己需要的架构。
      </>
    ),
  },
  {
    title: '易上手',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        QFramework 的上手非常简单，只要先上手其中的 MVC 部分，其他的概念可以边开发边学习，当然也可以只使用 QFramework 的 MVC 部分内容。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
