import { Components } from '@astrouxds/astro-web-components';
interface RuxIconOpenInNewProps {
    /** The fill color for the icon */
    color?: Components.RuxIconOpenInNew["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconOpenInNew["size"];
}
interface RuxIconOpenInNewEvents {
}
interface RuxIconOpenInNewSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconOpenInNew extends SvelteComponent {
    $$prop_def: RuxIconOpenInNewProps;
    $$events_def: RuxIconOpenInNewEvents;
    $$slot_def: RuxIconOpenInNewSlots;
    $on<K extends keyof RuxIconOpenInNewEvents>(type: K, callback: (e: RuxIconOpenInNewEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconOpenInNewProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconOpenInNewElement | undefined;
}
export default RuxIconOpenInNew;
