"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ChordBuilder = _interopRequireDefault(require("./ChordBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n  /* height: 100px; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.active ? 'red' : 'grey';
});

var ChordMenu = _styledComponents["default"].div(_templateObject2());

var _default = function _default(_ref) {
  var chordName = _ref.chordName,
      active = _ref.active,
      getKeyChords = _ref.getKeyChords,
      changeChord = _ref.changeChord,
      addChord = _ref.addChord,
      removeChord = _ref.removeChord,
      index = _ref.index;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      changeOpen = _useState2[0],
      toggleChange = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      addOpen = _useState4[0],
      toggleAdd = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      inKeyOnly = _useState6[0],
      toggleInKeyOnly = _useState6[1];

  var chordMenu = null;
  console.log('-> ->', active);

  if (inKeyOnly) {
    var ChordSelection = getKeyChords();
    chordMenu = Object.keys(ChordSelection).map(function (chordName) {
      var params = {
        name: chordName,
        index: index,
        notes: ChordSelection[chordName]
      };

      var onClick = function onClick() {
        toggleChange(false);
        toggleAdd(false);
        changeOpen ? changeChord(params) : addChord(params);
      };

      return _react["default"].createElement("div", {
        onClick: onClick
      }, " ", chordName, " ");
    });
  } else {
    var handler = function handler(chordName) {
      var params = {
        name: chordName,
        index: index
      };
      toggleChange(false);
      toggleAdd(false);
      changeOpen ? changeChord(params) : addChord(params);
    };

    chordMenu = _react["default"].createElement(_ChordBuilder["default"], {
      handler: handler
    });
  }

  return _react["default"].createElement(Wrapper, {
    active: active
  }, chordName, _react["default"].createElement("button", {
    onClick: function onClick() {
      return removeChord(index);
    }
  }, " Remove "), _react["default"].createElement("button", {
    onClick: function onClick() {
      return toggleInKeyOnly(!inKeyOnly);
    }
  }, " In Key only "), !changeOpen && !addOpen ? _react["default"].createElement("div", null, _react["default"].createElement("button", {
    onClick: function onClick() {
      return toggleChange(true);
    }
  }, " Change "), _react["default"].createElement("button", {
    onClick: function onClick() {
      return toggleAdd(true);
    }
  }, " Add ")) : _react["default"].createElement(ChordMenu, null, chordMenu));
};

exports["default"] = _default;