const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/');

socket.on('connect', () => {
  console.log('Saqs');
  console.log('socket : ' + socket.id);
  socket.on('message', data => {
    console.log(data);
  });
});

async function login(mail, pass) {
  await socket.emit('req@login', mail, pass);
  await socket.on('res@login', res => {
    console.log(res);
  });
};

async function register(mail, pass) {
  await socket.emit('req@register', mail, pass);
  await socket.on('res@register', res => {

  });
};

async function addFriend(id) {
  await socket.emit('req@addFriend', id);
  await socket.on('res@addFriend', res => {

  });
};

async function getFriend() {
  await socket.emit('req@friend');
  await socket.on('res@friend', res => {
    console.log(res);
  });
};

async function searchUser(args) {
  await socket.emit('req@searchUser', args);
  await socket.on('res@searchUser', res => {

  });
};

export {
  login,
  register,
  addFriend,
  searchUser
};