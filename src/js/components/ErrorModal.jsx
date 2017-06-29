import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

class ErrorModal extends Component {
  constructor(props) {
    if (props)
      super(props);
    }

  componentDidMount() {

    const {message, title, onClose} = this.props;
    var modalMarkup = (
      <div>
        <div className="reveal" id="error-modal" data-reveal="">
          <h4 className="text-center">{title}</h4>
          <p className="lead text-center">{message}</p>
          <p className="text-center">
            <button className="text-center hollow button" data-close="" aria-label="Close modal" type="button">
              <span aria-hidden="true">Okay</span>
            </button>
          </p>
        </div>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-modal'));
    $('#error-modal').click(function(e) {
      onClose(e);
    });
    modal.open();

  }

  render() {

    return (
      <div></div>
    );

  }
}

ErrorModal.defaultProps = {
  title: 'Error',
  message: ''
};

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
}

export default ErrorModal;
