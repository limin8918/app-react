module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: './src/scss',
            src: ['example.{scss,sass}'],
            dest: 'public/css',
            ext: '.css'
        }]
    }
};