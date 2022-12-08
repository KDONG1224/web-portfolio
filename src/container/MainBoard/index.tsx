// base
import React, { useEffect, useMemo, useState } from 'react';
import { HomeBoard, MainForm } from 'components';

// style
import { StyledMainBoard } from './style';

// libraries
import { GuestbookApi } from 'modules/guestbook';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_GUESTBOOK_CREATE } from 'consts';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';

interface MainBoardProps {
  datas: any[];
}

export const MainBoard: React.FC<MainBoardProps> = ({ datas }) => {
  const queryClient = useQueryClient();

  const [boardLists, setBoardLists] = useState<any[]>(datas);

  const guestbookApi = useMemo(() => {
    return new GuestbookApi();
  }, []);

  const getGuestbook = () => {
    return guestbookApi.getAllGuestbookClient();
  };

  const createGuestbook = (data: FormData) => {
    return guestbookApi.createGuestbook(data);
  };

  const { data } = useQuery([QUERY_GUESTBOOK_CREATE], () => getGuestbook(), {
    select: (data) => data
  });

  const { mutate: createGb } = useMutation<FormData, unknown, any, any>(
    (values) => createGuestbook(values),
    {
      onMutate: async () => {
        await queryClient.cancelQueries([QUERY_GUESTBOOK_CREATE]);
        nProgress.start();
      },
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_GUESTBOOK_CREATE]);

        nProgress.done();
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([QUERY_GUESTBOOK_CREATE], context.prev);
      }
    }
  );

  useEffect(() => {
    setBoardLists(data);
  }, [data]);

  return (
    <StyledMainBoard>
      <div className="board-wrapper">
        <div className="board-wrapper-top">
          <MainForm onSubmit={createGb} />
        </div>
        <div className="board-wrapper-body">
          {boardLists
            .sort((a: any, b: any) => b.index - a.index)
            .map((data) => (
              <HomeBoard key={data.id} data={data.readOnlyData} />
            ))}
        </div>
      </div>
    </StyledMainBoard>
  );
};
