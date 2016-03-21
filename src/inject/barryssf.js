var header = document.getElementsByClassName('page-header')[0]
var siteNumber = location.search.split('site=')[1]
var switchClassUrl = siteNumber === '21' ?
  'http://www.barrysbootcamp.com/reserve/index.cfm?action=Reserve.chooseClass&site=15' :
'http://www.barrysbootcamp.com/reserve/index.cfm?action=Reserve.chooseClass&site=21'
var switchClassName = siteNumber === '21' ?
  'SOMA' :
  'Marina'
var switchClassButton = `<div class="switch-class"><span class="switch-class-button"><a href="${switchClassUrl}">Switch to ${switchClassName}</a></span></div>`
header.insertAdjacentHTML('afterend', switchClassButton)

let classNameElements = document.getElementsByClassName('scheduleClass')

Array.prototype.forEach.call(classNameElements, function (classNameElement) {
  classNameElement.childNodes[0].insertAdjacentHTML('beforeBegin', 'Shoulders & ')
})
