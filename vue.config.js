module.exports = {
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            scss: {
                additionalData: `@import "./assets/style.scss";`
            }
        }
    }
};
  