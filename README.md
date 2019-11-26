# Scroll To Bottom

A small promise aware helper function to scroll a webpage to the bottom. This
can be helpful for triggering lazy loading images (or anything using scroll
based observation).

## Usage

Once the function is included in the browser, you can use `scrollToBottom` with
the defaults, or pass options:

``` javascript
scrollToBottom();
scrollToBottom({ frequency: 50, timing: 5 });
```

### Options

- `options.frequency` (default: 100) - How many scroll increments
- `options.timing` (default: 8) - The amout of ms to pause between scroll
  increments
- `options.remoteWindow` (default: `window`) - The browsers `window` object. Can
  be handly for test runners like Cypress, which run the subjects test in a
  remote iframe
