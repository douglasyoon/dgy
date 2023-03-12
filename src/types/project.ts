export interface IProject {
  id: string;
  title: string;
  img: string;
  date: string;
  desc: string;
  skills: string;
  whatido: string;
  github: string;
}

export type IProjectList = IProject[];
