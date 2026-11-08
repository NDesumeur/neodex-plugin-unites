# Unités (Units)

A unit converter: type a value, pick the source unit, and read the result in the unit you want and in every other unit of the category at once. 19 categories, from lengths to currencies.

*Version française : [README.md](README.md)*

## Usage

- Pick a **category** from the tabs at the top.
- Type a **value** (comma or point both work, spaces are ignored), then the **From** and **To** units: the result is shown in large type.
- **Swap** exchanges the two units.
- Below, the same value **in every unit** of the category; clicking a row makes it the target unit.
- Very large and very small numbers are written in scientific notation.

## Categories

- **Length**: from the nanometre to the light year, with inches, feet, miles and the astronomical unit.
- **Mass**, **Volume** (including spoons, cups and the oil barrel), **Area**, **Time** (up to the century).
- **Speed**: m/s, km/h, mph, knots, Mach, the speed of light.
- **Temperature**: Celsius, Fahrenheit, Kelvin, Rankine.
- **Pressure**, **Energy** (joules, calories, kWh, electronvolts, BTU…), **Power**, **Force**, **Angle**, **Frequency** (including revolutions per minute).
- **Data**: bytes in powers of 1000 (MB, GB, TB) and 1024 (MiB, GiB, TiB), and bits.
- **Internet speed**: from bit/s to Gbit/s, and in bytes per second.
- **Fuel consumption**: L/100 km, km/L, US and UK mpg (the inverse conversion is handled properly).
- **Cooking**: grams of flour, sugar, butter or rice, cups, spoons and millilitres.
- **Shoe size**: EU, US men's and women's, UK and foot length (approximate equivalents, they vary between brands).
- **Currencies**: 31 currencies, at the European Central Bank rates of the latest working day (the date is shown).

## Data and sync

Nothing is stored or synced. Exchange rates are requested from Frankfurter (api.frankfurter.dev, free and with no account) when the plugin opens.

## Install

In NeoDex: **NeoStore → Discover → Unités → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
