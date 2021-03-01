
export interface Employee {
  id: number;
  username: string;
  phone: number;
  role: string;
  name: string;
}

export interface Post {
  date: string;
  text: string;
}

export interface PostToView {
  date: string;
  segments: PostSegment[];
  editing?: boolean;
}

export interface PostSegment {
  text: string;
  employee?: Employee;
}
