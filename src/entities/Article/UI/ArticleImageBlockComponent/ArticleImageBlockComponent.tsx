import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Text, { TextAlign } from 'shared/UI/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
	className?: string
  block: ArticleImageBlock
}

const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();
  const {
    className,
    block,
  } = props;
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img
        className={cls.img}
        src={block.src}
        alt={block.title}
      />
      {block.title && (
        <Text
          text={block.title}
          align={TextAlign.CENTER}
        />
      )}
    </div>
  );
});

export default ArticleImageBlockComponent;
