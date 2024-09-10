document.addEventListener("DOMContentLoaded", function() {
    var coll = document.querySelectorAll(".collapsible");
    
    coll.forEach(function(button) {
        button.addEventListener("click", function() {
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
