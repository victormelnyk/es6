module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: ['src/**/*', 'index.html'],
      tasks: [],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
