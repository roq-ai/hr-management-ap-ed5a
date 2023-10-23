import { GetQueryInterface } from 'interfaces';

export interface InterviewsInterface {
  id?: string;
  date?: any;
  interviewer_id: number;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface InterviewsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
