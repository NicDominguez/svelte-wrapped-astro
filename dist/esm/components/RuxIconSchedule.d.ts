import { Components } from '@astrouxds/astro-web-components';
interface RuxIconScheduleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSchedule["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSchedule["size"];
}
interface RuxIconScheduleEvents {
}
interface RuxIconScheduleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSchedule extends SvelteComponent {
    $$prop_def: RuxIconScheduleProps;
    $$events_def: RuxIconScheduleEvents;
    $$slot_def: RuxIconScheduleSlots;
    $on<K extends keyof RuxIconScheduleEvents>(type: K, callback: (e: RuxIconScheduleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconScheduleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconScheduleElement | undefined;
}
export default RuxIconSchedule;
