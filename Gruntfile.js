module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <% grunt.template.today( "yyyy-mm-dd" ) %> */\n'
            },
            build: {
                files: grunt.file.expandMapping(['client/*.js', 'client/bower_components/*.js'], 'build/', {
                    rename: function( destBase, destPath ) {
                        return destBase + destPath.replace('.js', '.min.js');
                    }
                })
            }
        },

        jsbeautifier: {
            options: {
                config: 'config/.jsbeautifyrc'
            },
            default: {
                src: ['server/**/*.js', 'Gruntfile.js'],
                options: {
                    js: {
                        indentSize: 4
                    }
                }
            },
            'git-pre-commit': {
                src: ['server/**/*.js', 'Gruntfile.js'],
                options: {
                    mode: 'VERIFY_ONLY'
                }
            }
        },

        jscs: {
            all: {
                options: {
                    config: 'config/jscs.json',
                    fix: false
                },
                files: {
                    src: [
                        'common/**/*.js',

                        'server/**/*.js',

                        'Gruntfile.js'
                    ]
                }
            },
            fixall: {
                options: {
                    config: 'config/jscs.json',
                    fix: true
                },
                files: {
                    src: [
                        'common/**/*.js',

                        'server/**/*.js',

                        'Gruntfile.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('default', ['uglify', 'jscs:all']);
};
