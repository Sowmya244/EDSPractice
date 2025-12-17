/* eslint-disable import/no-cycle, import/no-unresolved */

let expMod;
const DA_EXP = '/public/plugins/exp/exp.js';
const NX_ORIGIN = window.location.origin;

async function toggleExp() {
  const exists = document.querySelector('#aem-sidekick-exp');

  if (!exists) {
    expMod = await import(`${NX_ORIGIN}${DA_EXP}`);
    return;
  }

  if (!expMod) {
    expMod = await import(`${NX_ORIGIN}${DA_EXP}`);
  }

  expMod.default();
}

(async function sidekick() {
  const sk = document.querySelector('aem-sidekick');
  if (!sk) return;
  sk.addEventListener('custom:experimentation', toggleExp);
}());
