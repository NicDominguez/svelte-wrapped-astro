import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCalendarViewDayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCalendarViewDay["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCalendarViewDay["size"];
}
interface RuxIconCalendarViewDayEvents {
}
interface RuxIconCalendarViewDaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCalendarViewDay extends SvelteComponent {
    $$prop_def: RuxIconCalendarViewDayProps;
    $$events_def: RuxIconCalendarViewDayEvents;
    $$slot_def: RuxIconCalendarViewDaySlots;
    $on<K extends keyof RuxIconCalendarViewDayEvents>(type: K, callback: (e: RuxIconCalendarViewDayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCalendarViewDayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCalendarViewDayElement | undefined;
}
export default RuxIconCalendarViewDay;
