import React from 'react'
import { Modal, Button } from 'antd';
import CardModal from './CardModal/CardModal'

class CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false,
        };
      }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button
                    type="primary"
                    onClick={this.showModal}
                    style={{ marginTop: 30 }}
                    shape='round'
                    size='large'
                >
                    Add new burger
                </Button>

                <Modal
                    title="Add new burger"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p><CardModal/></p>

                </Modal>

                

            </div>
        );
    }
}

export default CardItem