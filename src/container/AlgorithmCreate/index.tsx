// base
import React, { useMemo } from 'react';

// style
import { StyledAlgorithmCreate } from './style';

// components
import { AlgorithmForm } from 'components';

// modules
import { AlgorithmApi } from 'modules/algorithm';

// libraries
import { useMutation, useQueryClient } from '@tanstack/react-query';

// consts
import { QUERY_ALGORITHM_CREATE } from 'consts';

interface AlgorithmCreateProps {}

export const AlgorithmCreate: React.FC<AlgorithmCreateProps> = ({
  ...props
}) => {
  const queryClient = useQueryClient();

  const algorithmApi = useMemo(() => {
    return new AlgorithmApi();
  }, []);

  const createAlgo = (values: FormData) => {
    return algorithmApi.createAlgorithm(values);
  };

  const { mutate: createMutate } = useMutation<FormData, unknown, any, any>(
    (values) => createAlgo(values),
    {
      onMutate: async () => {
        await queryClient.cancelQueries([QUERY_ALGORITHM_CREATE]);
      },
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_ALGORITHM_CREATE]);
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([QUERY_ALGORITHM_CREATE], context.prev);
      }
    }
  );

  return (
    <StyledAlgorithmCreate>
      <AlgorithmForm onSubmit={createMutate} />
    </StyledAlgorithmCreate>
  );
};
