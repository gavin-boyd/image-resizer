var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var parallel = require('concurrent-transform');
var os = require('os');

//sudo image-batch-resizer convert -d 'uploads' -quality 10 -strip -s '800>' -prefix '' -dither none -depth 8 -remove-original-file 'yes'

// Compile LESS files from /less into /css
gulp.task('parallel', function() {
    return gulp.src('app/**/*.{jpg,png}')
        .pipe(parallel(
            imageResize({
                width: '1024>',
                quality: 0.8,
                noProfile: true,
                imageMagick: true,
                flatten: true,
                depth: 8
            }),
            os.cpus().length
        ))
        .pipe(gulp.dest("dist"));
});

// Run everything
gulp.task('default', ['parallel']);