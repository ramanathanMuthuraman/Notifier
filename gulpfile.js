var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('autorefix', function () {
	return gulp.src('css/notifier.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
});
gulp.task("default",['autorefix']);