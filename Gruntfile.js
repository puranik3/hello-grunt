module.exports = function( grunt ) {
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <% grunt.template.today( "yyyy-mm-dd" ) %> */\n'
            },
            build: {
                // @todo
                // Need to figure out how to generate <file>.min.js from <file>.js automatically
                files: [
                    {
                        src: 'client/*.js',
                        dest: 'build/client/client.min.js'
                    },
                    {
                        src: 'client/bower_components/*.js',
                        dest: 'build/client/bower_components.min.js'
                    }
                ]
            }
        },
        jsbeautifier: {
            default: {
                src: ["server/**/*.js"],
                options: {
                    js: {
                        indentSize: 4
                    }
                }
            },
            "git-pre-commit": {
                src: ["server/**/*.js"],
                options: {
                    mode:"VERIFY_ONLY"
                }
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks("grunt-jsbeautifier");
    
    grunt.registerTask( 'default', ['uglify', 'jsbeautifier'] );
};