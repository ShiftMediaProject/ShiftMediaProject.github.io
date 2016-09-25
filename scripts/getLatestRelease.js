$.fn.getLatestRelease = function(repo) {
    if( document.getElementById(repo+'ID') != null ) {
        $.ajax( {
            url : 'https://api.github.com/repos/ShiftMediaProject/'+repo+'/releases/latest',
            dataType : 'jsonp',
            success : function ( returndata ) {
                $(returndata.data).each(function() {
                    var link = '<a href="'+this.html_url+'releases/latest">'+this.name+'</a>';
                    $('#'+repo+'ID').html(link);
                });
            }
        });
    }
}