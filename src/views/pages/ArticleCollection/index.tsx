import React from 'react';
import { ARTICLE_COLLECTION_JSON } from './index.stories';
import { Article, Section } from '../../../components/Layouts';

import './index.scss';

type Props = { items: Array<any> };

// todo: separate concerns
// todo: performance - how often does it re-render?

/**
 *
 * ArticleCollection renders 'todays article or main article'
 * ArticleCollection renders 'article search'
 * ArticleCollection renders 'article grid' at the bottom    <---- same grid comp as nav, will to make sure comp is flexible
 *
 * @returns
 */

function ArticleList({ items = ARTICLE_COLLECTION_JSON }: Props) {
  // container invisible?

  return (
    <div className='article-collection-container'>
      {items.map((item, index) => {
        return (
          <Article
            key={`${item.id}-${index}`}
            type='primary'
            title={item.title}
            subTitle={item.subTitle}
            date={item.date}
            tags={item.tags}>
            {item.sections.map((section: any) => {
              return (
                <Section title={section.header}>
                  {section.content.map((cont: any) => {
                    return (
                      <>
                        {cont.images.before && <img src={cont.images.before.href} alt={cont.images.before.alt} />}
                        <p>{cont.paragraph}</p>
                        {cont.images.after && <img src={cont.images.after.href} alt={cont.images.after.alt} />}
                      </>
                    );
                  })}
                </Section>
              );
            })}
          </Article>
        );
      })}
    </div>
  );
}

export default ArticleList;
