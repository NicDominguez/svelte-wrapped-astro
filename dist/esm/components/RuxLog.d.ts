import { Components } from '@astrouxds/astro-web-components';
interface RuxLogProps {
    /** An array of objects to display as log */
    data?: Components.RuxLog["data"];
    /** Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as `America/Los_Angeles`. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details. */
    timezone?: Components.RuxLog["timezone"];
    /** A string to filter the array to return only the children whose `message` property contains a case-insensitive substring match. */
    filter?: Components.RuxLog["filter"];
}
interface RuxLogEvents {
}
interface RuxLogSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxLog extends SvelteComponent {
    $$prop_def: RuxLogProps;
    $$events_def: RuxLogEvents;
    $$slot_def: RuxLogSlots;
    $on<K extends keyof RuxLogEvents>(type: K, callback: (e: RuxLogEvents[K]) => any): () => void;
    $set($$props: Partial<RuxLogProps>): void;
    constructor(options: any);
    get data(): any;
    set data(data: any);
    get timezone(): any;
    set timezone(timezone: any);
    get filter(): any;
    set filter(filter: any);
    get getWebComponent(): HTMLRuxLogElement | undefined;
}
export default RuxLog;
