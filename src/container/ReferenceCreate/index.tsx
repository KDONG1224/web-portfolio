// base
import React, { useMemo } from 'react';

// style
import { StyledReferenceCreate } from './style';

// components
import { ReferenceForm } from 'components';

// modules
import { CreateReference, ReferApi } from 'modules';

// react-query
import { useMutation, useQueryClient } from '@tanstack/react-query';

// const
import { QUERY_REFERENCE_CREATE } from 'const';

interface ReferenceCreateProps {}

export const ReferenceCreate: React.FC<ReferenceCreateProps> = ({}) => {
  const queryClient = useQueryClient();

  const referenceApi = useMemo(() => {
    return new ReferApi();
  }, []);

  const createReference = (values: FormData) => {
    return referenceApi.createReference(values);
  };

  const { mutate: createRefer } = useMutation<FormData, unknown, any, any>(
    (values) => createReference(values),
    {
      onMutate: async () => {
        await queryClient.cancelQueries([QUERY_REFERENCE_CREATE]);
      },
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_REFERENCE_CREATE]);
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([QUERY_REFERENCE_CREATE], context.prev);
      }
    }
  );

  return (
    <StyledReferenceCreate>
      <ReferenceForm onSubmit={createRefer} />
    </StyledReferenceCreate>
  );
};
