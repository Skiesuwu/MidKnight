export default class Net {
  constructor() {
    this.socket = new WebSocket('ws://localhost:5500');
    this.socket.onopen = this.OnOpen.bind(this);
    this.socket.onmessage = this.OnMessage.bind(this);
    this.socket.onclose = this.OnClose.bind(this);
    this.callbacks = {};
  }

  OnOpen(event) {
    console.log('Connected to Server');
  }

  OnMessage(event) {
    let data = JSON.parse(event.data);
    let callback = this.callbacks[data.type];
    if (callback) callback(data.payload);
  }

  OnClose(event) {
    console.log('Disconnected to Server');
  }

  send(type, payload) {
    let message = {
      type,
      payload,
    };
    this.socket.send(JSON.stringify(message));
  }

  on(type, callback) {
    this.callbacks[type] = callback;
  }
}
