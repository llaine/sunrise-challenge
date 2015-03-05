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
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'main.css': 'main.scss'
                }
            }
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
        }
    });

    grunt.registerTask('default', ['sass', 'uglify']);
    grunt.registerTask('watch', ['watch']);
    grunt.registerTask('server', ['connect']);
};


