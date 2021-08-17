document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.collapsible.expandable.documents');
    var instancedocs = M.Collapsible.init(elem, {
        accordion: false
    });

    var elem = document.querySelector('.collapsible.expandable.forms');
    var instanceforms = M.Collapsible.init(elem, {
        accordion: false
    });
 });