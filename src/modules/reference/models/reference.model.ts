export interface ReferStateProps {
  id: number;
  definition: string[];
  desc1: string;
  desc2: string;
  element: string;
  image: string;
  link: string;
  tag: string;
  title: string;
  useStars: string;
  version: string;
  view: string;
  use?: string;
}

export interface ReferDatas {
  type: string;
  htmlRefer?: ReferStateProps[];
  cssRefer?: ReferStateProps[];
  javascriptRefer?: ReferStateProps[];
}

export interface ReferenceProps {
  data: ReferDatas;
}
