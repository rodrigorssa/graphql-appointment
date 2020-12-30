import resolvers from '../../src/resolvers';
import { appointmentModel, userModel } from '../../src/models';
import { mockUserResponse, mockAppointmentResponse } from '../mocks/resolvers';
import { defaultAppointmentTest, defaultUserTest } from '../expect';

beforeAll(() => {
  userModel.find = jest.fn(() => mockUserResponse);
  appointmentModel.find = jest.fn(() => mockAppointmentResponse);
  userModel.create = jest.fn(() => mockUserResponse[0]);
  appointmentModel.create = jest.fn(() => mockAppointmentResponse[0]);
});

describe('RESOLVERS - QUERY', () => {
  describe(' USER', () => {
    test('it should return an array of users', async () => {
      const query = await resolvers.Query.getUsers();
      expect(Array.isArray(query)).toBe(true);
      query.forEach((item) => {
        defaultUserTest(item);
      });
    });
  });

  describe('APPOINTMENTS', () => {
    test('it should return an array of appointments', async () => {
      const query = await resolvers.Query.getAppointments(null, {});
      expect(Array.isArray(query)).toBe(true);
      query.forEach((item) => {
        defaultAppointmentTest(item);
      });
    });
  });
});

describe('RESOLVERS - MUTATIONS', () => {
  describe(' USER', () => {
    test('it should return an user object', async () => {
      const query = await resolvers.Mutation.createUser(undefined, {
        user: {},
      });
      defaultUserTest(query);
    });
  });

  describe('APPOINTMENTS', () => {
    test('it should return an appointment object', async () => {
      const query = await resolvers.Mutation.createAppointment(undefined, {
        appointment: {},
      });
      defaultAppointmentTest(query);
    });
  });
});
