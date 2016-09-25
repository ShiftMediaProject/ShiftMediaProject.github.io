$.fn.getLatestRelease = function(repo) {
    if( document.getElementById(repo+'ID') != null ) {
        var hasStorage = ("sessionStorage" in window && window.sessionStorage),
        storageKey = repo+'Version',
        now, expiration, data = false;
        try {
            if (hasStorage) {
                data = sessionStorage.getItem(storageKey);
                if (data) {
                    data = JSON.parse(data);
                    now = new Date();
                    expiration = new Date(data.timestamp);
                    expiration.setMinutes(expiration.getMinutes() + 60);
                    if (now.getTime() > expiration.getTime()) {
                        data = false;
                        sessionStorage.removeItem(storageKey);
                    }
                }
            }
        } catch (e) {
            data = false;
        }
     
        if (data) {
            updateVersion(repo, data.html_url, data.name);
        } else {
            $.ajax( {
                url : 'https://api.github.com/repos/ShiftMediaProject/'+repo+'/releases/latest',
                dataType : 'jsonp',
                success : function ( returndata ) {
                    if (returndata.data.html_url.length > 0) {
                        if (hasStorage) {
                            try {
                                sessionStorage.setItem(storageKey, JSON.stringify({
                                    timestamp: new Date(),
                                    html_url: returndata.data.html_url,
                                    name: returndata.data.name
                                }));
                            } catch (e) {}
                        }
                        updateVersion(repo, returndata.data.html_url, returndata.data.name);
                    }
                }
            });
        }
    }
};

function updateVersion(repo, html_url, name) {
    var link = '<a href="'+html_url+'/releases/latest">'+name+'</a>';
    $('#'+repo+'ID').html(link);
}