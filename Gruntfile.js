module.exports = function(grunt) {

    var pkg = grunt.file.readJSON("package.json");

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: pkg,
        banner: grunt.file.read("./src/copy.js")
            .replace(/@VERSION/, pkg.version)
            .replace(/@DATE/, grunt.template.today("yyyy-mm-dd")) + "\n",
        // Task configuration.
        uglify: {
            options: {
                banner: "<%= banner %>",
                report: "min"
            },
            dist: {
                src: "<%= concat.target.dest %>",
                dest: "dist/fingerings.min.js"
            }
        },
        concat: {
            options: {
                banner: "<%= banner %>"
            },
            target: {
                dest: "dist/fingerings.js",
                src: [
                    "./src/banner.js",
                    "./src/fingerings/*.js",
                    "./src/sax/*.js",
                    "./src/footer.js"
                ]
            }
        },
        jshint: {
          files: ["src/**/*.js", "!src/*.js"],
          options: {
            globals: {
              jQuery: true
            }
          }
        },
        watch: {
          scripts: {
            files: ["src/**/*.js", "examples/**/*.js"],
            tasks: ["build"],
            options: {
              spawn: false,
              reload: true,
              livereload: true
            },
          },
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: "./",
                    open: {
                          target: 'http://localhost:8080/examples/index.html'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("build", ["jshint", "concat", "uglify"]);
    grunt.registerTask("dev", ["build", "connect", "watch"]);
    grunt.registerTask("default", ["dev"]);
};