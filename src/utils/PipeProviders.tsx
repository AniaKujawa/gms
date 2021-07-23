import React, { FC } from 'react';

type Props = {
  components: FC[];
};

export const PipeProviders: FC<Props> = ({ components = [], children }) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};
