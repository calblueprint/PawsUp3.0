# Halloween feature

Normal UI work belongs in `src/components/Secret`, `src/components/ReadPaw`, and `src/components/ReadPawsList`. These components own login, paw content, icons, fetching, and navigation.

The only seasonal selection is in `Secret.js`: after login, the flag selects `HalloweenReadPaws` instead of the normal reader. Other routes keep their normal presentation.

- `featureFlag.js`: explicit opt-in environment flag (disabled by default). `src/config/features.js` re-exports it for existing imports.
- `HalloweenReadPaws.js`: assembles the seasonal scene and tracks the current paw through the reader's `onPawChange` callback.
- `HalloweenDecorations.js` / `HalloweenScene.module.css`: background, bats, spiders, fog, and flying Ethan/Kevin images. Flying characters start at paw 6 with one each, doubling at 13, 20, etc., up to 8 each (reached at paw 27). Navigation backward decreases the count. List mode retains the current presentation index.
- `HalloweenReader.module.css`: seasonal reader colors and layout overrides, composed from the original reader styles. The normal stylesheets remain unchanged.
- `HalloweenPaw.js` / `HalloweenPaw.module.css`: display-only value aliases, Justin's portrait, layout, and animations. Original paw values and icons remain unchanged.
- Images: `src/assets/halloween/`.

`ReadPawsList` accepts an optional `PawComponent` (default: normal `ReadPaw`). `ReadPaw` offers optional `valueLabel`, `extraContent`, and `classNames` presentation slots so seasonal code reuses the same content renderer. Seasonal CSS composes the original reader classes and adds only its own overrides. Shared components keep their original styles and default value behavior; presentation props are optional.

The login screen stays normal. All animations respect reduced motion. Configure `REACT_APP_SECRET_HALLOWEEN_THEME` to `true` to enable it, or `false` to disable it (unset and all other values are also disabled); environment changes require restarting development or rebuilding production.
