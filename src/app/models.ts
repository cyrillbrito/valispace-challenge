
export interface Employee {
  id: number;
  username: string;
  phone: number;
  role: string;
  name: string;
}

export interface Post {
  id: number;
  date: string;
  text: string;
}

export interface PostSegment {
  text: string;
  employee?: Employee;
}
