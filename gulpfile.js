var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
    //gulp.watch('ts/**/*.ts', ['scripts']);
    //gulp.watch('test/**/*.ts', ['scripts']);

    var tsResult = tsProject.src()
                       .pipe(ts({
                           declarationFiles: true,
                           noExternalResolve: true
                       }));

    tsResult.js.pipe(gulp.dest('js'));
});
