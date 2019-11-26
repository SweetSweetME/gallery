const Util = {};

Util.getRoute = () => {
    const hash = window.location.hash;
    // const route = LO.startCase(hash.substring(1)).replace(/\s/g, '');
    const route = hash.substring(hash.lastIndexOf('/') + 1);
    console.log(route);
    return route;
}

export default Util;