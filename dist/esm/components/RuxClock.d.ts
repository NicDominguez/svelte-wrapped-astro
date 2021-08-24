import { Components } from '@astrouxds/astro-web-components';
interface RuxClockProps {
    /** When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock. */
    aos?: Components.RuxClock["aos"];
    /** When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax), displays a timestamp labeled "LOS" next to the standard clock. */
    los?: Components.RuxClock["los"];
    /** Accepts the [IANA timezone string format](https://www.iana.org/time-zones) such as `'America/Los_Angeles'` or any single-character designation for a [military timezones](https://en.wikipedia.org/wiki/List_of_military_time_zones) (`'A'` through `'Z'`, excluding `'J'`), both case-insensitive. If no value for timezone is provided, the clock will use `'UTC'`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details. */
    timezone?: Components.RuxClock["timezone"];
    /** Hides the timezone in the main 24-hour clock. Timezone does not display on AOS/LOS. */
    hideTimezone?: Components.RuxClock["hideTimezone"];
    /** Hides the day of the year. */
    hideDate?: Components.RuxClock["hideDate"];
    /** Applies a smaller clock style. */
    small?: Components.RuxClock["small"];
}
interface RuxClockEvents {
}
interface RuxClockSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxClock extends SvelteComponent {
    $$prop_def: RuxClockProps;
    $$events_def: RuxClockEvents;
    $$slot_def: RuxClockSlots;
    $on<K extends keyof RuxClockEvents>(type: K, callback: (e: RuxClockEvents[K]) => any): () => void;
    $set($$props: Partial<RuxClockProps>): void;
    constructor(options: any);
    get aos(): any;
    set aos(aos: any);
    get los(): any;
    set los(los: any);
    get timezone(): any;
    set timezone(timezone: any);
    get hideTimezone(): any;
    set hideTimezone(hideTimezone: any);
    get hideDate(): any;
    set hideDate(hideDate: any);
    get small(): any;
    set small(small: any);
    get getWebComponent(): HTMLRuxClockElement | undefined;
}
export default RuxClock;
