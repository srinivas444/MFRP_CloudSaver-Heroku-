 $(document).ready(  
    function(){
        $("#app-rename-input").click(function () {
            $(".editing-mode-single2").show("fast");
        });
         $(".btn-cancel").click(function(){
        $(".editing-mode-single2").hide();
         });
          $(".reveal-config-vars-single2").click(function(){
        $(".config-vars-list-single2").show();
         });

    });