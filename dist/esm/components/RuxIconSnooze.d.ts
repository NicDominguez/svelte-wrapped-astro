import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSnoozeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSnooze["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSnooze["size"];
}
interface RuxIconSnoozeEvents {
}
interface RuxIconSnoozeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSnooze extends SvelteComponent {
    $$prop_def: RuxIconSnoozeProps;
    $$events_def: RuxIconSnoozeEvents;
    $$slot_def: RuxIconSnoozeSlots;
    $on<K extends keyof RuxIconSnoozeEvents>(type: K, callback: (e: RuxIconSnoozeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSnoozeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSnoozeElement | undefined;
}
export default RuxIconSnooze;
