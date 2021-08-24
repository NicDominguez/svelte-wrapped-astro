import { Components } from '@astrouxds/astro-web-components';
interface RuxDatetimeProps {
    /** The date time to be formatted */
    date?: Components.RuxDatetime["date"];
    /** The locale */
    locale?: Components.RuxDatetime["locale"];
    /** Format options for year */
    year?: Components.RuxDatetime["year"];
    /** Format options for month */
    month?: Components.RuxDatetime["month"];
    /** Format options for day */
    day?: Components.RuxDatetime["day"];
    /** Format options for hour */
    hour?: Components.RuxDatetime["hour"];
    /** Format options for minute */
    minute?: Components.RuxDatetime["minute"];
    /** Format options for second */
    second?: Components.RuxDatetime["second"];
    /** Format options for Timezone name */
    timeZoneName?: Components.RuxDatetime["timeZoneName"];
    /** Format options for Timezone */
    timeZone?: Components.RuxDatetime["timeZone"];
    /** Display date in 12 hour time. */
    hour12?: Components.RuxDatetime["hour12"];
}
interface RuxDatetimeEvents {
}
interface RuxDatetimeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxDatetime extends SvelteComponent {
    $$prop_def: RuxDatetimeProps;
    $$events_def: RuxDatetimeEvents;
    $$slot_def: RuxDatetimeSlots;
    $on<K extends keyof RuxDatetimeEvents>(type: K, callback: (e: RuxDatetimeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxDatetimeProps>): void;
    constructor(options: any);
    get date(): any;
    set date(date: any);
    get locale(): any;
    set locale(locale: any);
    get year(): any;
    set year(year: any);
    get month(): any;
    set month(month: any);
    get day(): any;
    set day(day: any);
    get hour(): any;
    set hour(hour: any);
    get minute(): any;
    set minute(minute: any);
    get second(): any;
    set second(second: any);
    get timeZoneName(): any;
    set timeZoneName(timeZoneName: any);
    get timeZone(): any;
    set timeZone(timeZone: any);
    get hour12(): any;
    set hour12(hour12: any);
    get getWebComponent(): HTMLRuxDatetimeElement | undefined;
}
export default RuxDatetime;
