var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		foto: 'https://reelmovieposters.com.au/wp-content/uploads/2017/11/Stone1-copy.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		foto: 'https://reelmovieposters.com.au/wp-content/uploads/2016/11/DSC_1090-copy.jpg'
	},
	{
		id: 3,
		title: 'Desperado',
		desc: 'Film o mariachi',
		foto: 'https://reelmovieposters.com.au/wp-content/uploads/2016/06/IMG_2394-copy.jpg'
	},
	{
		id: 4,
		title: 'Maska Zorro',
		desc: 'Film o Zorro',
		foto: 'https://reelmovieposters.com.au/wp-content/uploads/2017/10/DSC_0879-copy.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.foto})
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));
