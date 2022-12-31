// base
import React from 'react';

// style
import { StyledProjectCard } from './style';

// components
import { BlurImage } from 'components/Images';
import { useRouter } from 'next/router';
import { ROUTE_TOY_PROJECT_DETAIL_WITH_ID } from 'consts/route';

interface ProjectCardProps {
  data?: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const { id, eventName, korName, desc, thumbnail, period } = data;

  const router = useRouter();

  const onClick = () => {
    router.replace(ROUTE_TOY_PROJECT_DETAIL_WITH_ID(id));
  };

  return (
    <StyledProjectCard onClick={onClick}>
      <div className="card-wrapper">
        <div className="card-wrapper-top">
          <BlurImage src={thumbnail} alt={eventName} width={300} height={300} />
        </div>
        <div className="card-wrapper-body">
          <h2 className="line-one">{korName}</h2>
          <p className="line-two">{desc}</p>
        </div>
        <div className="card-wrapper-footer">
          <span>
            {period[0]} ~ {period[1]}
          </span>
        </div>
      </div>
    </StyledProjectCard>
  );
};
