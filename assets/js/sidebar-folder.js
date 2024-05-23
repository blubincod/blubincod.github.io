function spread(count){
    document.getElementById('folder-checkbox-' + count).checked = 
    !document.getElementById('folder-checkbox-' + count).checked
    document.getElementById('spread-icon-' + count).innerHTML = 
    document.getElementById('spread-icon-' + count).innerHTML == 'chevron_right' ?
    'keyboard_arrow_down' : 'chevron_right'
  }