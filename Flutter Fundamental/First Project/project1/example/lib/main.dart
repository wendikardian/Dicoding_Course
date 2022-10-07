import 'package:flutter/material.dart';
void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title : 'Flutter Demo',
      theme : ThemeData(
        primarySwatch : Colors.blue,
      ),
      home : FirstScreen(),
    );
  }
}

class Heading extends StatelessWidget{
  final String text;
  Heading({required this.text});
  @override
  Widget build(BuildContext context){
    return Text(
      text,
      style : TextStyle(
        fontSize : 32.0,
        fontWeight : FontWeight.bold
      ),

    );
  }
}

class BiggerText extends StatefulWidget{
  final String text;

  const BiggerText({required this.text});

  @override
  _BiggerTextState createState() => _BiggerTextState();
}

class _BiggerTextState extends State<BiggerText>{
  double _textSize = 16.0;
  @override
  Widget build(BuildContext context){
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children : <Widget>[
        Text(widget.text, style : TextStyle(fontSize: _textSize)),
        ElevatedButton(
          child : Text("Perbesar"),
          onPressed : (){
            setState(() {
              _textSize = 32.0;
            });
          },
        )
      ],
    );
  }
} 

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(
            Icons.menu,
            color: Colors.white,
          ),
          onPressed : (){},
        ),
        title : Text('Wendi`s APP'),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.search, 
              color: Colors.white
            ),
            onPressed: (){             
            }
          )
        ],
        ),
        body: Container(
          child: Text('Welcome, How are You ?', style : TextStyle(fontSize: 23)),
          padding: EdgeInsets.all(10),
          margin: EdgeInsets.all(20),
          width: double.infinity,
          decoration: BoxDecoration(
            color: Color.fromARGB(255, 253, 253, 253),
            border : Border.all(
              width : 2,
              color: Color.fromARGB(255, 0, 0, 0)
            ),
            borderRadius : BorderRadius.all(Radius.circular(20)),
            boxShadow : [
              BoxShadow(
                color : Colors.black,
                offset : Offset(3,6),
                blurRadius : 3,
                )
            ]
          ),
        ),
        
        floatingActionButton: FloatingActionButton(
          child: Icon(Icons.add),
          onPressed : (){}
      ),
   
    );
  }
}