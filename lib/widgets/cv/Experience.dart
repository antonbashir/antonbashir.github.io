import 'package:cv/theme/Theme.dart';
import 'package:cv/widgets/common/CardContent.dart';
import 'package:cv/widgets/common/DescriptionParameter.dart';
import 'package:flutter/material.dart';

class Experience extends StatelessWidget {
  const Experience({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: CardContent(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Work experience - 6 years and 6 months", style: Theme.of(context).textTheme.displayLarge),
                Column(
                  children: [
                    JobRostelecom(),
                  ],
                ),
                Divider(),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class JobRostelecom extends StatelessWidget {
  const JobRostelecom({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Chip(
            label: Text("Rostelecom IT", style: Theme.of(context).textTheme.displayMedium),
            backgroundColor: ThemeColors.PRIMARY),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text("February 2018 — till now 4 years 1 month", style: Theme.of(context).textTheme.displaySmall),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Container(
            color: ThemeColors.GREYSCALE.shade90,
            padding: EdgeInsets.all(Spacings.LARGE),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text("Repository of artifacts", style: Theme.of(context).textTheme.displayMedium),
              Divider(),
              DescriptionParameter(
                  name: "Role: ",
                  value: SelectableText("Architect & Developer", style: Theme.of(context).textTheme.displaySmall)),
              DescriptionParameter(
                  name: "Environment: ",
                  value: SelectableText("Kotlin, ktor, netty, tarantool, dart, flutter, gradle, Nexus API, MINIO API",
                      style: Theme.of(context).textTheme.displaySmall)),
            ]),
          ),
        ),
      ],
    );
  }
}
