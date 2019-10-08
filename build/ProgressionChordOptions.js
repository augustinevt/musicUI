"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n  /* width: 100%; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject());

var Select = _styledComponents["default"].select(_templateObject2());

var Wrapper = _styledComponents["default"].div(_templateObject3());

var _default = function _default(_ref) {
  var onKeyChange = _ref.onKeyChange,
      onModeChange = _ref.onModeChange,
      onTempoChange = _ref.onTempoChange,
      onSubmit = _ref.onSubmit;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(Select, {
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
    value: "G"
  }, "G")), _react["default"].createElement(Select, {
    onChange: onTempoChange
  }, _react["default"].createElement("option", {
    value: "80"
  }, "80"), _react["default"].createElement("option", {
    value: "120"
  }, "120"), _react["default"].createElement("option", {
    value: "180"
  }, "180")), _react["default"].createElement(Select, {
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
  }, "Lydian")), _react["default"].createElement(Button, {
    onClick: onSubmit
  }, " getRandomProgression "));
};

exports["default"] = _default;