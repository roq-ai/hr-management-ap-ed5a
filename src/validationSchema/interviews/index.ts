import * as yup from 'yup';

export const interviewsValidationSchema = yup.object().shape({
  date: yup.date().nullable(),
  interviewer_id: yup.number().integer().required(),
});
