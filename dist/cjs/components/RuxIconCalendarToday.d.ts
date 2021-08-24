import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCalendarTodayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCalendarToday["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCalendarToday["size"];
}
interface RuxIconCalendarTodayEvents {
}
interface RuxIconCalendarTodaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCalendarToday extends SvelteComponent {
    $$prop_def: RuxIconCalendarTodayProps;
    $$events_def: RuxIconCalendarTodayEvents;
    $$slot_def: RuxIconCalendarTodaySlots;
    $on<K extends keyof RuxIconCalendarTodayEvents>(type: K, callback: (e: RuxIconCalendarTodayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCalendarTodayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCalendarTodayElement | undefined;
}
export default RuxIconCalendarToday;
