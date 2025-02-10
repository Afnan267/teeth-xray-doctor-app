const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);
// Add SVG support
const customConfig = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'), // Transforms SVG files
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'), // Remove SVG from default asset extensions
      sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],               // Add SVG to source extensions
    },
  };
module.exports = mergeConfig(defaultConfig, customConfig);