import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Code from 'shared/UI/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
	className?: string
  block: ArticleCodeBlock
}

const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation();
  const {
    className,
    block,
  } = props;
  return (
    <div className={classNames('', {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});

export default ArticleCodeBlockComponent;
