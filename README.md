# icell_cars — React Native / Expo alkalmazás

Ez a tároló az icell_cars mobilalkalmazást tartalmazza, amely Expo, React Native és TypeScript használatával készült. A fájl-alapú routingot az Expo Router és az állapotkezelést a Redux Toolkit biztosítja; a hitelesítés Firebase-en keresztül történik.

Ez a README kibővíti a projekt jegyzeteit, és az eredeti tartalmat változtatás nélkül megtartja a végén található "Eredeti jegyzetek" blokkban.

## Gyors linkek

- Development builds: https://docs.expo.dev/develop/development-builds/introduction/
- Android emulátor: https://docs.expo.dev/workflow/android-studio-emulator/
- iOS szimulátor: https://docs.expo.dev/workflow/ios-simulator/

## Előfeltételek

- Node.js (ajánlott LTS verzió)
- Xcode (iOS szimulátorhoz, macOS)
- Android Studio (Android emulátorhoz)
- CocoaPods (iOS natív függőségekhez)

## Telepítés

1. Függőségek telepítése

```bash
npm install
```

2. Native build (ha szükséges a natív projektek előállítása / prebuild)

```bash
npm run build
```

3. Környezeti változók

Hozd létre a projekt gyökérkönyvtárában a `.env` fájlt, amely a szükséges kulcsokat tartalmazza (példa az eredeti jegyzeteknél). Az alkalmazás a Firebase és egyéb publikus API kulcsokat innen olvassa.

## Elérhető parancsok

A `package.json`-ban található hasznos parancsok:

```bash
npm run start        # expo start (Metro)
npm run dev:ios      # expo run:ios (build+run iOS szimulátoron/eszközön)
npm run dev:android  # expo run:android (build+run Android emulátoron/eszközön)
npm run web          # web mód
npm run lint         # lint futtatása (expo lint)
```

Ha furcsa runtime hibák vannak, érdemes törölni a Metro cache-t:

```bash
npx expo start -c
```

TypeScript ellenőrzés futtatása:

```bash
npx tsc --noEmit
```

## Az alkalmazás futtatása

- iOS (macOS + Xcode):

```bash
npm run dev:ios
```

- Android:

```bash
npm run dev:android
```

Vagy futtasd `npm start`-tal, majd nyisd meg az alkalmazást Expo Go-ban vagy a Dev Clientben a beállításaidnak megfelelően.

## Projektszerkezet (magas szint)

Fő mappák és felelősségek röviden:

```
app/         — Expo Router útvonalak és root layout (app/_layout.tsx)
components/  — Újrahasználható UI komponensek (Button, DynamicForm, Layout, stb.)
containers/  — Üzleti logikát megvalósító konténerek (store-hoz kapcsolódás, thunkok, navigation)
screens/     — Prezentációs képernyők (UI only, props-ok a konténerektől)
services/    — 3rd-party integrációk (firebase config, api kliens)
store/       — Redux szeletek, thunkok és szelektorok
hooks/       — Egyedi hookok (pl. típusos useAppDispatch/useAppSelector)
theme/       — Theme tokenek (Colors, Spacing, FontSize, Shadows)
types/       — Megosztott TypeScript típusok
```

Az architektúra célja az UI és a logika szétválasztása: a konténerek kezelik az állapotot és mellékhatásokat, a képernyők csak a megjelenítésért felelősek.

## Hitelesítés

- Firebase Auth van használatban a `firebase` SDK-val.
- A Redux Toolkit kezeli az auth állapotot aszinkron thunkokkal (`login`, `register`, `logout`) a `store/auth` alatt.
