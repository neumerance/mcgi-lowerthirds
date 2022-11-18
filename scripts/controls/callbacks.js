class ControlsCallbacks {
  onTextChange(params) {
    const target = $(params.target);
    target.text(params.value);
  }
}
