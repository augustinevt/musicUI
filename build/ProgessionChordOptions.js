"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = ProgressionChordOptions = function ProgressionChordOptions(_ref) {
  var onKeyChange = _ref.onKeyChange,
      onModeChange = _ref.onModeChange,
      onSubmit = _ref.onSubmit;
  return _react["default"].createElement("div", null, _react["default"].createElement("select", {
    onChange: onKeyChange
  }, _react["default"].createElement("option", {
    value: "A"
  }, "A"), _react["default"].createElement("option", {
    value: "B"
  }, "B"), _react["default"].createElement("option", {
    value: "C"
  }, "C"), _react["default"].createElement("option", {
    value: "D"
  }, "D"), _react["default"].createElement("option", {
    value: "E"
  }, "E"), _react["default"].createElement("option", {
    value: "F"
  }, "F"), _react["default"].createElement("option", {
    value: "g"
  }, "G")), _react["default"].createElement("select", {
    onChange: onModeChange
  }, _react["default"].createElement("option", {
    value: "ionian"
  }, "Ionian"), _react["default"].createElement("option", {
    value: "dorian"
  }, "Dorian"), _react["default"].createElement("option", {
    value: "locrian"
  }, "Locrian"), _react["default"].createElement("option", {
    value: "phrygian"
  }, "Phrygian"), _react["default"].createElement("option", {
    value: "mixolydian"
  }, "mixolydian"), _react["default"].createElement("option", {
    value: "aeolian"
  }, "Aeolian"), _react["default"].createElement("option", {
    value: "lydian"
  }, "Lydian")), _react["default"].createElement("button", {
    onClick: onSubmit
  }, " getRandomProgression "));
};

exports["default"] = _default;