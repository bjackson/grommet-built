'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames5 = require('classnames');

var _classnames6 = _interopRequireDefault(_classnames5);

var _Status = require('./icons/Status');

var _Status2 = _interopRequireDefault(_Status);

var _CSSClassnames = require('../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Announcer = require('../utils/Announcer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.TOPOLOGY; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var STATUS_ICON = _CSSClassnames2.default.STATUS_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;

var Label = function Label(props) {
  var children = props.children,
      restProps = (0, _objectWithoutProperties3.default)(props, ['children']);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({}, restProps, { className: CLASS_ROOT + '__label' }),
    children
  );
};

var Part = function (_Component) {
  (0, _inherits3.default)(Part, _Component);

  function Part() {
    (0, _classCallCheck3.default)(this, Part);
    return (0, _possibleConstructorReturn3.default)(this, (Part.__proto__ || (0, _getPrototypeOf2.default)(Part)).apply(this, arguments));
  }

  (0, _createClass3.default)(Part, [{
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props,
          a11yTitle = _props.a11yTitle,
          align = _props.align,
          children = _props.children,
          className = _props.className,
          demarcate = _props.demarcate,
          direction = _props.direction,
          justify = _props.justify,
          label = _props.label,
          reverse = _props.reverse,
          status = _props.status,
          props = (0, _objectWithoutProperties3.default)(_props, ['a11yTitle', 'align', 'children', 'className', 'demarcate', 'direction', 'justify', 'label', 'reverse', 'status']);
      var intl = this.context.intl;

      var realChildren = 0;
      _react.Children.forEach(children, function (child) {
        if (child) {
          realChildren += 1;
        }
      });
      var classes = (0, _classnames6.default)(CLASS_ROOT + '__part', (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__part--direction-' + direction, direction), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__part--justify-' + justify, justify), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__part--align-' + align, align), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__part--demarcate', demarcate), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__part--reverse', reverse), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__part--empty', !status && !label && realChildren === 0), _classnames), className);

      var statusIcon = void 0;
      if (status) {
        statusIcon = _react2.default.createElement(_Status2.default, { value: status, size: 'small', role: 'presentation',
          'aria-hidden': 'true' });
      }

      var labelLabel = void 0;
      if (label) {
        var hiddenProps = void 0;
        if (status) {
          // hide label if status is present and let aria-label handle
          // description
          hiddenProps = {
            role: 'presentation',
            'aria-hidden': true
          };
        }
        labelLabel = _react2.default.createElement(
          Label,
          hiddenProps,
          label
        );
      }

      var role = !status && !label ? 'group' : 'row';
      var partMessage = a11yTitle || (role === 'group' ? _Intl2.default.getMessage(intl, 'Part') : (status || '') + ' ' + label);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, props, { ref: function ref(_ref) {
            return _this2._partRef = _ref;
          }, className: classes,
          onMouseEnter: this.props.onMouseEnter,
          onMouseLeave: this.props.onMouseLeave,
          tabIndex: '-1', role: role, 'aria-label': partMessage,
          onFocus: function onFocus() {
            if (_this2._partRef) {
              var connects = _this2._partRef.getAttribute('data-connects');
              if (connects) {
                (0, _Announcer.announce)(connects, 'polite');
              }
            }
          } }),
        statusIcon,
        labelLabel,
        children
      );
    }
  }]);
  return Part;
}(_react.Component);

Part.displayName = 'Part';


Part.contextTypes = {
  intl: _react.PropTypes.object
};

Part.propTypes = {
  a11yTitle: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['start', 'center', 'between', 'end', 'stretch']),
  demarcate: _react.PropTypes.bool,
  direction: _react.PropTypes.oneOf(['row', 'column']).isRequired,
  id: _react.PropTypes.string,
  justify: _react.PropTypes.oneOf(['start', 'center', 'between', 'end']),
  label: _react.PropTypes.string,
  reverse: _react.PropTypes.bool,
  status: _react.PropTypes.string
};

Part.defaultProps = {
  demarcate: true,
  direction: 'row',
  justify: 'center',
  align: 'stretch'
};

