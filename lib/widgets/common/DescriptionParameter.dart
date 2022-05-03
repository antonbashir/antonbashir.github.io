import 'package:cv/theme/Theme.dart';
import 'package:flutter/material.dart';

class DescriptionParameter extends StatelessWidget {
  final name;
  final value;

  const DescriptionParameter({
    Key? key,
    required this.name,
    required this.value,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) => Padding(
        padding: EdgeInsets.symmetric(vertical: Spacings.MEDIUM),
        child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
          Text(
            name,
            style: Theme.of(context).textTheme.displaySmall,
          ),
          value,
        ]),
      );
}
