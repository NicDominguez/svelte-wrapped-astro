import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPermContactCalendarProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPermContactCalendar["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPermContactCalendar["size"];
}
interface RuxIconPermContactCalendarEvents {
}
interface RuxIconPermContactCalendarSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPermContactCalendar extends SvelteComponent {
    $$prop_def: RuxIconPermContactCalendarProps;
    $$events_def: RuxIconPermContactCalendarEvents;
    $$slot_def: RuxIconPermContactCalendarSlots;
    $on<K extends keyof RuxIconPermContactCalendarEvents>(type: K, callback: (e: RuxIconPermContactCalendarEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPermContactCalendarProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPermContactCalendarElement | undefined;
}
export default RuxIconPermContactCalendar;
