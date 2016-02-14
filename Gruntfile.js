module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        node: true,
        esversion: 6,
        globals: {
          d: true,
          l: true,
          logHeader: true
        }
      }
    },
    watch: {
      files: ['src/**/*'],
      tasks: ['jshint'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'watch']);
};