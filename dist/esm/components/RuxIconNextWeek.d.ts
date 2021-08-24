import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNextWeekProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNextWeek["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNextWeek["size"];
}
interface RuxIconNextWeekEvents {
}
interface RuxIconNextWeekSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNextWeek extends SvelteComponent {
    $$prop_def: RuxIconNextWeekProps;
    $$events_def: RuxIconNextWeekEvents;
    $$slot_def: RuxIconNextWeekSlots;
    $on<K extends keyof RuxIconNextWeekEvents>(type: K, callback: (e: RuxIconNextWeekEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNextWeekProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNextWeekElement | undefined;
}
export default RuxIconNextWeek;
