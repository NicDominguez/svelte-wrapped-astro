import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAlarmOnProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAlarmOn["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAlarmOn["size"];
}
interface RuxIconAlarmOnEvents {
}
interface RuxIconAlarmOnSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAlarmOn extends SvelteComponent {
    $$prop_def: RuxIconAlarmOnProps;
    $$events_def: RuxIconAlarmOnEvents;
    $$slot_def: RuxIconAlarmOnSlots;
    $on<K extends keyof RuxIconAlarmOnEvents>(type: K, callback: (e: RuxIconAlarmOnEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAlarmOnProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAlarmOnElement | undefined;
}
export default RuxIconAlarmOn;
