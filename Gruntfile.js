/**
 * sunrise
 *
 * Gruntfile
 *
 * @user llaine
 * @date 05/03/15
 */

module.exports = function (grunt) {
    'use strict';

    var target = grunt.option('target') || 'dev';
    var environment = grunt.file.readJSON('environment.json')[target];

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: ['src/sass/*.scss'],
                tasks: ['compass']
            },
            javascript: {
                files: ["src/**/*.js", "src/**/*.html"]
            },
            options: {
                livereload: true
            }
        },
        /* Task which convert the scss in css.  */
        compass: {
            options: {
                sassDir: 'src/sass/',
                cssDir: 'src/assets/style/'
            },
            dist: {}
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        serve: {
            options: {
                port: 9000
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: './src/',
                    keepalive: true
                }
            }
        },
        protractor: {
            local: {
                options: {
                    configFile: "test/e2e/protractor.conf.js"
                }
            }
        }
    });

    grunt.registerTask('test', ['protractor:local']);
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('watch', ['watch']);
    grunt.registerTask('server', ['connect', 'watch']);
};


