/**
 * Created by dhiraj on 09/01/2017.
 */
var axios  = require('axios');
function getRepos(username){
return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username){
    return axios.get('https://api.github.com/users/' + username);
}
var helpers = {
    getGitHubInfo : function(username){
        return axios.all([getRepos(username),getUserInfo(username)])
            .then(function(arr){
                console.log(" data coming back = "+ arr[0].data);
                return {
                    repos:arr[0].data,
                    bio:arr[1].data
                }
            })
    }
}
module.exports = helpers;