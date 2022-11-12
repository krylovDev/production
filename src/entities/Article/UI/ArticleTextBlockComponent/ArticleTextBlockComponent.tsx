import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/UI/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
	className?: string
  block: ArticleTextBlock
}

const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();
  const {
    className,
    block,
  } = props;
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text
          title={block.title}
          className={cls.title}
        />
      )}
      {
        block.paragraphs.map((paragraph) => (
          <Text
            key={paragraph}
            text={paragraph}
            className={cls.paragraph}
          />
        ))
      }
    </div>
  );
});

export default ArticleTextBlockComponent;
