/// <reference path="angular.min.js" />
var myapp = angular.module("Mymodule",[])
                   .controller("mycontroller", function ($scope) {
                       var country = {
                           countryname: "INDIA",
                           countrycapital: "Delhi",
                       countryflag: "/Resources/BHARATMATA.jpg"
                   };
                        var employee = {
                            firstname:"Your name",
                            lastname:"Your lastname",
                            gender:"Your Gender"
                        };
                        var classe = [
                            { Class:1,Teacher:"Hamsika,Devansi", Capacity:60 },
                            { Class:2,Teacher:"thanmayee", Capacity: 60 },
                            { Class:3,Teacher:"Prathap", Capacity: 60 },
                            { Class:4,Teacher:"manu", Capacity:60 },
                            { Class: 3, Teacher: "Hanimi", Capacity: 60 },
                            { Class: 4, Teacher: "bujji", Capacity: 60 },
                            { Class: 5, Teacher: "jaggu", Capacity: 60 },
                            { Class: 6, Teacher: "hari", Capacity: 60 },
                            { Class: 7, Teacher: "jaggu", Capacity: 60 },
                            { Class: 8, Teacher: "bujji,hari,jaggu", Capacity: 60 },
                            { Class: 9, Teacher: "bujji,hari,jaggu,manui", Capacity: 60 },
                            { Class: 10, Teacher: "bujji,hari,jaggu,manu,prathap,hanimi", Capacity: 60 }
                        ];
                        var map1 = [
 {
     name: "2016 10th toppers",
     cities: [
         { name: "bhasker" },
         { name: "lakshmi" },
         { name: "sri" }
     ]
 },
 {
     name: "2015 10th toppers",
     cities: [
         { name: "Raghu" },
         { name: "vibhav" },
         { name: "Rathod" }
     ]
 },
 {
     name: "2014 10th toppers",
     cities: [
      { name: "Ramu" },
      { name: "Somu" },
      { name: "Neeraj" }
     ]
 }
                        ];
                        var technologies = [
                                { name: "c#", Like: 0, Dislike: 0 },
                                { name: "ASP.Net", Like: 0, Dislike: 0 },
                                { name: "javaScript", Like: 0, Dislike: 0 },
                                { name: "AngulatJS", Like: 0, Dislike: 0 }
                        ];
                        $scope.technologies = technologies;
                        $scope.technologylike = function (technology) {
                            technology.Like++;
                        };
                        $scope.technologydislike = function (technology) {
                            technology.Dislike++;
                        };
                        $scope.Limit = 3;
                     $scope.message="My angularjs application";
                     $scope.employee = employee;
                     $scope.country = country;
                     $scope.classe = classe;
                     $scope.map1 = map1;
                     $scope.rowlimit = 3;
                   });
                   
