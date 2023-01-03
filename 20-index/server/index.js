const express = require('express');
const { readFileSync } = require('fs');
const { resolve } = require('path');

const app = express();

// 配置CORS允许跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-methods', 'POST,GET');
  // 允许往下执行
  next()
})

app.get('/', (req, res) => {
  res.send('hello express');
})

app.get('/getTeachers', (req, res) => {
  const teacherData = JSON.parse(readFileSync(resolve(__dirname, './data/teachers.json'), 'utf-8'));
  res.send(teacherData);
});

app.get('/getStudents', (req, res) => {
  const studentsData = JSON.parse(readFileSync(resolve(__dirname, './data/students.json'), 'utf-8'));
  res.send(studentsData);
})



app.listen(8080, () => {
  console.log('welcome to use express.')
})