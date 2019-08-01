/**
 * @file mip-ppkao-showlist 组件
 * @author
 */
export default class MIPExample extends MIP.CustomElement {
  build () {
    let $ = require('zepto')
    let customElement = require('customElement').create()

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
      let ele = this.element
      let closetext = ele.dataset.closetext
      let showmore = $(ele)
      let button = showmore.find('.toggle')
      let opentext = button.text()
      if (showmore.find('ul li').length <= 6) {
        button.hide()
      }
      button.on('click', function () {
        showmore.find('ul li:nth-of-type(n+7)').toggle(400)
        if (button.hasClass('active')) {
          button.removeClass('active')
          button.text(opentext)
        } else {
          button.addClass('active')
          button.text(closetext)
        }
      })
    }

    return customElement
  }
}