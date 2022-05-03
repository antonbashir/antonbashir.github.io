import 'package:flutter/material.dart';

final _defaultDark = ThemeData.dark();

const FONT_FAMILY = "Inter";

const SPLASH_RADIUS = 16.0;

const TOAST_POSITION = 24.0;

const PROGRESS_STROKE_WIDTH = 1.0;

class ThemeColors {
  static final PRIMARY = Color(0xFF586C91);
  static final SECONDARY = Color(0xFF70BDF2);
  static final TERTIARY = Color(0xFF40A2FF);
  static final SUCCESS = Color(0xFF26DA72);
  static final ERROR = Color(0xFFFF4747);
  static final WARNING = Color(0xFFFFCA00);
  static final INFO = Color(0xFF4075FF);
  static final BACKGROUND_GREY = Color(0xFF283347);
  static final GREYSCALE = GrayscaleColor(0xFF101828, {
    95: Color(0xFF1D2533),
    90: Color(0xFF272F3D),
    80: Color(0xFF3D4555),
    60: Color(0xFF797E8B),
    40: Color(0xFFB5B7C0),
    20: Color(0xFFD3D4DB),
    10: Color(0xFFE8E8EE),
    5: Color(0xFFF4F4F5),
    0: Color(0xFFFFFFFF),
  });
  static final TRANSPARENT = TransparentColor(0xFFFFFF, {
    100: Color(0xFFFFFF).withOpacity(0.9),
    75: Color(0xFFFFFF).withOpacity(0.6),
    50: Color(0xFFFFFF).withOpacity(0.4),
    25: Color(0xFFFFFF).withOpacity(0.25),
    10: Color(0xFFFFFF).withOpacity(0.1),
    5: Color(0xFFFFFF).withOpacity(0.06),
    3: Color(0xFFFFFF).withOpacity(0.03),
  });

  ThemeColors._();
}

class GrayscaleColor extends ColorSwatch {
  GrayscaleColor(int primary, Map<dynamic, Color> swatch) : super(primary, swatch);

  get black => this;

  get shade95 => this[95];

  get shade90 => this[90];

  get shade80 => this[80];

  get shade60 => this[60];

  get shade40 => this[40];

  get shade20 => this[20];

  get shade10 => this[10];

  get white => this[0];
}

class TransparentColor extends ColorSwatch {
  TransparentColor(int primary, Map<dynamic, Color> swatch) : super(primary, swatch);

  get full => this[100];

  get shade75 => this[75];

  get shade50 => this[50];

  get shade25 => this[25];

  get shade10 => this[10];

  get shade5 => this[5];

  get shade3 => this[3];
}

class TextStyles {
  static final MEGA = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 42,
    fontWeight: FontWeight.w700,
  );

  static final H1 = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 28,
    fontWeight: FontWeight.w700,
  );

  static final H2 = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 22,
    fontWeight: FontWeight.w700,
  );

  static final H3 = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 16,
    fontWeight: FontWeight.w700,
  );

  static final H4 = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 14,
    fontWeight: FontWeight.w700,
  );

  static final BODY_LARGE = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 16,
    fontWeight: FontWeight.w400,
  );

  static final BODY_MEDIUM = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 14,
    fontWeight: FontWeight.w400,
  );

  static final CAPTION = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 12,
    fontWeight: FontWeight.w400,
  );

  static final DESCRIPTION = _defaultDark.textTheme.headline1
      ?.copyWith(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w400, letterSpacing: 0.2);

  static final ACCENT_LARGE = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 24,
    fontWeight: FontWeight.w500,
  );

  static final ACCENT_MEDIUM = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 16,
    fontWeight: FontWeight.w500,
  );

  static final ACCENT_SMALL = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 14,
    fontWeight: FontWeight.w500,
  );

  static final ACCENT_EXTRA_SMALL = _defaultDark.textTheme.headline1?.copyWith(
    color: Colors.white,
    fontSize: 12,
    fontWeight: FontWeight.w500,
  );
}

class Spacings {
  static final SMALL = 4.0;
  static final MEDIUM = 8.0;
  static final LARGE = 16.0;
  static final EXTRA_LARGE = 24.0;
}

class Borders {
  static final CORNER_WEAK = 3.0;
  static final CORNER_MEDIUM = 8.0;
  static final CORNER_HARD = 12.0;
}

