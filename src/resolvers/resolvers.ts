import { appointmentModel, userModel } from '../models';

export default {
  Query: {
    getAppointments(_, { appointment }) {
      return appointmentModel.find(appointment);
    },
    getUsers(_, args) {
      return userModel.find(args);
    },
  },
  Mutation: {
    createAppointment(_, { appointment }) {
      return appointmentModel.create(appointment);
    },
    createUser(_, { user }) {
      return userModel.create(user);
    },
    editAppointment(_, { id, appointment }) {
      return appointmentModel.findByIdAndUpdate({
        _id: id,
      },
      appointment,
      { new: true });
    },
    deleteAppointment(_, { id }) {
      return appointmentModel.findOneAndRemove({
        _id: id,
      });
    },
  },
};
