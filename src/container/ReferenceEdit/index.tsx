// base
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledReferenceEdit } from './style';

// components
import { ReferenceForm } from 'components';

// modules
import { ReferApi } from 'modules';

// react-query
import { useMutation, useQueryClient } from '@tanstack/react-query';

// const
import { QUERY_REFERENCE_EDIT } from 'consts';

interface ReferenceEditProps {
  editData: any;
}

export const ReferenceEdit: React.FC<ReferenceEditProps> = ({ editData }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { id } = router.query;

  const referenceApi = useMemo(() => {
    return new ReferApi();
  }, []);

  const updateReference = (values: FormData) => {
    if (!id) return Promise.reject([]);

    return referenceApi.updateReference(id as string, values);
  };

  const { mutate: updateRefer } = useMutation<FormData, unknown, any, any>(
    (values) => updateReference(values),
    {
      onMutate: async () => {
        await queryClient.cancelQueries([QUERY_REFERENCE_EDIT]);
      },
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_REFERENCE_EDIT]);

        router.back();
        return;
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([QUERY_REFERENCE_EDIT], context.prev);
      }
    }
  );

  return (
    <StyledReferenceEdit>
      <ReferenceForm editing onSubmit={updateRefer} editDatas={editData} />
    </StyledReferenceEdit>
  );
};