final WEAK_BORDER = BorderRadius.circular(Borders.CORNER_WEAK);
final MEDIUM_BORDER = BorderRadius.circular(Borders.CORNER_MEDIUM);
final STRONG_BORDER = BorderRadius.circular(Borders.CORNER_HARD);

// @formatter:off
final DARK_THEME = _defaultDark.copyWith(
    dividerTheme: _defaultDark.dividerTheme.copyWith(
        color: ThemeColors.GREYSCALE.shade40,
        thickness: 0.3
    ),
    floatingActionButtonTheme: _defaultDark.floatingActionButtonTheme.copyWith(
        backgroundColor: ThemeColors.TERTIARY,
        foregroundColor: ThemeColors.GREYSCALE.white
    ),
    dialogBackgroundColor: ThemeColors.GREYSCALE.shade80,
    dialogTheme: _defaultDark.dialogTheme.copyWith(
        elevation: 4,
        shape: RoundedRectangleBorder(borderRadius: STRONG_BORDER)
    ),
    dataTableTheme: _defaultDark.dataTableTheme.copyWith(
        headingRowColor: MaterialStateProperty.all(ThemeColors.TRANSPARENT.shade50),
        dataRowColor: MaterialStateProperty.all(ThemeColors.TRANSPARENT.shade10),
        dataTextStyle: TextStyles.BODY_MEDIUM?.copyWith(color: ThemeColors.GREYSCALE.shade20)),
    toggleableActiveColor: ThemeColors.PRIMARY,
    chipTheme: _defaultDark.chipTheme.copyWith(
        backgroundColor: ThemeColors.TRANSPARENT.shade25,
        selectedColor: ThemeColors.SECONDARY
    ),
    colorScheme: _defaultDark.colorScheme.copyWith(
        primary: ThemeColors.PRIMARY,
        secondary: ThemeColors.SECONDARY,
        background: ThemeColors.BACKGROUND_GREY,
        error: ThemeColors.ERROR
    ),
    cardColor: ThemeColors.GREYSCALE.shade95,
    cardTheme: _defaultDark.cardTheme.copyWith(
        elevation: 2,
        shape: RoundedRectangleBorder(borderRadius: STRONG_BORDER)
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(textStyle: TextStyles.ACCENT_MEDIUM, shape: RoundedRectangleBorder(borderRadius: MEDIUM_BORDER))
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
        style: ElevatedButton.styleFrom(textStyle: TextStyles.ACCENT_MEDIUM, shape: RoundedRectangleBorder(borderRadius: MEDIUM_BORDER))
    ),
    inputDecorationTheme: _defaultDark.inputDecorationTheme.copyWith(
        fillColor: ThemeColors.TRANSPARENT.shade5,
        filled: true,
        focusedBorder: OutlineInputBorder(borderRadius: MEDIUM_BORDER, borderSide: BorderSide(color: ThemeColors.TRANSPARENT.shade5)),
        enabledBorder: OutlineInputBorder(borderRadius: MEDIUM_BORDER, borderSide: BorderSide(color: ThemeColors.TRANSPARENT.shade5)),
        disabledBorder: OutlineInputBorder(borderRadius: MEDIUM_BORDER, borderSide: BorderSide(color: ThemeColors.TRANSPARENT.shade5))
    ),
    checkboxTheme: _defaultDark.checkboxTheme.copyWith(splashRadius: SPLASH_RADIUS, shape: RoundedRectangleBorder(borderRadius: WEAK_BORDER)),
    scaffoldBackgroundColor: ThemeColors.BACKGROUND_GREY,
    textTheme: _defaultDark.textTheme.copyWith(
        displayLarge: TextStyles.MEGA,
        displayMedium: TextStyles.H2,
        displaySmall: TextStyles.H3,
        headlineLarge: TextStyles.H1,
        headlineMedium: TextStyles.H2,
        headlineSmall: TextStyles.H3,
        bodyLarge: TextStyles.BODY_LARGE,
        bodyMedium: TextStyles.BODY_MEDIUM,
        bodySmall: TextStyles.CAPTION,
        labelLarge: TextStyles.ACCENT_LARGE,
        labelMedium: TextStyles.ACCENT_MEDIUM,
        labelSmall: TextStyles.ACCENT_SMALL)
        .apply(fontFamily: FONT_FAMILY)
);
// @formatter:on
