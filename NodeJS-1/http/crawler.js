let http = require('http');
let cheerio = require('cheerio');
let url = 'http://www.imooc.com/learn/348';

// 获取数据
function filterChapters(html) {
	let $ = cheerio.load(html);
	// 获取当课程章节列表
	let chapters = $('.chapter');
	
	let courseData = [];
	
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
		
		courseData.push(chapterData);
	});
	
	return courseData
}

// 处理数据
function printCourseInfo(courseData) {
	courseData.forEach(function (item) {
		let chapterTitle = item.chapterTiter;
		
		console.log(chapterTitle + '\n');
		
		item.videos.forEach(function (item) {
			console.log('	【' + item.id + '】	' + item.title + '\n');
		})
	})
}

http.get(url, function (res) {
	let html = '';
	
	// 当传递数据时，触发
	res.on('data', function (data) {
		html += data;
	});
	
	// 数据传输结束时，触发
	res.on('end', function () {
		let courseData = filterChapters(html);
		
		printCourseInfo(courseData);
	});
}).on('error', function () {
	console.log('获取课程出错');
});