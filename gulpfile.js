var gulp = require("gulp");
var uglify = require("gulp-uglify");
var watch = require("gulp-watch");

gulp.task('mini_scss',function(){
	return gulp
			.src('./source/scss/*.scss')
			.pipe(uglify())
			.pipe(gulp.dest('./dist/css'));
});

gulp.task('mini_html',function(){
	return gulp
			.src('./source/index.html')
			.pipe(uglify())
			.pipe(gulp.dest('./dist'));
})

gulp.task('atualiza', function(){
	gulp.watch('./source/scss/*.scss',['mini_scss']);	
	gulp.watch('./source/index.html',['mini_html']);
})
