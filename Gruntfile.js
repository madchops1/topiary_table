'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    project: {
      app: ['./'],
      //assets: ['<%= project.app %>/assets'],
      css: ['<%= project.app %>/css/tables.scss'],
      hcss: ['<%= project.app %>/css/header.scss'],
      lcss: ['<%= project.app %>/css/layout.scss'],
      bootstrap: ['<%= project.app %>/css/bootstrap.scss']//,
      //mixins: ['<%= project.app %>/css/mixins.scss']
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
          '<%= project.app %>/css/bootstrap.css':'<%= project.bootstrap %>',
          //'<%= project.app %>/.tmp/tables.css':'<%= project.css %>',
          //'<%= project.app %>/.tmp/header.css':'<%= project.hcss %>',
          '<%= project.app %>/.tmp/layout.css':'<%= project.lcss %>'
        }
      }
    },

    autoprefixer: {
      dist: {
        files : {
          //'<%= project.app %>/css/tables.css': '<%= project.app %>/.tmp/tables.css',
          //'<%= project.app %>/css/header.css': '<%= project.app %>/.tmp/header.css',
          '<%= project.app %>/css/layout.css': '<%= project.app %>/.tmp/layout.css'
        }
      }
    },

    watch: {
      sass: {
        files: [
          '<%= project.app %>/css/{,*/}*.{scss,sass}',
          '<%= project.app %>/css/*.scss'
          ],
        tasks: ['sass:dev','autoprefixer']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            //'./css/*.scss',
            //'./css/tables.css',
            //'./css/header.css',
            './css/layout.css',
            './*.html',
            './js/*.js',
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
          //,
          //rewriteRules: [
          //  {
          //    match: /(cats|kitten[sz]) are mediocre/g,
          //    replace: "$1 are excellent"
          //    //match: /(.*)/g,
          //    //replace: "test"
          //  }
          //]
          //proxy: "local.sfoutsitelands.com:8888"
        }
      }
    },
    copy: {
      dist: {
        files: [
          // flattens results to a single level
          {expand: true, src: ['./index.html', ], dest: 'dist/', filter: 'isFile'},

          // css
          //{expand: true, src: ['./css/tables.css'], dest: 'dist/', filter: 'isFile'},
          //{expand: true, src: ['./css/header.css'], dest: 'dist/', filter: 'isFile'},
          {expand: true, src: ['./css/layout.css'], dest: 'dist/', filter: 'isFile'},
          {expand: true, src: ['./css/bootstrap.css'], dest: 'dist/', filter: 'isFile'},

          // scripts
          {expand: true, src: ['./js/scripts.js'], dest: 'dist/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['./bower_components/jquery/dist/jquery.min.js'], dest: 'dist/bower_components/jquery/dist/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'], dest: 'dist/bower_components/bootstrap-sass/assets/javascripts/', filter: 'isFile'},

          // bootstrap icons
          //glyphicons-halflings-regular.woff Failed to load resource: net::ERR_FILE_NOT_FOUND
          {expand: true, flatten: true, src: ['./bower_components/bootstrap-sass/assets/fonts/bootstrap/*'], dest: 'dist/bower_components/bootstrap-sass/assets/fonts/bootstrap/', filter: 'isFile'},

          // images
          {expand: true, src: ['./images/*'], dest: 'dist/', filter: 'isFile'},

        ],
      },
    }//,

    //sitemap: {
    //  dist: {
    //    pattern: ['**/*.html', '!**/google*.html'], // this will exclude 'google*.html'
    //    siteRoot: './',
    //    homepage: 'http://www.sfoutsitelands.com'
    //  }
    //}
  });

  // Load
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-sitemap');

  /// Register
  grunt.registerTask('default', ['sass','autoprefixer','browserSync','watch']);
  //grunt.registerTask('sitemap', ['sitemap']);

  //grunt.registerTask('default', [
  //  'sass','autoprefixer','browserSync','watch'
  //]);

};
