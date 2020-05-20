import React, { Component } from 'react'
import { Card, Button } from 'antd';
import { withRouter } from "react-router-dom";

export class Success extends Component {
    handleBack = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <p style={{display:'flex', justifyContent:'center'}}>สำเร็จ</p>
                <Card style={{ border: '1px solid green', display:'flex', justifyContent:'center' }}>
                    <p>การลงทะเบียนของท่านเรียบร้อยเเล้ว</p>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button onClick={this.handleBack} type="primary">กลับหน้าหลัก</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(Success)
