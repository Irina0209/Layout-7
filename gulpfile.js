var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

gulp.task('build', function(){
   gulp.src('./build/precss/*.css')
       .pipe(minify())
       .pipe(autoprefixer({
			browsers: ['> 0.01%'],
			cascade: false
		}))
       .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function(){
    gulp.watch('./build/precss/*.css', ['build']);
});