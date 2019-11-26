/**
 * A small helper function to scroll a webpage to the bottom.
 *
 * Helpful for triggering lazy loading images (or anything using scroll based
 * observation)
 *
 * @param {options.frequency} 100 - How many scroll increments
 * @param {options.timing} 8 - The amount of ms to pause between scroll increments
 * @param {options.remoteWindow} `window` - The browsers `window` object
 */
function scrollToBottom({
  frequency = 100,
  timing = 8,
  remoteWindow = window
} = {}) {
  let resolve;
  let scrolls = 1;
  let deferred = new Promise(r => (resolve = r));
  let totalScrolls = remoteWindow.document.body.scrollHeight / frequency;

  function scroll() {
    let scrollBy = totalScrolls * scrolls;
    remoteWindow.setTimeout(() => {
      remoteWindow.scrollTo(0, scrollBy);

      if (scrolls < frequency) {
        scrolls += 1;
        scroll();
      }

      // resolve the pending  once we've finished scrolling the page
      if (scrolls === frequency) resolve(true);
    }, timing);
  }

  scroll();

  return deferred;
}

module.exports = scrollToBottom;
