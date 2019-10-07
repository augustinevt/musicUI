"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ChordCard = _interopRequireDefault(require("./ChordCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

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
  return _react["default"].createElement(Wrapper, null, !chords || chords.length === 0 ? _react["default"].createElement("span", null, " No Current Chords ") : chords.map(function (chordName, i) {
    return _react["default"].createElement(_ChordCard["default"], {
      index: i,
      active: activeIndex === i,
      changeChord: changeChord,
      addChord: addChord,
      getKeyChords: getKeyChords,
      chordName: chordName,
      removeChord: removeChord
    });
  }), _react["default"].createElement("button", {
    onClick: function onClick() {
      return play();
    }
  }, " play "), _react["default"].createElement("button", {
    onClick: function onClick() {
      return stop();
    }
  }, " stop "));
};

exports["default"] = _default;