module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8080,
                    hostname: '*',
                    keepalive: true,
                    debug: true,
                    // onCreateServer: function(server, connect, options) {
                    //     var io = require('socket.io').listen(server);
                    //     io.sockets.on('connection', function(socket) {
                    //     // do something with socket
                    //     });
                    // }
                }
            }
        },
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**"],
                outDir: "js"
            },
            options: {
                rootDir: "src",
                target: 'es5',
                declaration: false,
                removeComments: false,
                moduleResolution: "node",
            }
        }
    });
    grunt.loadNpmTasks('grunt-ts','grunt-contrib-connect');
    grunt.registerTask("default", ["ts"]);
};