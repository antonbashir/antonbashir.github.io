import 'package:flutter/material.dart';

import '../../theme/Theme.dart';

class CardContent extends StatelessWidget {
  final Widget child;
  final double? padding;

  const CardContent({Key? key, required this.child, this.padding}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(padding: EdgeInsets.all(padding ?? Spacings.LARGE), child: child);
  }
}
