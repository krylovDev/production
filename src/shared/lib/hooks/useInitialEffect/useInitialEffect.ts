import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
    // eslint-disable-next-line
  }, []);
}
