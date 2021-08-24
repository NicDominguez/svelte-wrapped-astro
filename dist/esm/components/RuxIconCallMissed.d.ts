import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallMissedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCallMissed["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCallMissed["size"];
}
interface RuxIconCallMissedEvents {
}
interface RuxIconCallMissedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCallMissed extends SvelteComponent {
    $$prop_def: RuxIconCallMissedProps;
    $$events_def: RuxIconCallMissedEvents;
    $$slot_def: RuxIconCallMissedSlots;
    $on<K extends keyof RuxIconCallMissedEvents>(type: K, callback: (e: RuxIconCallMissedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallMissedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallMissedElement | undefined;
}
export default RuxIconCallMissed;
