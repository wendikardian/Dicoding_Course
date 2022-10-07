 import "package:flutter/material.dart";
 
 void main() => runApp(myApp());

 class myApp extends StatelessWidget{
    @override
    Widget build (BuildContext context){
      return MaterialApp{
        title : 'Flutter Chat UI',
        debugShowCheckedModeBanner : false,
        theme : ThemeData{
          primaryColor : Colors.red,
          accentColor : Colors.{0xFFFEF9EB},
        },
        home : HomeScreen(),
      }
      
    }
 }