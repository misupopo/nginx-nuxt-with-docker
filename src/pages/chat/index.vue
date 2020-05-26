<template>
  <div>
    <textarea v-model="newMessage"></textarea>
    <br/>
    <button v-on:click="send">送信</button>
    <ul>
      <li v-for="message in messages" :key="message">
        {{message}}
      </li>
    </ul>
  </div>
</template>

<script>
import { w3cwebsocket } from 'websocket'
const W3CWebSocket = w3cwebsocket

export default {
  data: function() {
    return {
      socket: new W3CWebSocket('ws://localhost:3000/ws/chat'),
      newMessage: '',
      messages: []
    }
  },
  created: function() {
    const self = this
    self.socket.onmessage = function(e) {
      if (typeof e.data === 'string') {
        self.messages.push(e.data)
      }
    }
  },
  methods: {
    send: function() {
      this.socket.send(this.newMessage)
      this.newMessage = ''
    }
  }
}
</script>
