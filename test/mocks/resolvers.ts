export const mockUserResponse = [{
  _id: '5feb73f14ad67500179e1f76',
  email: 'teste@email.com',
  name: 'teste',
  __v: 0,
}];

export const mockAppointmentResponse = [{
  _id: '5feb74a04ad67500179e1f77',
  date: '2020-12-29',
  beginTime: '12:01:23',
  endTime: '18:01:23',
  userId: '5feb73f14ad67500179e1f76',
  __v: 0,
}];

export default {
  mockAppointmentResponse,
  mockUserResponse,
};
