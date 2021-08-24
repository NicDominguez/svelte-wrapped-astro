import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEventBusyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEventBusy["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEventBusy["size"];
}
interface RuxIconEventBusyEvents {
}
interface RuxIconEventBusySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEventBusy extends SvelteComponent {
    $$prop_def: RuxIconEventBusyProps;
    $$events_def: RuxIconEventBusyEvents;
    $$slot_def: RuxIconEventBusySlots;
    $on<K extends keyof RuxIconEventBusyEvents>(type: K, callback: (e: RuxIconEventBusyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEventBusyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEventBusyElement | undefined;
}
export default RuxIconEventBusy;
