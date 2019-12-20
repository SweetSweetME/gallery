import React from 'react';
import './style.less';

export default class Http extends React.Component {

    componentDidMount() {
        this.paint();
    }

    uploadImg = () => {
        const formData = new FormData();
        formData.append('file', this.imgUrl.files[0]);
        formData.append('title', this.title.value);
        console.log(this.imgUrl.files[0]);
        fetch(
            'http://localhost:8091/posts/1/img',
            {
                method: 'post',
                body: formData,
                'Content-type': 'application/x-www-form-urlencoded'
            }
        );
        // var request = new XMLHttpRequest();
        // request.open("POST", "http://localhost:8091/posts/1/img");
        // request.send(formData);
    }

    paint() {
        const ctx = this.canvas.getContext('2d');
        console.log(ctx);
        ctx.fillStyle = 'red';
        ctx.moveTo(500, 500);
        ctx.lineTo(600, 600);
        ctx.stroke();
        // ctx.fillRect(10, 10, 150, 100);
    }

    render() {
        return (
            // <form method="post" action="http://localhost:8091/posts/1/img" encType="multipart/form-data">
            <div>
                <input name="title" ref={title => this.title = title} type="text" />
                <input type="file" name="file" ref={imgUrl => this.imgUrl = imgUrl} />
                <input type="button" onClick={() => this.uploadImg()} value="上传" />
                <a href="https://baidu.com" rel="noopener noreferrer" target="_blank">去另一个页面</a>
                <div>
                    <p className="textoverflow">两行溢出两行溢出两行溢出两行溢出两行溢出两行溢出两行溢出两行溢出两行溢出两行溢出</p>
                </div>
                <canvas ref={canvas => { this.canvas = canvas; }} width="400" height="400"></canvas>
            </div>

            // </form>
            // <input type="submit" />

        );
    }
}