var Parts = function (_Component2) {
  (0, _inherits3.default)(Parts, _Component2);

  function Parts() {
    (0, _classCallCheck3.default)(this, Parts);
    return (0, _possibleConstructorReturn3.default)(this, (Parts.__proto__ || (0, _getPrototypeOf2.default)(Parts)).apply(this, arguments));
  }

  (0, _createClass3.default)(Parts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._makeUniform();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._makeUniform();
    }
  }, {
    key: '_makeUniform',
    value: function _makeUniform() {
      var _props2 = this.props,
          direction = _props2.direction,
          uniform = _props2.uniform;

      if (uniform) {
        var parts = this._componentRef.children;
        // clear old basis
        for (var i = 0; i < parts.length; i += 1) {
          parts[i].style.flexBasis = null;
        }
        // find max
        var max = 0;
        for (var _i = 0; _i < parts.length; _i += 1) {
          if ('column' === direction) {
            max = Math.max(max, parts[_i].offsetHeight);
          } else {
            max = Math.max(max, parts[_i].offsetWidth);
          }
        }
        // set basis
        for (var _i2 = 0; _i2 < parts.length; _i2 += 1) {
          parts[_i2].style.flexBasis = '' + max + 'px';
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames2,
          _this4 = this;

      var _props3 = this.props,
          a11yTitle = _props3.a11yTitle,
          align = _props3.align,
          children = _props3.children,
          className = _props3.className,
          direction = _props3.direction;
      var intl = this.context.intl;

      var classes = (0, _classnames6.default)(CLASS_ROOT + '__parts', (_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '__parts--direction-' + direction, direction), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '__part--align-' + align, align), _classnames2), className);
      var partsMessage = a11yTitle || _Intl2.default.getMessage(intl, 'Parts');
      return _react2.default.createElement(
        'div',
        { ref: function ref(_ref2) {
            return _this4._componentRef = _ref2;
          }, className: classes,
          tabIndex: '-1', role: 'rowgroup', 'aria-label': partsMessage },
        children
      );
    }
  }]);
  return Parts;
}(_react.Component);

Parts.displayName = 'Parts';


Parts.contextTypes = {
  intl: _react.PropTypes.object
};

Parts.propTypes = {
  align: _react.PropTypes.oneOf(['start', 'center', 'between', 'end', 'stretch']),
  direction: _react.PropTypes.oneOf(['row', 'column']).isRequired,
  uniform: _react.PropTypes.bool
};

Parts.defaultProps = {
  direction: 'column'
};

