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

interface CompatibilityProps {
  name: string;
  isUse: boolean;
}

interface ReferenceSiteProps {
  title: string;
  url: string;
}
export interface CreateReference {
  accessibility: string[] | string;
  compatibility: CompatibilityProps[] | string;
  definition: string[] | string;
  description: string;
  element: string;
  reference: ReferenceSiteProps[] | string;
  summary: string;
  tag: string;
  title: string;
  type: 'html' | 'css' | 'javascript';
  use: number | string;
  thumbmnaile: string;
}
export interface ResponseReferenceProps {
  accessibility: string;
  compatibility: string;
  definition: string;
  description: string;
  element: string;
  reference: string;
  summary: string;
  tag: string;
  title: string;
  type: 'html' | 'css' | 'javascript';
  use: string;
  thumbmnaile: string;
}
