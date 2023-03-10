module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
    
    });
    
    grunt.registerTask('olaGrunt', function() {
        return console.log('olá grunt');
    })
};