export default {
  addRequests(state, payload) {
    state.requests.push(payload);
  },
  setRequest(state, payload) {
    state.requests = payload;
  },
};
