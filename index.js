/**
 * A small helper function to scroll a webpage to the bottom.
 *
 * Helpful for triggering lazy loading images (or anything using scroll based
 * observation)
 *
 * @param {options.frequency} 100 - How many scroll increments
 * @param {options.timing} 8 - The amout of ms to pause between scroll increments
 */
function scrollToBottom({ frequency = 100, timing = 8 } = {}) {
  let resolve;
  let scrolls = 1;
  let deferred = new Promise(r => (resolve = r));
  let totalScrolls = document.body.scrollHeight / frequency;

  function scroll() {
    let scrollBy = totalScrolls * scrolls;

    window.setTimeout(() => {
      window.scrollTo(0, scrollBy);

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
