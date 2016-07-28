module.exports = {
    express: {
        files: ['src/js/{,*/}*.js'],
        tasks: [ 'express:dev' ],
        options: {
            atBegin:true,
            spawn: false,
            livereload: 35728
        }
    }
};
