function spread(count) {
    var checkbox = document.getElementById('folder-checkbox-' + count);
    var icon = document.getElementById('spread-icon-' + count);
    
    if (checkbox.checked) {
        checkbox.checked = false;
        icon.innerHTML = 'chevron_right';
    } else {
        checkbox.checked = true;
        icon.innerHTML = 'expand_more';
    }
}