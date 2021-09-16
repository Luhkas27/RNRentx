module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                    alias: {
                        '@pages': './src/pages',
                        '@routes': './src/routes',
                        '@shared': './src/shared',
                        '@services': './src/services',
                        '@store': './src/store',
                        '@assets': './src/assets',
                        '@theme': './src/global',
                        '@utils': './src/utils',
                        '@mocks': './src/mocks',
                    },
                },
            ],
        ],
    };
};
