//gulpfile.js 示例文件

//导入你所需要用的工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    sass = require('gulp-sass');						//sass的编译
    rename = require('gulp-rename');					//重命名
    cssnano = require('gulp-cssnano');					//压缩
	cache = require('gulp-cache');						//图片缓存，只有图片替换了才压缩
	concat = require('gulp-concat');					//合并js文件
	imagemin = require('gulp-imagemin');				//压缩图片
	
	
	gulp.task("are",function(){
		console.log("we are a hero!")
	})
//	//编写公共样式使用
//	gulp.task('common',function(){
//	  return gulp.src('src/sass/common.scss')				//获取该任务需要的文件
//	      .pipe( sass({style : "expanded"}) )			//该任务调用的模块
//	      .pipe( gulp.dest('css') )						//将在 src/css 文件夹中生产test.css
//	      .pipe(rename({"suffix" : ".min"}))			//调用重命名函数 suffix是在名字后面添加..  添加一个".min"
//	      .pipe(cssnano())								//压缩css文件
//	      .pipe(gulp.dest("css"))						//然后将处理完成后的插件放入css中
//	});
	//编写单个样式使用
	gulp.task('sass',function(){
	  return gulp.src('src/sass/index.scss')				//获取该任务需要的文件
	      .pipe( sass({style : "expanded"}) )			//该任务调用的模块
	      .pipe( gulp.dest('css') )						//将在 src/css 文件夹中生产test.css
	      .pipe(rename({"suffix" : ".min"}))			//调用重命名函数 suffix是在名字后面添加..  添加一个".min"
	      .pipe(cssnano())								//压缩css文件
	      .pipe(gulp.dest("css"))						//然后将处理完成后的插件放入css中
	});
	gulp.task('sass-login',function(){
	  return gulp.src('src/sass/login.scss')				//获取该任务需要的文件
	      .pipe( sass({style : "expanded"}) )			//该任务调用的模块
	      .pipe( gulp.dest('css') )						//将在 src/css 文件夹中生产test.css
	      .pipe(rename({"suffix" : ".min"}))			//调用重命名函数 suffix是在名字后面添加..  添加一个".min"
	      .pipe(cssnano())								//压缩css文件
	      .pipe(gulp.dest("css"))						//然后将处理完成后的插件放入css中
	});
	gulp.task('sass-register',function(){
	  return gulp.src('src/sass/register.scss')				//获取该任务需要的文件
	      .pipe( sass({style : "expanded"}) )			//该任务调用的模块
	      .pipe( gulp.dest('css') )						//将在 src/css 文件夹中生产test.css
	      .pipe(rename({"suffix" : ".min"}))			//调用重命名函数 suffix是在名字后面添加..  添加一个".min"
	      .pipe(cssnano())								//压缩css文件
	      .pipe(gulp.dest("css"))						//然后将处理完成后的插件放入css中
	});
	gulp.task('sass-goodxq',function(){
	  return gulp.src('src/sass/goodxq.scss')				//获取该任务需要的文件
	      .pipe( sass({style : "expanded"}) )			//该任务调用的模块
	      .pipe( gulp.dest('css') )						//将在 src/css 文件夹中生产test.css
	      .pipe(rename({"suffix" : ".min"}))			//调用重命名函数 suffix是在名字后面添加..  添加一个".min"
	      .pipe(cssnano())								//压缩css文件
	      .pipe(gulp.dest("css"))						//然后将处理完成后的插件放入css中
	});
	gulp.task('sass-goods',function(){
	  return gulp.src('src/sass/goods.scss')				//获取该任务需要的文件
	      .pipe( sass({style : "expanded"}) )			//该任务调用的模块
	      .pipe( gulp.dest('css') )						//将在 src/css 文件夹中生产test.css
	      .pipe(rename({"suffix" : ".min"}))			//调用重命名函数 suffix是在名字后面添加..  添加一个".min"
	      .pipe(cssnano())								//压缩css文件
	      .pipe(gulp.dest("css"))						//然后将处理完成后的插件放入css中
	});
	gulp.task('sass-cart',function(){
	  return gulp.src('src/sass/cart.scss')				//获取该任务需要的文件
	      .pipe( sass({style : "expanded"}) )			//该任务调用的模块
	      .pipe( gulp.dest('css') )						//将在 src/css 文件夹中生产test.css
	      .pipe(rename({"suffix" : ".min"}))			//调用重命名函数 suffix是在名字后面添加..  添加一个".min"
	      .pipe(cssnano())								//压缩css文件
	      .pipe(gulp.dest("css"))						//然后将处理完成后的插件放入css中
	});
	gulp.task('watch',function(){
		gulp.watch("src/sass/*.scss",["sass","sass-login","sass-register","sass-goods","sass-goodxq","sass-cart"])
	})