define(['angular'], function (angular) {
    "use strict";

    var userResource = angular.module('resources.user', []);

    userResource.filter('getFullName', function () {
        return function (meta)  {
            if (meta) {
                return meta.first_name + ' ' + meta.last_name;
            }
            return "";
        };
    });

    userResource.filter('getAvatar', function () {
        return function (profile_img_url)  {
            return profile_img_url;
        };
    });

    userResource.factory('userResource', ['$http', function ($http) {
        var priv = {
            baseUrl: "/api/users"
        };

        var exports = {
            defaults: {
                //"id": 
                "username": "",
                "email": "",
                "password": "",
                "group_id":  2,
                "status":  "pending",
                "meta": {
                    "first_name": "", 
                    "last_name": "",
                    "company": "",
                    "phone": "",
                    "website_url": "",
                    "address": "",
                    "city": "",
                    "province": "", 
                    "postal": "",
                    "country": ""
                },
                "billing": {
                    "credit_card_name": "",
                    "credit_card_num": "",
                    "credit_card_type": "",
                    "credit_card_expiry_month": "",
                    "credit_card_expiry_year": "",
                    "credit_card_ccv": "",
                    "same_as_profile": 0,
                    "address": "",
                    "city": "",
                    "province": "",
                    "postal": "",
                    "country": ""
                }/*,
                "twitter_oauth_token": {
                    "request_token": "",
                    "access_token": "",
                    "updated_at": "",
                    "created_at": "",
                    "expired_at": ""
                },
                "facebook_oauth_token": {
                    "AccessToken": "",
                    "RefreshToken": "",
                    "Expiry": "",
                    "Extra": ""
                }, 
                "instagram_oauth_token": {
                    "AccessToken": "",
                    "RefreshToken": "",
                    "Expiry": "",
                    "Extra": ""
                }*/
                //"updated_at":  
                //"created_at": 
            },
            find: function (params) {
                return $http.get(priv.baseUrl, {params: params});
            },
            create: function (params) {
                return $http.post(priv.baseUrl, params);
            },
            getMe: function () {
                return $http.get(priv.baseUrl + "/me");
            },
            get: function (id, params) {
                return $http.get(priv.baseUrl + "/" + id, {params: params});
            },
            updateMe: function (params) {
                return $http.put(priv.baseUrl + "/me", params);
            },
            update: function (id, params) {
                return $http.put(priv.baseUrl +  "/" +id, params);
            },
            delete: function (id) {
                return $http.delete(priv.baseUrl +  "/" +id);
            }
        };

        return exports; 
    }]);

    return userResource;
});
