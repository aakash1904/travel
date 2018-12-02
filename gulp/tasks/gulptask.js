var gulp = require("gulp"),
    browsersync = require("browser-sync").create(),
    watch = require("gulp-watch");





gulp.task("gulptask", function() {

    browsersync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });


    watch("./app/assets/styles/styles.css", function() {
        gulp.start("injectCss");
    })
    watch('./app/assets/styles/modules/**.css', function() {
        gulp.start('injectCss');
    });

    watch("./app/index.html", function() {
        browsersync.reload();
    });
});


gulp.task("injectCss", ["styles"], function() {
    return gulp.src("./app/temp/styles/styles.css")
        .pipe(browsersync.stream());
})