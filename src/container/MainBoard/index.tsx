// base
import React, { useMemo } from 'react';
import { HomeBoard, MainForm } from 'components';

// style
import { StyledMainBoard } from './style';

// libraries
import { GuestbookApi } from 'modules/guestbook';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_GUESTBOOK_CREATE } from 'consts';
import { useRouter } from 'next/router';

interface MainBoardProps {
  datas: any[];
}

export const MainBoard: React.FC<MainBoardProps> = ({ datas }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const guestbookApi = useMemo(() => {
    return new GuestbookApi();
  }, []);

  const createGuestbook = (data: FormData) => {
    return guestbookApi.createGuestbook(data);
  };

  const { mutate: createGb } = useMutation<FormData, unknown, any, any>(
    (values) => createGuestbook(values),
    {
      onMutate: async () => {
        await queryClient.cancelQueries([QUERY_GUESTBOOK_CREATE]);
      },
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_GUESTBOOK_CREATE]);

        router.reload();
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([QUERY_GUESTBOOK_CREATE], context.prev);
      }
    }
  );

  return (
    <StyledMainBoard>
      <div className="board-wrapper">
        <div className="board-wrapper-top">
          <MainForm onSubmit={createGb} />
        </div>
        <div className="board-wrapper-body">
          {datas.map((data) => (
            <HomeBoard key={data.id} data={data.readOnlyData} />
          ))}
        </div>
      </div>
    </StyledMainBoard>
  );
};
