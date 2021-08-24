import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewWeekProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewWeek["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewWeek["size"];
}
interface RuxIconViewWeekEvents {
}
interface RuxIconViewWeekSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewWeek extends SvelteComponent {
    $$prop_def: RuxIconViewWeekProps;
    $$events_def: RuxIconViewWeekEvents;
    $$slot_def: RuxIconViewWeekSlots;
    $on<K extends keyof RuxIconViewWeekEvents>(type: K, callback: (e: RuxIconViewWeekEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewWeekProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewWeekElement | undefined;
}
export default RuxIconViewWeek;
