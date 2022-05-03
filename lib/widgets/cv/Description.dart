import 'package:cv/theme/Theme.dart';
import 'package:cv/widgets/common/CardContent.dart';
import 'package:cv/widgets/common/DescriptionParameter.dart';
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
                Text("Software Developer", style: Theme.of(context).textTheme.displayMedium),
                DescriptionParameter(
                  name: "Gender: ",
                  value: Icon(Icons.male, size: 24),
                ),
                DescriptionParameter(
                  name: "Age: ",
                  value: SelectableText("24", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Birthdate: ",
                  value: SelectableText("23 June 1997", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Contact: ",
                  value: SelectableText("+7(977)1186919", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Email: ",
                  value: SelectableText("anton.sh.local@gmail.com", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Telegram: ",
                  value: SelectableText("https://t.me/a_bashirov", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Reside in: ",
                  value: SelectableText("Moscow", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Relocation: ",
                  value: SelectableText("Ready to relocate, ready for business trips",
                      style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Employment: ",
                  value: SelectableText("Full Time", style: Theme.of(context).textTheme.displaySmall),
                ),
                DescriptionParameter(
                  name: "Work schedule: ",
                  value: SelectableText("Full Day", style: Theme.of(context).textTheme.displaySmall),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
