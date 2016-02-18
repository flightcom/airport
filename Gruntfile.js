module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/"],
                "dest": "scripts/js/all.js"
            }
        },
        bowerInstall: {
            target: {
                // Point to the files that should be updated when 
                // you run `grunt bower-install` 
                src: [
                    'app/views/partials/head.ejs'
                ],
                // Optional: 
                // --------- 
                cwd: '',
                dependencies: true,
                devDependencies: false,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-bower-install');

    // Task definitions
    grunt.registerTask('default', ['concat', 'bowerInstall']);
};