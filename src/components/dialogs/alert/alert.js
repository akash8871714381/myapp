import $_alert from './alert.hbs';
import mustache from 'mustache';
import Box from '../box/box';

/**
 * Shows alert box with title and message.
 * @param {String} title 
 * @param {String} message 
 */
export default function alert(title, message) {
  const box = Box(title, mustache.render($_alert, {
    message
  }));

  box.$mask.onclick = box.hide;
  box.$body.onclick = clickHandler;
  box.render();

  /**
   * 
   * @param {MouseEvent} e 
   */
  function clickHandler(e) {
    const $target = e.target;
    if (!($target instanceof HTMLElement)) return;
    const action = $target.getAttribute("action");
    if (!action) return;

    if (action === "ok") box.hide();
  }
}