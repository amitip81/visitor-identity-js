// GITHUB: https://github.com/amitip81/visitor-identity-js
type GenUniqueId = () => string | undefined;
const VisitorId: GenUniqueId = () => {
    const navigatorInfo = window.navigator;
    const screenInfo = window.screen;
    let _ = navigatorInfo.userAgent.replace(/\D+/g, '');
    _ += navigatorInfo.plugins.length || 0;
    _ += screenInfo.height || 0;
    _ += screenInfo.width || 0;
    _ += screenInfo.pixelDepth || 0;
    return _;
};

export default VisitorId;