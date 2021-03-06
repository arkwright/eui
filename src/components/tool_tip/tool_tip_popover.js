import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class EuiToolTipPopover extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.node,
    positionToolTip: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('euiBody-hasToolTip');

    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    requestAnimationFrame(() => {
      // Because of this delay, sometimes `positionToolTip` becomes unavailable.
      if (this.popover) {
        this.props.positionToolTip(this.popover.getBoundingClientRect());
      }
    });
  }

  componentWillUnmount() {
    document.body.classList.remove('euiBody-hasToolTip');
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const {
      children,
      title,
      className,
      positionToolTip, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const classes = classNames(
      'euiToolTipPopover',
      className
    );

    let optionalTitle;
    if (title) {
      optionalTitle = (
        <div className="euiToolTip__title">{title}</div>
      );
    }

    return (
      <div
        className={classes}
        ref={popover => this.popover = popover}
        {...rest}
      >
        {optionalTitle}
        {children}
      </div>
    );
  }
}
