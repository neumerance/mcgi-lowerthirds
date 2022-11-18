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
}
