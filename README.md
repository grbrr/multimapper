# multimapper

Electron app which is able to open google maps and mapy.cz simoultanously and have them synced.

## Installation

```bash
npm install
```

## Usage

Create a file named `config.json` in the src directory of the project with the following content:

```json
{
    "GOOGLE_API_KEY": "YOUR_GOOGLE_API_KEY",
    "MAPYCZ_API_KEY": "YOUR_MAPYCZ_API_KEY"
}
```

Then run the app with:

```bash
npm start
```
