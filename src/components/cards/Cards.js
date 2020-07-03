import React, { Component } from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd'

const { Meta } = Card;

class Cards extends Component {

    render() {
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 240, margin: 30 }}
                    cover={<img alt="example" src="https://prod-wolt-venue-images-cdn.wolt.com/5c091b57ca10af000a566bcd/909d1757ae676cf1b5d4ccc839f59f2d" />}
                >
                    <Meta title="New York" description="burger description" />
                <Button
                        type="default"
                        style={{ marginTop: 20 }}
                >
                    Edit
                </Button>

                </Card>
            </div>
        )
    }
}


export default Cards