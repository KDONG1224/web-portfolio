import React, { ChangeEvent, useMemo } from 'react';

// packages
import { Button, Input, Table } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import produce from 'immer';

// types
import { PlusCircleOutlined } from '@ant-design/icons';


import { makeid } from 'utils';

export interface ResponseProductNoticeOption {
  label: string;
  text: string;
}

interface Props {
  value?: (ResponseProductNoticeOption & { key: string })[];
  onChange?: (v: ResponseProductNoticeOption[]) => void;
}

const NoticeEtcTable = ({ value, onChange }: Props) => {
  const handleChangeLabel = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (onChange && value) {
      const { value: v } = e.target;
      onChange(
        produce(value, draft => {
          draft[index].label = v;
        }),
      );
    }
  };

  const handleChangeDetail = (
    index: number,
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value: v } = e.target;

    if (onChange && value) {
      onChange(
        produce(value, draft => {
          draft[index].text = v;
        }),
      );
    }
  };

  const removeOptionRow = (index: number) => {
    if (onChange && value) {
      onChange(
        produce(value, draft => {
          draft.splice(index, 1);
        }),
      );
    }
  };

  const addOptionRow = () => {
    if (onChange) {
      onChange(
        produce(value || [], draft => {
          draft.push({
            label: '',
            text: '',
            key: makeid(5),
          });
        }),
      );
    }
  };

  const _value = useMemo(
    () =>
      value?.map(item => {
        if (item.key) return item;
        return {
          ...item,
          key: makeid(5),
        };
      }) || [],
    [value],
  );

  return (
    <>
      <Table
        dataSource={_value}
        pagination={false}
        size="small"
        columns={[
          {
            title: 'No',
            key: 'key',
            dataIndex: 'key',
            align: 'center',
            width: 50,
            render: (_, option, index) => {
              return <div key={index}>{index + 1}</div>;
            },
          },
          // {
          //   title: '고시정보',
          //   key: 'label',
          //   dataIndex: 'label',
          //   align: 'center',
          //   width: 200,
          //   render: (label, option, index) => {
          //     return (
          //       <Input
          //         key={index}
          //         name="label"
          //         value={label}
          //         onChange={e => handleChangeLabel(index, e)}
          //       />
          //     );
          //   },
          // },
          {
            title: '내용',
            key: 'text',
            dataIndex: 'text',
            align: 'center',
            render: (text, option, index) => {
              return (
                <TextArea
                  name="text"
                  value={text}
                  onChange={v => handleChangeDetail(index, v)}
                  maxLength={500}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  style={{ resize: 'none', minHeight: '25px !important', maxHeight: '50px !important' }}
                />
              );
            },
          },
          {
            title: '',
            key: 'action',
            dataIndex: 'action',
            align: 'center',
            width: 80,
            render: (_, option, index) => {
              return (
                <Button
                  className="btn-28 btn-danger"
                  type="primary"
                  danger
                  onClick={() => removeOptionRow(index)}
                >
                  삭제
                </Button>
              );
            },
          },
        ]}
      />
      <div
        style={{
          marginBottom: '3rem',
          textAlign: 'center',
          background: '#f1f1f1',
          fontSize: '1.2rem',
          padding: '2px 0',
          cursor: 'pointer',
        }}
        onClick={addOptionRow}
      >
        {/* <PlusCircleOutlined /> */}
        추가
      </div>
    </>
  );
};

export default React.memo(NoticeEtcTable);
