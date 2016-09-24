var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st');

// Собираем Stylus
gulp.task('stylus', function() {
    gulp.src('./styl/*.styl')
        .pipe(stylus()) // собираем stylus
    .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    // .pipe(myth()) // добавляем префиксы - http://www.myth.io/
    .pipe(gulp.dest('./public/css/')) // записываем css
    .pipe(livereload()); // даем команду на перезагрузку css
});

gulp.task('html', function() {
  gulp.src('./public/*.html')
    .pipe(livereload());
});

gulp.task('default', ['server'], function() {
  livereload.listen({ basePath: 'public' });
  gulp.watch('./styl/*.styl', ['stylus']);
  gulp.watch('./public/*.html', ['html']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname + '/public', index: 'index.html', cache: false })
  ).listen(3000, done);
});
