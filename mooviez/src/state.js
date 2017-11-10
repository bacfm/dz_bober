const initialState = {

	"movies": [
					{ "id": 0, "img": "/img/video-play.png", "url": "youtube.com", "name": "Title1", "description": "Description1", "date": "10.10.17", "likes": 1, "comments": 1 },
					{ "id": 1, "img": "/img/video-play.png", "url": "ya.ru", "name": "Title2", "description": "Description2", "date": "11.10.17", "likes": 2, "comments": 2 },
						],

	"comments": [
					{ "id": 0, "movieID": 0, "user": "alex", "comment": "Comment1", "date": "02.02.17", "published": true },
					{ "id": 1, "movieID": 0, "user": "mirosh", "comment": "Comment2", "date": "02.02.17", "published": false },
					{ "id": 2, "movieID": 1, "user": "alex", "comment": "Comment3", "date": "03.02.17", "published": true },
					{ "id": 3, "movieID": 1, "user": "mirosh", "comment": "Comment4", "date": "04.02.17", "published": true },
						],

	"likes": [
					{ "id": 0, "movieID": 0, "user": "alex" },
					{ "id": 1, "movieID": 1, "user": "alex" },
					{ "id": 2, "movieID": 1, "user": "mirosh" },
						],

	"users": [
					{ "id": 0, "login": "alex", "pwd": "mirosh", "registered": "01.01.16", "isAdmin": true },
					{ "id": 1, "login": "mirosh", "pwd": "alex", "registered": "02.01.16", "isAdmin": false }
				],

	"user": { "name": "", "isAdmin": false },

	"filter": [],

	"login": [
					{ "login": "mirosh", "movies": 1},
					{ "login": "alex", "movies": 2}
				]

}

export default initialState;