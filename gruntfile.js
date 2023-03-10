module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css':'src/styles/main.less'
                }
            }
        },
        watch: {
            css: {
                files: 'src/styles/**/*.less',
                tasks: ['less:development']
            }
        }
    
    });
    grunt.registerTask('watch', function() {

    })
    // grunt.registerTask('olaGrunt', function() {
    //     return console.log('olá grunt');
    // })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('lessCompiler', ['less']);

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production']);
};