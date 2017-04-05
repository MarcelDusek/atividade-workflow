var gulp = require("gulp");
var gulpsass = require("gulp-sass");
var gulphtml = require("gulp-htmlmin");

gulp.task('mini_scss',function(){
	return gulp
			.src('./source/scss/*.scss')
			.pipe(gulpsass())
			.pipe(gulp.dest('./dist/css'));
});

gulp.task('mini_html',function(){
	return gulp
			.src('./source/index.html')
			.pipe(gulphtml())
			.pipe(gulp.dest('./dist'));
})

gulp.task('atualiza', function(){
	gulp.watch('./source/scss/*.scss',['mini_scss']);	
	gulp.watch('./source/index.html',['mini_html']);
})
