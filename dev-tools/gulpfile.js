// GET STARTED
// 1. Install Gulp4 in "dev-tools"
// Press in cmd: npm install --save-dev gulp
// 2. For started works press in cmd "gulp" anc Ctrl+C for Stopping
// ========================================================================

var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var pug = require('gulp-pug');

function sass_css(done) {
	gulp.src('../HTML/sass/main.scss')
		.pipe(sass())
		.pipe( gulp.dest('../HTML/css/') )
		.pipe(sourcemaps.init())
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe (autoprefixer ({
			cascade: false
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(rename({suffix: '.min'}))
		.pipe( gulp.dest('../HTML/css/') );
	done();
}

function watchSass() {
	gulp.watch("../HTML/sass/main.scss", sass_css);
}


gulp.task('default', watchSass);




	
// function pug_html(done) {
// 	gulp.task('pug', function(){
// 		return gulp.src('../HTML/pug/*.pug',)
// 			.pipe(pug({
// 				// Your options in here.
// 			}))
// 			.pipe(gulp.dest('../HTML/'))
// 			.pipe(browserSync.reload({stream: true}))
// 	});
// }

// function watchPug() {
// 	gulp.watch("../HTML/pug/*.pug", pug_html);
// }


// gulp.task('pug-compile', function buildHTML() {
//     return gulp.src('../HTML/pug/*.pug')
//         .pipe(pug({
//             pretty: true
//         }))
//         .pipe(rename('../HTML/index.html'))
//         .pipe(gulp.dest('../'))
// });


