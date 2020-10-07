promise.then(result => console.log(result));

promise
  .then(result => result + '!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('Error!'))
  .then(result3 => {
  	console.log(result3 + '!')
  })

const promise = new Promise((resolve, reject) => {
	if(true){
		resolve('Stuff Worked');
	} else {
		reject('Error, it broke');
	}
})
promise2 = new Promise((resolve, reject) => {
  	setTimeout(resolve, 100, 'Hi')
  })

promise3 = new Promise((resolve, reject) => {
  	setTimeout(resolve, 1000, 'Pookie')
  })

promise4 = new Promise((resolve, reject) => {
  	setTimeout(resolve, 5000, 'Spoookie')
  })

Promise.all([promise, promise2, promise3, promise4])
	.then(values => {
		console.log(values)
})


// Promise real life example
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
	return fetch(url)
	.then(resp => resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
	}).catch(() => console.log('error'))