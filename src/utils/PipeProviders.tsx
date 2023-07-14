import React, { FC, ReactNode } from 'react';

type Props = {
  components: FC<{ children: ReactNode }>[];
  children: ReactNode;
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
