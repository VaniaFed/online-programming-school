const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const webpack = require('webpack');

const merge = require('webpack-merge');
const aliasConfig = require('./webpack/webpack-alias-config');

const serverConfig = {
    plugins: [
        new webpack.DefinePlugin({
            CLIENT_SIDE_RENDERING: false
        })
    ]
};

module.exports = withPlugins(
    [withTypescript, [withSass, { cssModules: true }], withImages],
    {
        webpack: config => {
            config.module.rules.forEach(rule => {
                if (rule.test.toString().includes('.scss')) {
                    rule.rules = rule.use.map(useRule => {
                        if (typeof useRule === 'string') {
                            return { loader: useRule };
                        }

                        if (useRule.loader.startsWith('css-loader')) {
                            return {
                                oneOf: [
                                    {
                                        test: new RegExp('.module.scss$'),
                                        loader: useRule.loader,
                                        options: useRule.options
                                    },
                                    {
                                        loader: useRule.loader,
                                        options: {}
                                    }
                                ]
                            };
                        }
                        return useRule;
                    });
                    delete rule.use;
                }
            });
            return merge(config, aliasConfig, serverConfig);
        }
    }
);
