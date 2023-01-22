export default class State {
  constructor() {
    this.states = {};
    this.currentState = null;
  }

  addState(stateName, state) {
    this.states[stateName] = state;
  }

  setState(stateName) {
    if (this.currentState) {
      this.currentState.onExit();
    }
    this.currentState = this.states[stateName];
    // this.currentState.onEnter();
  }

  update() {
    return this.currentState;
  }

  render() {
    // todo
  }
}
