var path = require( 'path' );

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true,
                sourceMap: true
            },
            build: {
                files: grunt.file.expandMapping(['client/**/*.js'], 'build', {
                    rename: function( dest, matchedSrcPath ) {
                        matchedSrcPath = matchedSrcPath.replace('.js', '.min.js');
                        return path.join(dest, matchedSrcPath);
                    }
                })
            }
        },

        cssmin: {
            
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-jsbeautifier');

    grunt.registerTask('default', ['uglify', 'cssmin', 'jscs:all']);
};
