import React, {useEffect, useState} from "react";
import "../css/CreatePost.css"
import {Button, Input, Select} from 'antd';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import {Editor} from '@toast-ui/react-editor';
import EnrollPost from "./EnrollPost";
import axios from "axios";
import {Link, BrowserRouter} from "react-router-dom";

const {Option} = Select;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};

class TemporaryCreatePost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            category: '',
            title: '',
            content: ''
        }
    }

    ref = React.createRef();            //Editor 용

    EnrollPost = () => {
        /*console.log("props", props.title);*/
        axios.put('http://localhost:3001/create', {
            /*body: JSON.stringify(props)*/
            title: this.state.title,
            category: this.state.category,
            content: this.state.content
        }).then(response => {
            console.log("res", response)
            this.setState({
                visible: false
            })
            alert("게시물이 등록되었습니다.")

        }).catch((error) => {
            this.setState({
                visible: false
            })
            alert("게시물이 등록에 실패했습니다.")
        });
    }


    handleClick = values => {
        this.setState({
            visible: true,
            title: this.state.title,
            category: this.state.category,
            content: this.ref.current.getInstance().getHtml()
        })
        /* EnrollPost(this.state.texts);*/
        this.EnrollPost();
        /*console.log("성공", this.state.res);*/

        /*console.log("title", this.state.texts.title);
        console.log("category", this.state.texts.category);
        console.log("content", this.state.texts.content);*/

    };

    onReset = () => {
        this.ref.current.resetFields();
    };

    render() {
        return (
            <div className={"Create__Content"}>

                <div className={"Create__Content-words"}>

                    <input id={"Create__Title"} style={{width: '400px', marginLeft: '4px'}} placeholder={"제목"}
                           onChange={(e) => {
                               this.setState({
                                   title: e.target.value
                               })
                               /*console.log("title", this.state.title)*/
                           }}
                    />

                </div>
                <div className={"Create__Content-words"}>

                    <select id={"Create__Selector"} style={{width: '400px', textAlign: 'left'}}
                            placeholder={"카테고리"}
                            onChange={(e) => {
                                this.setState({
                                    category: e.target.value
                                })
                                /*console.log("category", this.state.category)*/
                            }}
                            allowClear
                    >
                        <option value={"One"}>One</option>
                        <option value={"Two"}>Two</option>
                        <option value={"Three"}>Three</option>
                    </select>
                </div>

                <div style={{marginTop: "30px", width: "480px", textAlign: "left"}}>
                    <Editor
                        previewStyle="vertical"
                        height="400px"
                        initialEditType="wysiwyg"
                        ref={this.ref}
                    />
                </div>
                <div className={"Create__Content-button"}>
                    <button htmlType="button" onClick={this.onReset}>
                        Reset
                    </button>
                    <Link to={"/"}>
                        <button onClick={this.handleClick}>
                            Submit
                        </button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default TemporaryCreatePost;