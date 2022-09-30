import { useCallback, useState} from 'react';
import { Tag } from '../types';

interface HookApi {
  tags: Tag[];
  addTag: (tag: Tag) => void;
  removeTag: (tag: Tag) => void;
}

export const useBandsTags = (): HookApi => {
  const [ tags, setTags ] = useState<Tag[]>([]);

  const addTag = useCallback((tag: Tag) => {
    setTags(tags => [...tags, tag]);
  }, [setTags]);

  const removeTag = useCallback((tag: Tag) => {
    setTags(tags => tags.filter(selectedTag => selectedTag.id !== tag.id));
  }, [setTags]);

  return {
    tags,
    addTag,
    removeTag,
  }
};
