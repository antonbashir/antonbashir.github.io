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
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text("Work experience - 6 years and 6 months", style: Theme.of(context).textTheme.displayLarge),
                Divider(),
                SizedBox(
                    height: MediaQuery.of(context).size.height * 0.5,
                    child: SingleChildScrollView(
                        child: Column(
                      children: [
                        JobRostelecom(),
                        Divider(),
                      ],
                    ))),
              ]),
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
          padding: EdgeInsets.all(Spacings.MEDIUM),
          child: Text("February 2018 — till now 4 years 1 month", style: Theme.of(context).textTheme.displaySmall),
        ),
        Padding(
          padding: EdgeInsets.all(Spacings.MEDIUM),
          child: Container(
            color: ThemeColors.GREYSCALE.shade90,
            padding: EdgeInsets.all(Spacings.LARGE),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text("Repository of artifacts", style: Theme.of(context).textTheme.displayMedium),
              Divider(),
              DescriptionParameter(
                  name: "Role: ",
                  value: SelectableText("Architect & Developer", style: Theme.of(context).textTheme.displaySmall)),
              SizedBox(
                width: MediaQuery.of(context).size.width * 0.5,
                child: Wrap(runSpacing: Spacings.MEDIUM, spacing: Spacings.MEDIUM, children: [
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Kotlin")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("ktor")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("netty")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("dart")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("gradle")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("flutter")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Nexus API")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("MINIO API")),
                ]),
              )
            ]),
          ),
        ),
        Padding(
          padding: EdgeInsets.all(Spacings.MEDIUM),
          child: Container(
            color: ThemeColors.GREYSCALE.shade90,
            padding: EdgeInsets.all(Spacings.LARGE),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text("Import Replacement", style: Theme.of(context).textTheme.displayMedium),
              Divider(),
              DescriptionParameter(
                  name: "Role: ",
                  value: SelectableText("Architect & Developer", style: Theme.of(context).textTheme.displaySmall)),
              SizedBox(
                width: MediaQuery.of(context).size.width * 0.5,
                child: Wrap(runSpacing: Spacings.MEDIUM, spacing: Spacings.MEDIUM, children: [
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Native specific CPU architecture (Assembler)")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("CLion")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("GCC")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("GDB")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Clang")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Java")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Groovy")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Scala")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Kotlin")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Python")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("FFmpeg")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Kurento Media Server")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("GStreamer")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("MongoDB")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Redis")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Native Coroutines (fcontext, ucontext)")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Linux")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Reindexer")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("TypeScript")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("MeteorJS")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("ReactJS")),
                  Chip(
                      side: BorderSide(color: ThemeColors.TERTIARY),
                      backgroundColor: ThemeColors.GREYSCALE.shade90,
                      label: Text("Ruby")),
                ]),
              )
            ]),
          ),
        ),
      ],
    );
  }
}
