module.exports = function (grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        // path to task.js files, defaults to grunt dir
        configPath: path.join(process.cwd(), 'grunt-tasks'),

        // auto grunt.initConfig
        init: true,

        loadGruntTasks: {
            pattern: ['grunt-*', '@*/grunt-*'],
            config: './package',
            scope: 'devDependencies'
        }
    });

    grunt.registerTask('dev', ['package', 'watch']);

    grunt.registerTask('package', ['clean', 'sass', 'webpack']);
};