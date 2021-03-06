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


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-freebsd', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-freebsd');

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M23.7253418,0.403330656 C24.9975688,1.67496208 21.4706794,7.26490597 20.8744345,7.86115088 C20.2781896,8.45650302 18.7637754,7.90875554 17.4918461,6.63682558 C16.2196191,5.36519416 15.6715737,3.85048208 16.2678187,3.25423717 C16.8640636,2.65769514 22.4534125,-0.868896418 23.7253418,0.403330656 L23.7253418,0.403330656 Z M5.88500669,1.74874919 C3.94274831,0.64670772 1.17931401,-0.579104582 0.300120884,0.300088547 C-0.590973233,1.19058772 0.680063246,4.01650237 1.79341076,5.96233113 C2.78417662,4.23935071 4.19415887,2.78890453 5.88500669,1.74874919 L5.88500669,1.74874919 Z M21.785166,7.42259564 C21.9639794,8.02925383 21.9315489,8.53058725 21.6417578,8.81978414 C20.9639901,9.49755113 19.1338994,8.77634479 17.4844083,7.20599597 C17.3689674,7.10275387 17.2550141,6.99564356 17.1428465,6.88317878 C16.5466016,6.28633892 16.0821617,5.65081997 15.785527,5.06617893 C15.2077288,4.02989107 15.0631307,3.11410221 15.4999004,2.67762963 C15.7379223,2.43960776 16.1187574,2.37474692 16.583198,2.45864948 C16.8863778,2.2673395 17.2437081,2.05371455 17.6358493,1.83503223 C16.0414007,1.00344305 14.2288637,0.533647279 12.305647,0.533647279 C5.92785039,0.533647279 0.757122899,5.70348271 0.757122899,12.0821714 C0.757122899,18.4596702 5.92785039,23.6301005 12.305647,23.6301005 C18.683741,23.6301005 23.8544685,18.4596702 23.8544685,12.0821714 C23.8544685,10.0223894 23.313861,8.09084213 22.3692121,6.41635843 C22.1648105,6.78856511 21.9663598,7.12982838 21.785166,7.42259564 L21.785166,7.42259564 Z', stroke: 'none' })
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

Icon.displayName = 'PlatformFreebsd';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];