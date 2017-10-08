import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    const { title, className, children, footer } = this.props
    const toggle = this.toggle
    return (
      <div>
        <Button color="primary" onClick={toggle}>{title}</Button>
        <Modal isOpen={this.state.modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          {footer && <ModalFooter>
            {footer}
          </ModalFooter>}
        </Modal>
      </div>
    )
  }
}
