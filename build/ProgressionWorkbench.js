"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ChordCard = _interopRequireDefault(require("./ChordCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n  width: 100%;\n  padding: 10px;\n  color: orange;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var ButtonRow = _styledComponents["default"].div(_templateObject2());

var Button = _styledComponents["default"].div(_templateObject3());

var _default = function _default(_ref) {
  var chords = _ref.chords,
      activeIndex = _ref.activeIndex,
      play = _ref.play,
      stop = _ref.stop,
      getKeyChords = _ref.getKeyChords,
      changeChord = _ref.changeChord,
      removeChord = _ref.removeChord,
      addChord = _ref.addChord;
  console.log('->', activeIndex);
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(ButtonRow, null, _react["default"].createElement(Button, {
    onClick: function onClick() {
      return play();
    }
  }, " play "), _react["default"].createElement(Button, {
    onClick: function onClick() {
      return stop();
    }
  }, " stop ")), !chords || chords.length === 0 ? _react["default"].createElement("span", null, " No Current Chords ") : chords.map(function (chordName, i) {
    return _react["default"].createElement(_ChordCard["default"], {
      index: i,
      active: activeIndex === i,
      changeChord: changeChord,
      addChord: addChord,
      getKeyChords: getKeyChords,
      chordName: chordName,
      removeChord: removeChord
    });
  }));
};

exports["default"] = _default;