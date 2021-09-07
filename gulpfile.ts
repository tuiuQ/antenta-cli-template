import { task, src, dest, series } from 'gulp';
import del from 'del';
import gts from 'gulp-typescript';
import watch from 'gulp-watch';

const outputDir = 'lib';

task('clean', function () {
  return del(outputDir);
})


task('script', function () {
  return src('./src/**/*.ts', { base: 'src' })
    .pipe(gts.createProject('tsconfig.json')())
    .pipe(dest(outputDir))
})

task('watch', function () {
  watch('./src/**/*.ts', series( 'script'))
})

task('dev', series('clean', 'watch'))

task('build', series('clean', 'script'))
