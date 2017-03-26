// Transforms { myKey: 'myValue' } to [{ key: 'myKey', value: 'myValue'}]

export default (fields) => (
  Object.keys(fields).map(
    fieldName => ({ key: fieldName, value: fields[fieldName] })
  )
);
