import gulp, { series } from "gulp";
import babel from "gulp-babel";
import terser from "gulp-terser";
import concat from "gulp-concat";
import pug from "gulp-pug";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import plumber from "gulp-plumber";
import { init as server, stream, reload } from "browser-sync";
require('dotenv').config()


gulp.task("babel", () => {
    return gulp
        .src("./dev/js/*.js")
        .pipe(plumber())
        .pipe(concat("scripts-min.js"))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(terser())
        .pipe(gulp.dest("./public/js"));
});

gulp.task("pug", () => {
    return gulp
        .src("./dev/views/pages/*.pug")
        .pipe(plumber())
        .pipe(
            pug({
                pretty: process.env.NODE_ENV === 'production' ? false : true,
            })
        )
        .pipe(gulp.dest("./public"));
});

gulp.task("sass", () => {
    return gulp
        .src("./dev/scss/styles.scss")
        .pipe(plumber())
        .pipe(concat("styles-min.css"))
        .pipe(
            sass({
                outputStyle: process.env.NODE_ENV === 'production' ? "compressed" : "default",
            })
        )
        .pipe(gulp.dest("./public/css"))
        .pipe(stream());
});

gulp.task("css", () => {
    return gulp
        .src("./public/css/*.css")
        .pipe(plumber())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest("./public/css"))
        .pipe(stream());
});

gulp.task("default", () => {
    server({
        server: "./public",
    });
    gulp.watch("./dev/views/**/*.pug", gulp.series("pug")).on("change", reload);
    gulp.watch("./dev/js/*.js", gulp.series("babel")).on("change", reload);
    gulp.watch("./dev/scss/**/*.scss", gulp.series("sass", "css"));
});