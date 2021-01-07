// $(document).ready(function() {
//     // $('select').val([1]);
//     $('select').formSelect();
//     $('select.select_all').siblings('ul').prepend('<li id=sm_select_all><span>Select All</span></li>');
//     $('li#sm_select_all').on('click', function () {
//       var jq_elem = $(this), 
//           jq_elem_span = jq_elem.find('span'),
//           select_all = jq_elem_span.text() == 'Select All',
//           set_text = select_all ? 'Select None' : 'Select All';
//       jq_elem_span.text(set_text);
//       jq_elem.siblings('li').filter(function() {
//         return $(this).find('input').prop('checked') != select_all;
//       }).click();
//     });
// })

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options = {}
    var instances = M.FormSelect.init(elems, options);
    var selected = document.querySelector('select');
    var instance = M.FormSelect.getInstance(selected);
    console.log('selected', instance);
    var dropdown = instance.dropdown;
    var li = document.createElement("li");
    li.setAttribute("id", "sm_select_all")
    var span = document.createElement("span")
    span.innerHTML = 'select all'
    li.appendChild(span);
    var ul = dropdown.dropdownEl;
    console.log('li', li);
    var allFragment = document.createDocumentFragment();
     li.addEventListener('click', function() {
      var all_ul = this.parentNode;
      console.log('all_ul', all_ul);
       var all_li = all_ul.querySelectorAll('*[id^=select-options]');
       console.log('all_li', all_li);
       var filtered = Array.from(all_li).filter(li => li.checked != true)
       console.log('filtered', filtered);
       filtered.map(i => i.click());
    })
    allFragment.appendChild(li)
    ul.insertAdjacentElement('afterbegin', li)
   
  });