var Topology = function (_Component3) {
  (0, _inherits3.default)(Topology, _Component3);

  function Topology(props, context) {
    (0, _classCallCheck3.default)(this, Topology);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (Topology.__proto__ || (0, _getPrototypeOf2.default)(Topology)).call(this, props, context));

    _this5._layout = _this5._layout.bind(_this5);
    _this5._onResize = _this5._onResize.bind(_this5);
    _this5._onMouseMove = _this5._onMouseMove.bind(_this5);
    _this5._onMouseLeave = _this5._onMouseLeave.bind(_this5);

    _this5.state = {
      activeIds: {},
      height: 100,
      mouseActive: false,
      paths: [],
      width: 100
    };
    return _this5;
  }

  (0, _createClass3.default)(Topology, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var links = this.props.links;
      var intl = this.context.intl;

      window.addEventListener('resize', this._onResize);
      this._layout();
      if (links && links.length > 0) {
        (function () {
          var connectsMap = {};
          links.forEach(function (link) {
            var startId = link.ids[0];
            var startElement = document.getElementById(startId);
            var endId = link.ids[1];
            var endElement = document.getElementById(endId);
            if (startElement && endElement) {
              var startLabel = startElement.getAttribute('aria-label') || startElement.innerText;
              var endLabel = endElement.getAttribute('aria-label') || end.innerText;
              if (connectsMap[startId]) {
                connectsMap[startId].push(endLabel);
              } else {
                connectsMap[startId] = [endLabel];
              }

              if (connectsMap[endId]) {
                connectsMap[endId].push(startLabel);
              } else {
                connectsMap[endId] = [startLabel];
              }
            }
          });

          (0, _keys2.default)(connectsMap).forEach(function (element) {
            var targetElement = document.getElementById(element);
            var connectsMessage = _Intl2.default.getMessage(intl, 'Connects With');
            targetElement.setAttribute('data-connects', connectsMessage + ': (' + connectsMap[element].join() + ')');
          });
        })();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this._layout();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._resizeTimer);
      window.removeEventListener('resize', this._onResize);
    }
  }, {
    key: '_coords',
    value: function _coords(id, containerRect) {
      var result;
      var element = document.getElementById(id);
      if (!element) {
        console.log('!!! Topology is unable to find the link target with id:', id);
        result = [0, 0];
      } else {
        var rect = element.getBoundingClientRect();
        // see if the element has a status child, use that if it does
        var statusElements = element.querySelectorAll('.' + STATUS_ICON);
        if (statusElements.length === 1) {
          rect = statusElements[0].getBoundingClientRect();
        }
        result = [rect.left - containerRect.left + rect.width / 2, rect.top - containerRect.top + rect.height / 2];
      }
      return result;
    }
  }, {
    key: '_buildPaths',
    value: function _buildPaths(contents) {
      var _this6 = this;

      var _props4 = this.props,
          linkOffset = _props4.linkOffset,
          links = _props4.links;
      var activeIds = this.state.activeIds;

      var rect = contents.getBoundingClientRect();

      var paths = links.map(function (link, linkIndex) {
        var _classnames3;

        var commands = '';
        var active = false;

        var p1 = _this6._coords(link.ids[0], rect);
        link.ids.forEach(function (id, idIndex) {
          if (activeIds[id]) {
            active = true;
          }
          if (idIndex > 0) {
            var p2 = _this6._coords(id, rect);
            var delta = [Math.abs(p1[0] - p2[0]), Math.abs(p1[1] - p2[1])];
            commands += ' M' + p1[0] + ',' + p1[1];
            var cp1 = void 0;
            var cp2 = void 0;

            if (delta[0] > delta[1]) {
              // larger X delta
              cp1 = [p1[0], Math.min(p1[1], p2[1]) + Math.max(linkOffset, delta[1] / 2) + linkIndex * 2];
              cp2 = [p2[0], cp1[1]];
            } else {
              // larger Y delta or equal
              var cp1xDelta = Math.max(linkOffset, delta[0] / 2 + linkIndex * 2);
              if (p1[0] > p2[0]) {
                cp1 = [Math.min(p2[0] + cp1xDelta, rect.width), p1[1]];
              } else {
                cp1 = [Math.max(0, p1[0] - cp1xDelta), p1[1]];
              }
              cp2 = [cp1[0], p2[1]];
            }

            commands += ' C' + cp1[0] + ',' + cp1[1] + ' ' + cp2[0] + ',' + cp2[1] + ' ' + p2[0] + ',' + p2[1];
            p1 = p2;
          }
        });

        var classes = (0, _classnames6.default)(CLASS_ROOT + '__path', (_classnames3 = {}, (0, _defineProperty3.default)(_classnames3, CLASS_ROOT + '__path--active', active), (0, _defineProperty3.default)(_classnames3, COLOR_INDEX + '-' + link.colorIndex, link.colorIndex), _classnames3));

        return _react2.default.createElement('path', { key: linkIndex, fill: 'none', className: classes, d: commands });
      });

      return paths;
    }
  }, {
    key: '_layout',
    value: function _layout() {
      var contents = (0, _reactDom.findDOMNode)(this._contentsRef);
      if (contents) {
        this.setState({
          width: contents.scrollWidth,
          height: contents.scrollHeight,
          paths: this._buildPaths(contents)
        });
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      // debounce
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(this._layout, 50);
    }
  }, {
    key: '_activate',
    value: function _activate(element) {
      var topology = this._topologyRef;
      var activeIds = {};
      while (element && element !== topology) {
        var id = element.getAttribute('id');
        if (id) {
          activeIds[id] = true;
        }
        element = element.parentNode;
      }
      this.setState({ activeIds: activeIds }, this._layout);
    }
  }, {
    key: '_onMouseMove',
    value: function _onMouseMove(event) {
      // debounce
      clearTimeout(this._mouseMoveTimer);
      this._mouseMoveTimer = setTimeout(this._activate.bind(this, event.target), 100);
    }
  }, {
    key: '_onMouseLeave',
    value: function _onMouseLeave() {
      clearTimeout(this._mouseMoveTimer);
      this.setState({ activeIds: {} }, this._layout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var _props5 = this.props,
          a11yTitle = _props5.a11yTitle,
          children = _props5.children,
          className = _props5.className,
          links = _props5.links,
          _onBlur = _props5.onBlur,
          _onFocus = _props5.onFocus,
          _onMouseDown = _props5.onMouseDown,
          _onMouseUp = _props5.onMouseUp,
          props = (0, _objectWithoutProperties3.default)(_props5, ['a11yTitle', 'children', 'className', 'links', 'onBlur', 'onFocus', 'onMouseDown', 'onMouseUp']);

      delete props.linkOffset;
      var _state = this.state,
          focus = _state.focus,
          height = _state.height,
          mouseActive = _state.mouseActive,
          paths = _state.paths,
          width = _state.width;
      var intl = this.context.intl;

      var classes = (0, _classnames6.default)(CLASS_ROOT, (0, _defineProperty3.default)({}, CLASS_ROOT + '--focus', focus), className);

      var colorKeys = [];
      var colors = {};
      links.forEach(function (link) {
        if (link.colorIndex && !colors[link.colorIndex]) {
          colorKeys.push(_react2.default.createElement('div', { key: link.colorIndex,
            className: BACKGROUND_COLOR_INDEX + '-' + link.colorIndex }));
          colors[link.colorIndex] = true;
        }
      });

      var topologyMessage = a11yTitle || _Intl2.default.getMessage(intl, 'Topology');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ ref: function ref(_ref4) {
            return _this7._topologyRef = _ref4;
          } }, props, { className: classes,
          'aria-label': topologyMessage, tabIndex: '0', role: 'group',
          onMouseDown: function onMouseDown(event) {
            _this7.setState({ mouseActive: true });
            if (_onMouseDown) {
              _onMouseDown(event);
            }
          },
          onMouseUp: function onMouseUp(event) {
            _this7.setState({ mouseActive: false });
            if (_onMouseUp) {
              _onMouseUp(event);
            }
          },
          onFocus: function onFocus(event) {
            if (mouseActive === false) {
              _this7.setState({ focus: true });
            }
            if (_onFocus) {
              _onFocus(event);
            }
          },
          onBlur: function onBlur(event) {
            _this7.setState({ focus: false });
            if (_onBlur) {
              _onBlur(event);
            }
          } }),
        _react2.default.createElement(
          'svg',
          { className: CLASS_ROOT + '__links', role: 'presentation',
            width: width, height: height, viewBox: '0 0 ' + width + ' ' + height,
            preserveAspectRatio: 'xMidYMid meet' },
          paths
        ),
        _react2.default.createElement(
          'div',
          { ref: function ref(_ref3) {
              return _this7._contentsRef = _ref3;
            },
            className: CLASS_ROOT + '__contents',
            onMouseMove: this._onMouseMove,
            onMouseLeave: this._onMouseLeave },
          children
        ),
        _react2.default.createElement(
          'div',
          { className: CLASS_ROOT + '__color-key', role: 'presentation' },
          colorKeys
        )
      );
    }
  }]);
  return Topology;
}(_react.Component);

Topology.displayName = 'Topology';
exports.default = Topology;


Topology.contextTypes = {
  intl: _react.PropTypes.object
};

Topology.propTypes = {
  a11yTitle: _react.PropTypes.string,
  links: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    colorIndex: _react.PropTypes.string,
    ids: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
  })),
  linkOffset: _react.PropTypes.number
};

Topology.defaultProps = {
  links: [],
  linkOffset: 18
};

Topology.Parts = Parts;
Topology.Part = Part;
Topology.Label = Label;
module.exports = exports['default'];