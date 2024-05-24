import React from 'react';
import { ARTICLE_COLLECTION_JSON } from './index.stories';
import { Article, Section } from 'src/components/Layouts';
import { Paragraph } from 'src/components/Typography';

import './index.scss';
import { Article_JSON } from 'src/types/types';

type Props = { articles: Article_JSON[] };

// todo: separate concerns
// todo: performance - how often does it re-render?

// todo: sub-title not showing
// todo: convert date before passing to Article
// todo: before/after images

/**
 *
 * ArticleCollection renders 'todays article or main article'
 * ArticleCollection renders 'article search'
 * ArticleCollection renders 'article grid' at the bottom    <---- same grid comp as nav, will to make sure comp is flexible
 * ArticleCollection has nested routing so we can go to Articles --> Article 1     or    Articles --> Article 2
 * ArticleCollection renders each article and each article has content made up of sections, each section has one or multi paragraphs and at the start and end of each section
 * @returns
 */

function ArticleList({ articles = ARTICLE_COLLECTION_JSON }: Props) {
  // container invisible?

  return (
    <div className='article-collection-container'>
      {articles.map((item, index) => {
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
                        <Paragraph>{cont.paragraph}</Paragraph>
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
