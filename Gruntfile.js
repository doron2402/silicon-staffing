module.exports = function(grunt) {
  var port = 3009;
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      development: {
        port: port,
        base: ''
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/agency.css": "less/agency.less" // destination file and source file
        }
      }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['js/handleBarHelpers.js', 'js/agency.js','js/cbpAnimatedHeader.js', 'js/classie.js','js/contact_me.js', 'js/jqBootstrapValidation.js'],
        dest: 'js/output.js',
      }
    },
    uglify: {
      options: {

      },
      my_target: {
        files: {
         'js/output.min.js': ['js/output.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less','concat','uglify','server']);
  grunt.registerTask('build', ['less','concat','uglify']);
  grunt.registerTask('server', 'connect:development');
};