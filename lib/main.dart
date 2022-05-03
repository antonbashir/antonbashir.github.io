import 'package:flutter/material.dart';

void main() {
  runApp(const Resume());
}

class Resume extends StatelessWidget {
  const Resume({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Resume',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const ResumePage(),
    );
  }
}

class ResumePage extends StatelessWidget {
  const ResumePage();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Column(),
    ));
  }
}
