module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add production optimizations
      if (process.env.NODE_ENV === 'production') {
        // Enable code splitting
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: 10,
              },
              common: {
                minChunks: 2,
                priority: 5,
                reuseExistingChunk: true,
              },
            },
          },
          runtimeChunk: 'single',
        };
      }
      return webpackConfig;
    },
  },
};
