
var movies = [
	{
		id: 1,
		title:'Harry Potter',
		desc:'Film o czarodzieju',
		poster:'henryk.jfif'
	},
	{
		id: 2,
		title:'Król lew',
		desc:'Film o lwie',
		poster:'krol.jpg'
	},
	{
		id: 3,
		title:'W pustyni i w puszczy',
		desc:'Film o lwie i innych takich',
		poster:'pustynia.jfif'
	}
]

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.poster})
		);
});

var element = 
React.createElement('div', {}, 
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));
