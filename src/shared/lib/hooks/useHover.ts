import {
  useCallback,
  useMemo,
  useState,
} from 'react';

interface useHoverBind {
	onMouseEnter: () => void
	onMouseLeave: () => void
}

type useHoverResult = [boolean, useHoverBind]

export const useHover = (): useHoverResult => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
	  setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
	  setIsHovered(false);
  }, []);

  return useMemo(() => [
    isHovered,
	  { onMouseEnter, onMouseLeave },
  ], [
    isHovered,
	  onMouseEnter,
	  onMouseLeave,
  ]);
};
