// base
import React from 'react';
import { useRouter } from 'next/router';

// style
import { StyledAlgorithmDetails } from './style';

// const
import { algorithmInfo } from 'consts';

// components
import { AlgorithmQuestion1 } from './AlgorithmQuestions';

export interface AlgorithmQuestionProps {
  questionList: any;
  edit?: boolean;
}

interface AlgorithmDetailsProps {}

export const AlgorithmDetails: React.FC<AlgorithmDetailsProps> = ({}) => {
  const router = useRouter();
  const { key } = router.query;

  const algorithmList = algorithmInfo.filter((x) => x.key === key)[0].data;

  const questionNumber = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10'
  ] as string[];

  return (
    <StyledAlgorithmDetails>
      {questionNumber.map((number, idx) => (
        <React.Fragment key={number + idx}>
          {key === number && (
            <AlgorithmQuestion1 questionList={algorithmList} />
          )}
        </React.Fragment>
      ))}
    </StyledAlgorithmDetails>
  );
};
