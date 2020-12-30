export const defaultUserTest = (item) => {
  expect(item).toBeInstanceOf(Object);
  expect(item).toHaveProperty('_id');
  expect(item).toHaveProperty('email');
  expect(item).toHaveProperty('name');
  expect(typeof item['_id']).toBe('string'); // eslint-disable-line dot-notation
  expect(typeof item.email).toBe('string');
  expect(typeof item.name).toBe('string');
};

export default defaultUserTest;
