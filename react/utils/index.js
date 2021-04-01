export function mapObject(object = {}, callback = (value) => value) {
  return Object.keys(object)
    .reduce((accumulator, name) => {
      accumulator[name] = callback(object[name], name);
      return accumulator;
    }, {});
}

export function createSelectors(getters, slice) {
  if (slice) {
    return mapObject(
      getters,
      (fn) => (state, ...args) => fn(state[slice], ...args),
    );
  }
  return getters;
}
