export const defaultAppointmentTest = (item) => {
  expect(item).toBeInstanceOf(Object);
  expect(item).toHaveProperty('_id');
  expect(item).toHaveProperty('date');
  expect(item).toHaveProperty('beginTime');
  expect(item).toHaveProperty('endTime');
  expect(item).toHaveProperty('userId');
  expect(typeof item['_id']).toBe('string'); // eslint-disable-line dot-notation
  expect(typeof item.date).toBe('string');
  expect(typeof item.beginTime).toBe('string');
  expect(typeof item.endTime).toBe('string');
  expect(typeof item.userId).toBe('string');
};

export default defaultAppointmentTest;
