import React, {useEffect, useState} from "react";
import "../css/CreatePost.css"
import {Modal, Button, Form, Input, Select} from 'antd';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import {Editor} from '@toast-ui/react-editor';
import EnrollPost from "./EnrollPost";
import axios from "axios";
import {Link, BrowserRouter} from "react-router-dom";

const {Option} = Select;
const {success} = Modal;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};

class CreatePost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            texts: {
                category: '',
                title: '',
                content: ''
            }
        }
    }

    formRef = React.createRef();        //ant Form 컴포넌트 ref 용
    ref = React.createRef();            //Editor 용

    onClick = () => {

    }
    EnrollPost = () => {
        /*console.log("props", props.title);*/
        axios.put('http://localhost:3001/create', {
            /*body: JSON.stringify(props)*/
            title: this.state.texts.title,
            category: this.state.texts.category,
            content: this.state.texts.content
        }).then(response => {
            console.log("res", response)
            this.setState({
                visible: true
            })
            let navigation = false;

            Modal.success({
                content: 'some messages...some messages...',
                onOk:()=>{
                    this.props.history.push("/")
                }
            });


        }).catch((error) => {
            console.log(error);
        });
    }


    handleClick = values => {
        this.setState({
            texts: {
                title: values.title,
                category: values.category,
                content: this.ref.current.getInstance().getHtml()
            }
        })
        /* EnrollPost(this.state.texts);*/
        this.EnrollPost();
        console.log("성공", this.state.res);

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
                <Form
                    {...layout}
                    ref={this.formRef}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.handleClick}
                >
                    <div className={"Create__Content-words"}>
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input title!',
                                },
                            ]}
                        >
                            <Input id={"Create__Title"} style={{width: '400px', marginLeft: '4px'}} placeholder={"제목"}/>
                        </Form.Item>

                    </div>
                    <div className={"Create__Content-words"}>
                        <Form.Item
                            label={"Category"}
                            name={"category"}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select category!'
                                }
                            ]}
                        >
                            <Select id={"Create__Selector"} style={{width: '400px', textAlign: 'left'}}
                                    placeholder={"카테고리"}
                                    allowClear
                            >
                                <Option value={"One"}>One</Option>
                                <Option value={"Two"}>Two</Option>
                                <Option value={"Three"}>Three</Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div style={{marginTop: "30px", width: "480px", textAlign: "left"}}>
                        <Editor
                            previewStyle="vertical"
                            height="400px"
                            initialEditType="wysiwyg"
                            ref={this.ref}
                        />
                    </div>
                    <Form.Item>
                        <div className={"Create__Content-button"}>
                            <Button htmlType="button" onClick={this.onReset}>
                                Reset
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </div>
                    </Form.Item>
                </Form>


            </div>
        )
    }
}

export default CreatePost;