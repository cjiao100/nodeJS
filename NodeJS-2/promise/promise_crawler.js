let http = require('http');
let Promise = require('bluebird');
let cheerio = require('cheerio');
let baseUrl = 'http://www.imooc.com/learn/';
let videoIds = [348, 259, 197, 134, 75];

// 获取数据
function filterChapters(html) {
	let $ = cheerio.load(html);
	// 获取当课程章节列表
	let chapters = $('.chapter');
	let title = $('.hd').find('h2').text();
	let number = parseInt($('.js-learn-num').text(), 10);
	let courseData = {
		videos: [],
		number: number,
		title: title
	};
	
	console.log(courseData);
	
	chapters.each(function (item) {
		let chapter = $(this);
		let chapterTiter = chapter.find('h3').text().trim();
		let videos = chapter.find('.video').children('li');
		let chapterData = {
			chapterTiter: chapterTiter,
			videos: []
		};
		
		videos.each(function (item) {
			let video = $(this).find('.J-media-item');
			let videoTitle = video.text().trim();
			let id = $(this).data('media-id');
			
			chapterData.videos.push({
				title: videoTitle,
				id: id
			});
		});
		
		courseData.videos.push(chapterData);
	});
	
	return courseData
}

// 处理数据
function printCourseInfo(coursesData) {
	coursesData.forEach(function (courseData) {
		console.log(courseData.number + '人学过' + courseData.title + '\n');
	});
	coursesData.forEach(function (courseData) {
		console.log('###' + courseData.title + '\n');
		courseData.videos.forEach(function (item) {
			console.log('###' + courseData.title + '\n');
			let chapterTitle = item.chapterTiter;
			
			console.log(chapterTitle + '\n');
			
			item.videos.forEach(function (item) {
				console.log('	【' + item.id + '】	' + item.title + '\n');
			})
		});
	});
}

function getPageAsync(url) {
	return new Promise(function (resolve, reject) {
		console.log('这在爬' + url);
	
		http.get(url, function (res) {
			let html = '';
			
			// 当传递数据时，触发
			res.on('data', function (data) {
				html += data;
			});
			
			// 数据传输结束时，触发
			res.on('end', function () {
				resolve(html);
				
			});
		}).on('error', function (e) {
			reject(e);
			console.log('获取课程出错');
		});
	});
}

let fetchCourseArray = [];
videoIds.forEach(function (id) {
	fetchCourseArray.push(getPageAsync(baseUrl + id));
});

Promise.all(fetchCourseArray).then(function (pages) {
	let coursesData = [];
	pages.forEach(function (html) {
		// console.log(html);
		let courses = filterChapters(html);
		coursesData.push(courses);
	});
	
	coursesData.sort(function (a, b) {
		return a.number < b.number;
	});
	
	
	printCourseInfo(coursesData);
});