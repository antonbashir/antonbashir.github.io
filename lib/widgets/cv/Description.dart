import 'package:cv/theme/Theme.dart';
import 'package:cv/widgets/common/CardContent.dart';
import 'package:flutter/material.dart';

class Description extends StatelessWidget {
  const Description({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: CardContent(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.asset("assets/photo.jpg", width: 250, height: 250),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(children: [
                  Padding(
                    padding: EdgeInsets.all(Spacings.SMALL),
                    child:
                        Chip(avatar: Icon(Icons.description), label: Text("CV"), backgroundColor: ThemeColors.PRIMARY),
                  ),
                  Text("Bashirov Anton Stanislavovich", style: Theme.of(context).textTheme.displayLarge)
                ]),
                DescriptionParameter(
                  name: "Gender: ",
                  value: Icon(Icons.male, size: 24),
                ),
                DescriptionParameter(
                  name: "Age: ",
                  value: Text("24", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Birthdate: ",
                  value: Text("23 June 1997", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Contact: ",
                  value: Text("+7(977)1186919", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Email: ",
                  value: Text("anton.sh.local@gmail.com", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Telegram: ",
                  value: Text("https://t.me/a_bashirov", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Reside in: ",
                  value: Text("Moscow", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Relocation: ",
                  value: Text("Ready to relocate, ready for business trips",
                      style: Theme.of(context).textTheme.displaySmall),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

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
          Text(name, style: Theme.of(context).textTheme.displaySmall),
          value,
        ]),
      );
}
