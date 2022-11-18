class ControlsCommands {
  constructor(channel) {
    this.channel = channel;
  }

  onTextChange(el) {
    const elem = $(el);
    const target = elem.attr('data-target');
    const value = elem.val();

    if (!elem.length) { throw 'ControlsCommands: no element is found' }
    if (!target.length) { throw 'ControlsCommands: no target is found' }
    if (!value.length) { throw 'ControlsCommands: text value not found' }

    this.channel.broadcast(
      'onTextChange',
      {
        target: target,
        value: value
      }
    )
  }

  onToggle(el) {
    const elem = $(el);
    const toggleStatus = elem.attr('data-toggle-status');
    const toggleOnText = elem.attr('data-toggle-on');
    const toggleOffText = elem.attr('data-toggle-off');

    if (toggleStatus === '1') {
      elem.text(toggleOffText);
      elem.attr('data-toggle-status', 0);
    } else {
      elem.text(toggleOnText);
      elem.attr('data-toggle-status', 1);
    }
  }

  onToggleSlideUpDown(el) {
    const elem = $(el);
    const target = elem.attr('data-target');
    const value = elem.attr('data-value');

    if (!elem.length) { throw 'ControlsCommands: no element is found' }
    if (!target.length) { throw 'ControlsCommands: no target is found' }
    if (!value.length) { throw 'ControlsCommands: text value not found' }

    this.channel.broadcast(
      'onToggleSlideUpDown',
      {
        target: target,
        value: value,
        toggleStatus: elem.attr('data-toggle-status')
      }
    )
  }
}
