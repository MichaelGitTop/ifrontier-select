// 获取 gulp
var gulp = require('gulp')

// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1\. 找到文件
    gulp.src('js/*.js')
    // 2\. 压缩文件
        .pipe(uglify())
    // 改文件名称
        .pipe(rename({suffix: '.min'}))
    // 3\. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})

gulp.task('default', ['script']);