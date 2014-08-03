module.exports = {
  github: {
    files: [
      {
        expand: true,
        src: 'book/**/*.md',
        dest: './',
        ext: '.html'
      },
      {
        expand: true,
        src: 'index.md',
        dest: './',
        ext: '.html'
      }
    ]
  }
};