module.exports = function( grunt ) {
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <% grunt.template.today( "yyyy-mm-dd" ) %> */\n'
            },
            build: {
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
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    
    grunt.registerTask( 'default', ['uglify'] );
};