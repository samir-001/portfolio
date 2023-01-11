var { src ,watch,dest ,series} = require("gulp");
var gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'))
var concat = require("gulp-concat")
var liveReload = require("gulp-livereload");
const gulpLoadPlugins = require("gulp-load-plugins");


  function sassTask(cb) {
  src("./src/sass/main.scss")
  .pipe(sass()).on('error', function(e){
    console.log(e);
 })
  .pipe(concat("style.css"))
  .pipe(dest("./src/dist/"))
  .pipe(liveReload())

  cb()
  }
  function watchsass(cb) {
    require("./server.js")
    liveReload.listen()
    watch("./src/sass/**/*.scss",sassTask)
    cb()
    }

  gulp.task("sassTask",sassTask)

  exports.default = watchsass
