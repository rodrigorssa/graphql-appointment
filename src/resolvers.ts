import { appointmentModel, userModel } from './models';

export default {
  Query: {
    getAppointments(_, args) {
      return appointmentModel.find(args);
    },
    getUsers(_, args) {
      return userModel.find(args);
    },
  },
  Mutation: {
    createAppointment(_, content) {
      return appointmentModel.create(content.appointment);
    },
    createUser(_, content) {
      return userModel.create(content.user);
    },
    editAppointment(_, { id, content }) {
      return appointmentModel.updateOne({
        _id: id,
      },
      content);
    },
    deleteAppointment(_, { id }) {
      return appointmentModel.deleteOne({
        _id: id,
      });
    },
  },
};
