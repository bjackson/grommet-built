'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-vmware', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-vmware');

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M5.57403651,0 C4.61501014,0 3.84584178,0.753590264 3.84584178,1.67951318 L3.84584178,7.42393509 L1.72819473,7.42393509 C0.769168365,7.42393486 0,8.18044625 0,9.10344828 L0,21.5415822 C0,22.4675058 0.769168357,23.2210953 1.72819473,23.2210953 L14.5801217,23.2210953 C15.5391481,23.2210946 16.3326572,22.4675051 16.3326572,21.5415822 L16.3326572,19.4969574 L22.2718053,19.4969574 C23.229858,19.4969582 24,18.7404462 24,17.8174442 L24,5.37931034 C24,4.45533461 23.229858,3.72413793 22.2718053,3.72413793 L20.1541582,3.72413793 L20.1541582,1.67951318 C20.1541582,0.753590287 19.3830426,0 18.4259635,0 L5.57403651,0 L5.57403651,0 Z M5.57403651,0.949290061 L18.4259635,0.949290061 C18.8455976,0.949290139 19.1805274,1.2725355 19.1805274,1.67951318 L19.1805274,3.72413793 L9.4198783,3.72413793 C8.46279919,3.72413785 7.6673428,4.45533469 7.6673428,5.37931034 L7.6673428,7.42393509 L4.81947262,7.42393509 L4.81947262,1.67951318 C4.81947246,1.2725355 5.15148073,0.949290061 5.57403651,0.949290061 L5.57403651,0.949290061 Z M9.4198783,4.64908722 L19.1805274,4.64908722 L19.1805274,14.0933063 C19.1805274,14.5002848 18.8455984,14.8478702 18.4259635,14.8478702 L16.3326572,14.8478702 L16.3326572,9.10344828 C16.332658,8.18044625 15.5391481,7.42393509 14.5801217,7.42393509 L8.64097363,7.42393509 L8.64097363,5.37931034 C8.64097363,4.97330621 9.00024341,4.64908722 9.4198783,4.64908722 L9.4198783,4.64908722 Z M20.1541582,4.64908722 L22.2718053,4.64908722 C22.6924138,4.64908707 23.0263692,4.97330629 23.0263692,5.37931034 L23.0263692,17.8174442 C23.0263692,18.2234483 22.6924138,18.5476673 22.2718053,18.5476673 L16.3326572,18.5476673 L16.3326572,15.7971602 L18.4259635,15.7971602 C19.3830418,15.7971595 20.1541582,15.0192292 20.1541582,14.0933063 L20.1541582,4.64908722 L20.1541582,4.64908722 Z M1.72819473,8.37322515 L3.84584178,8.37322515 L3.84584178,14.0933063 C3.84584178,15.01923 4.61501014,15.7971602 5.57403651,15.7971602 L7.6673428,15.7971602 L7.6673428,17.8174442 C7.66734295,18.7404462 8.46279919,19.4969574 9.4198783,19.4969574 L15.3590264,19.4969574 L15.3590264,21.5415822 C15.3590271,21.947587 15.0026775,22.2718053 14.5801217,22.2718053 L1.72819473,22.2718053 C1.30271805,22.2718045 0.973630832,21.9475862 0.973630832,21.5415822 L0.973630832,9.10344828 C0.97363091,8.69841785 1.30271805,8.37322515 1.72819473,8.37322515 L1.72819473,8.37322515 Z M4.81947262,8.37322515 L7.6673428,8.37322515 L7.6673428,14.8478702 L5.57403651,14.8478702 C5.15148073,14.8478702 4.81947262,14.500284 4.81947262,14.0933063 L4.81947262,8.37322515 L4.81947262,8.37322515 Z M8.64097363,8.37322515 L14.5801217,8.37322515 C15.0026775,8.37322515 15.3590264,8.69841785 15.3590264,9.10344828 L15.3590264,14.8478702 L8.64097363,14.8478702 L8.64097363,8.37322515 L8.64097363,8.37322515 Z M8.64097363,15.7971602 L15.3590264,15.7971602 L15.3590264,18.5476673 L9.4198783,18.5476673 C9.00024341,18.5476673 8.64097363,18.2234483 8.64097363,17.8174442 L8.64097363,15.7971602 L8.64097363,15.7971602 Z', stroke: 'none' })
      );
    }
  }]);
  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'PlatformVmware';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];