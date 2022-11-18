class ControlsCallbacks {
  onTextChange(params) {
    const target = $(params.target);
    target.text(params.value);
  }

  onToggleSlideUpDown(params) {
    const animator = new ControlsAnimation(params.target)
    animator.toggleSlideUpDown(params.value, params.toggleStatus);
  }
}
