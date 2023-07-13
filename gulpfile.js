'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    terser = require('gulp-terser'),
    rigger = require('gulp-rigger'),
    //rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

const path = {
    build:{
        html:'build/',
        js:'build/js/',
        scss:'build/css/',
        img:'build/img/'
    },
    src:{
        html: 'src/*.{html,htm}',
        js:'src/js/**/*.js',
        scss:'src/scss/style.scss',
        img:'src/img/**/*.{png,jpg,gif,webp,svg}'
    },
    watch:{
        html: 'src/*.{html,htm}',
        js:'src/js/**/*.js',
        scss:'src/scss/style.scss',
        img:'src/img/**/*.{png,jpg,gif,webp,svg}'
    },
    clean:'build/'
};

const config = {
    server: {
        baseDir: "./build", // base directory
        index: "index.html", // start page
        contacts: "contacts.html", // contacts page
        interpreting: "interpreting.html", // interpreting page
        personaldocs: "personal-docs.html", // personal docs page
        otherservices: "other-services.html", // other services page
        translation: "translation.html", // translation page
        about: "about.html", // about us page
    },
    tunnel: true, // tunnel
    host: 'localhost',
    port: 7787,
    logPrefix: "WebDev"
};

// gulp.task('clean', function (done) {
//     rimraf(path.clean, done);
// });

gulp.task('build:html', function (done){
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream:true}));
    done();
});

gulp.task('mv:img', function (done){
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream:true}));
    done();
});

gulp.task('build:js', function (done){
    gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(terser())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream:true}));
    done();
});

gulp.task('build:scss', function (done){
    gulp.src(path.src.scss)
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.build.scss))
        .pipe(reload({stream:true}));
    done();
});

gulp.task('dev:scss', function (done){
    gulp.src(path.src.scss, {sourcemaps:true})
        .pipe(plumber())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.build.scss, {sourcemaps:'.'}))
        .pipe(reload({stream:true}));
    done();
});

gulp.task('watch', function (done){
    gulp.watch(path.watch.html, gulp.series('build:html'));
    gulp.watch(path.watch.scss, gulp.series('build:scss'));
    gulp.watch(path.watch.img, gulp.series('mv:img'));
    done();
});

gulp.task('webserver',function (done){
    browserSync.init(config);
    done();
})

gulp.task('build', gulp.parallel('build:html','build:js','build:scss','mv:img'));
gulp.task('dev', gulp.parallel('build:html','build:js','dev:scss','mv:img'));
gulp.task('default', gulp.series('build','watch','webserver'));