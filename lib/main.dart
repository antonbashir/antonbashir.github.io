import 'package:cv/theme/Theme.dart';
import 'package:cv/widgets/cv/Description.dart';
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
      darkTheme: DARK_THEME,
      debugShowCheckedModeBanner: false,
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
      child: SizedBox(
        width: MediaQuery.of(context).size.shortestSide,
        height: MediaQuery.of(context).size.shortestSide,
        child: Column(children: [Description()]),
      ),
    ));
  }
}
