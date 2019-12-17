const url = 'https://www.baidu.com/img/baidu_resultlogo@2.png';
let content = '';
[
    {
        name: "灰度100%",
        style: "grayscale(100%)"
    },
    {
        name: "模糊5px",
        style: "blur(5px)"
    },
    {
        name: "3倍亮度",
        style: "brightness(300%)"
    },
    {
        name: "200%对比度",
        style: "contrast(200%)"
    },
    {
        name: "200%饱和度",
        style: "saturate(200%)"
    },
    {
        name: "色相旋转180度",
        style: "hue-rotate(180deg)"
    },
    {
        name: "100%反色",
        style: "invert(100%)"
    },
    {
        name: "50%透明度",
        style: "opacity(50%)"
    },
    {
        name: "阴影",
        style: "drop-shadow(10px 5px 5px #f00)"
    },
    {
        name: "100%透明度",
        style: "opacity(100%)"
    },
    {
        name: "褐色程度70%",
        style: "sepia(70%)"
    }
].forEach(({ name, style }) => {
    content += `${name}-${style}: <img src=${url} style="filter: ${style}"><br />`;
});

document.body.innerHTML = content;