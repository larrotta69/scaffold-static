const gulp = require("gulp");
const pug = require("gulp-pug");
const fs = require("fs");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

const files = ["data"];

function compilePug() {
  const data = files.reduce((acc, item) => {
    return {
      ...acc,
      [item]: JSON.parse(
        fs.readFileSync("./source/data/" + item + ".json", "utf8")
      ),
    };
  }, {});

  return gulp
    .src("./source/pug/**/!(_)*.pug")
    .pipe(
      pug({
        pretty: true,
        data,
      })
    )
    .pipe(gulp.dest("./build"));
}

function compileStyles() {
  return gulp
    .src("./source/sass/**/!(_)*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/css"));
}

function compileJs() {
  return gulp
    .src("./source/js/main.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
}

function watchPug() {
  gulp.watch(
    ["source/pug/**/*.pug", "./data/.json"],
    { ignoreInitial: false },
    compilePug
  );
}

function watchStyles() {
  gulp.watch(
    ["source/sass/**/*.scss"],
    { ignoreInitial: false },
    compileStyles
  );
}

function watchJs() {
  gulp.watch(["source/js/main.js"], { ignoreInitial: false }, compileJs);
}

exports.compilePug = compilePug;
exports.watchPug = watchPug;
exports.compileStyles = compileStyles;
exports.watchStyles = watchStyles;
exports.watchJs = watchJs;
