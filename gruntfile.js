module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /* less plugin config */
        less: {
            /* dev ambient */
            development: {
                /* file dest : file origin */
                files: {
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            /* prod ambient */
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css':'src/styles/main.less'
                }
            }
        },
        /* watch plugin config */
        watch: {
            /* less to css compiler watch */
            css: {
                /* files to be watched */
                files: 'src/styles/**/*.less',
                /* tasks to be executed */
                tasks: ['less:development']
            },
            /* js compress watch */
            scripts: {
                files: 'src/scripts/*.js',
                tasks: ['uglify']
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }
    
    });

    /* Plugins loaded */
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    /* Individual tasks */
    grunt.registerTask('lessCompileAll', ['less']);
    grunt.registerTask('jsCompress', ['uglify']);

    /* Grouped tasks */
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify']);
};