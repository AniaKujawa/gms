import React, { FC } from 'react';

import { Props } from './types';
import { StyledTag } from './MusicianTags.styles';


export const MusicianTags: FC<Props> = ({ tags = [] }) => {

  return (
    <>
      {tags.map(tag => (
        <StyledTag
          key={tag.id}
          label={tag.name}
        />
      ))}
    </>
  );
};
