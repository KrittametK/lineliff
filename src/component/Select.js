import React, { Component } from 'react'
import { Card, Radio, Button} from 'antd';
import { withRouter } from "react-router-dom";

export class Select extends Component {
    state = {
        value: 1,
      };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    handleSuccess = () => {
        this.props.history.push("/success")
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
        const { value } = this.state;
        return (
            <div>
                <p style={{display:'flex', justifyContent:'center'}}>เลือกบัญชี</p>
                <Card style={{ border: '1px solid blue', display:'flex', justifyContent:'center' }}>
                    <Radio.Group onChange={this.onChange} value={value}>
                        <Radio style={radioStyle} value={1}>
                        01234xxxx1111
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                        01234xxxx2222
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                        01234xxxx3333
                        </Radio>
                        <Radio style={radioStyle} value={4}>
                        01234xxxx4444
                        </Radio>
                    </Radio.Group>  
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button onClick={this.handleSuccess} type="primary">ยืนยัน</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(Select)
