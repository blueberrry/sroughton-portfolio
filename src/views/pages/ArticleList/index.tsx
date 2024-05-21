import React from 'react';
import { ARTICLE_LIST_JSON } from './index.stories';
import { Article, Section } from '../../../components/Layouts';

type Props = { items: Array<any> };

// todo: separate concerns
// todo: performance - how often does it re-render?

function ArticleList({ items = ARTICLE_LIST_JSON }: Props) {
  // container invisible?

  return (
    <div>
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
