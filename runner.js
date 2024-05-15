const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1Zjk0NzJhLThjZGItNDNhMy1hYmNmLTEwNGJlNzhlMWI1My0xNzE1NzkyMjkzNDIzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNzBhY2ExMTMtMDc5OC00NDk2LTk2NjctMjdhZDU2ZTIzNzU5IiwidHlwZSI6InQifQ.VpXNPNF7P0abbfAUF4Q2TQAwt1C-dXQEeuppjj-30Jc'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
