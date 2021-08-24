import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAlarmAddProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAlarmAdd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAlarmAdd["size"];
}
interface RuxIconAlarmAddEvents {
}
interface RuxIconAlarmAddSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAlarmAdd extends SvelteComponent {
    $$prop_def: RuxIconAlarmAddProps;
    $$events_def: RuxIconAlarmAddEvents;
    $$slot_def: RuxIconAlarmAddSlots;
    $on<K extends keyof RuxIconAlarmAddEvents>(type: K, callback: (e: RuxIconAlarmAddEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAlarmAddProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAlarmAddElement | undefined;
}
export default RuxIconAlarmAdd;
