import React, { Component } from 'react'
import { Card, Button, Input } from 'antd';
import { withRouter } from "react-router-dom";

export class Login extends Component {
    handleSelect = () => {
        this.props.history.push("/select")
    }
    render() {
        return (
            <div>
                <p style={{display:'flex', justifyContent:'center'}}>ลงทะเบียน</p>
                <Card style={{ border: '1px solid red', display:'flex', justifyContent:'center' }}>
                    <p>เลขประจำตัวประชาชน</p>
                    <Input placeholder="กรุณากรอกเลขประจำตัวประชาชน" />
                    <p>เบอร์โทรศัพท์</p>
                    <Input placeholder="0xxxxxxxxx" />
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button onClick={this.handleSelect} type="primary">ยืนยัน</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(Login)
