import React from 'react';

import { Article, Section, MobileContentBlock } from 'src/components';

import { Article_JSON } from 'src/types/types';
import { ARTICLE_COLLECTION_JSON } from 'src/consts';

import './index.scss';
import { useWindowSize } from 'src/hooks';

type Props = { articles: Article_JSON[] };

// todo: separate concerns
// todo: performance - how often does it re-render?

// todo: sub-title not showing
// todo: convert date before passing to Article
// todo: before/after images

// TODO: zebra view
// section list, content list

/**
 *
 * ArticleCollection renders 'todays article or main article'
 * ArticleCollection renders 'article search'
 * ArticleCollection renders 'article grid' at the bottom    <---- same grid comp as nav, will to make sure comp is flexible
 * ArticleCollection has nested routing so we can go to Articles --> Article 1     or    Articles --> Article 2
 * ArticleCollection renders each article and each article has content made up of sections, each section has one or multi paragraphs and at the start and end of each section
 * @returns
 */

function ArticleCollection({ articles = ARTICLE_COLLECTION_JSON }: Props) {
  // container invisible?
  /// TODO: May need to move ArticleList to separate component if ArticleCollection contains other markup mentioned above

  const { width, height } = useWindowSize();
  console.log('🚀 ~ ArticleCollection ~ height:', height);
  console.log('🚀 ~ ArticleCollection ~ width:', width);

  return (
    <div className='article-collection-container' role='feed'>
      {articles.map((item, aIndex) => {
        return (
          <Article
            key={`${item.id}-${aIndex}`}
            type='primary'
            title={item.title}
            tagline={item.tagline}
            date={item.date}
            tags={item.tags}>
            {item.sections.map((section, sIndex) => {
              const sectionKey = `${Math.random().toFixed(2)}-${sIndex}`;

              return (
                <Section title={section.header} key={sectionKey}>
                  {section.paragraphs.map((paragraph, pIndex) => {
                    const contentItemKey = `${Math.random().toFixed(2)}-${pIndex}`;
                    const thisPragraphsImage = section.images.find((s) => s.id === paragraph.id);
                    return (
                      <MobileContentBlock
                        //  images={['']}
                        id={paragraph.id}
                        paragraph={paragraph.text}
                        image={thisPragraphsImage}
                        key={`${contentItemKey}-${pIndex}`}
                      />
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

export default ArticleCollection;
