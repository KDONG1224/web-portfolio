// base
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAlgorithm } from './style';

// components
import { BasicCard, BlurImage } from 'components';
import { AlgorithmFormV2 } from 'components/Form/AlgorithmFormV2';

// const
import { QUERY_ALGORITHM_CREATE, QUERY_ALGORITHM_GET_ALL } from 'consts';
import { ROUTE_ALGORITHM_DETAIL_WITH_ID } from 'consts/route';

// hooks
import { useMedia } from 'hooks';

// modules
import { AlgorithmApi } from 'modules/algorithm';

// library
import { Button, Col, Pagination, Row, Space } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import nProgress from 'nprogress';
import Link from 'next/link';
interface AlgorithmProps {
  algorithmLists: any[];
}

export const Algorithm: React.FC<AlgorithmProps> = ({ algorithmLists }) => {
  const router = useRouter();

  const queryClient = useQueryClient();
  const { isMobile } = useMedia();

  const [open, setOpen] = useState(false);
  const [datas, setDatas] = useState<any[]>(() => {
    return algorithmLists;
  });

  const algorithmApi = useMemo(() => {
    return new AlgorithmApi();
  }, []);

  const createAlgo = (values: FormData) => {
    return algorithmApi.createAlgorithm(values);
  };

  const getAlgorithm = () => {
    return algorithmApi.getAllAlgorithmClient();
  };

  const handleClick = (id: string) => {
    router.push(ROUTE_ALGORITHM_DETAIL_WITH_ID(id));
  };

  const handleCreateVisible = () => {
    setOpen(true);
  };

  const handleCreateClose = () => {
    setOpen(false);
  };

  const { data } = useQuery(
    [QUERY_ALGORITHM_CREATE, open],
    () => getAlgorithm(),
    {
      select: (data) => data.map(({ readOnlyData }: any) => readOnlyData)
    }
  );

  const { mutate: createMutate } = useMutation<FormData, unknown, any, any>(
    (values) => createAlgo(values),
    {
      onMutate: async () => {
        await queryClient.cancelQueries([QUERY_ALGORITHM_CREATE]);
        nProgress.start();
      },
      onSuccess: async () => {
        queryClient.invalidateQueries([QUERY_ALGORITHM_CREATE]);

        setOpen(false);
        nProgress.done();
      },
      onError: (_, __, context) => {
        queryClient.setQueryData([QUERY_ALGORITHM_CREATE], context.prev);
        nProgress.done();
      }
    }
  );

  useEffect(() => {
    if (!data) return;
    setDatas(data);
  }, [data, createMutate]);

  console.log(datas.length);

  return (
    <>
      <StyledAlgorithm ismobile={isMobile ? 'true' : 'false'}>
        <div className="algo-title">
          <p className="algo-title-head">알고리즘</p>
          <p className="algo-title-desc">알고리즘을 직접 풀어봤습니다.</p>
        </div>
        {!isMobile && (
          <Space className="algo-create">
            <Button onClick={handleCreateVisible}>생성</Button>
            {/* <Pagination
              defaultCurrent={1}
              total={datas.length}
              showSizeChanger
            /> */}
          </Space>
        )}

        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{
            marginLeft: isMobile ? 22 : 'auto',
            marginRight: isMobile ? 22 : 'auto',
            paddingBottom: isMobile ? 100 : 0
          }}
        >
          {datas
            .sort((a, b) => b.index - a.index)
            .map((algorithm) => (
              <Col
                className="gutter-row"
                span={isMobile ? 12 : 8}
                key={algorithm.id}
                style={
                  isMobile
                    ? {
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginBottom: 60
                      }
                    : {
                        marginBottom: 60
                      }
                }
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: !isMobile ? 500 : 'auto',
                    width: '100%'
                  }}
                  className="algo-card-wrapper"
                >
                  {isMobile ? (
                    <div onClick={() => handleClick(algorithm.id)}>
                      <BlurImage
                        src={algorithm.thumbmnaile}
                        alt={algorithm.title}
                        width={300}
                        height={300}
                      />
                    </div>
                  ) : (
                    <BasicCard
                      data={algorithm}
                      width={isMobile ? 300 : 600}
                      heigth={isMobile ? 300 : 600}
                      onClick={handleClick}
                    />
                  )}
                </div>
              </Col>
            ))}
        </Row>
      </StyledAlgorithm>
      <AlgorithmFormV2
        onSubmit={createMutate}
        open={open}
        handleCreateClose={handleCreateClose}
      />
    </>
  );
};
