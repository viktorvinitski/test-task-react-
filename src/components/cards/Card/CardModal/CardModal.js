import React from 'react'
import { Input, Button, Col, Row } from 'antd'

class CardModal extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Input placeholder="Name" />
                <Input placeholder="Title" style={{marginTop:10}} />
                <Input placeholder="Description" style={{marginTop:10}}/>
                <Input placeholder="Image" style={{marginTop:10}}/>
                <Row style={{marginTop:10}}>
                    <Col span={6}><Button type="default">No Thanks</Button></Col>
                    <Col span={6}><Button type="default">Add</Button></Col>  
                </Row>
                           
            </React.Fragment>
        )
    }
}

export default CardModal