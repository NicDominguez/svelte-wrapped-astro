import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocationDisabledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocationDisabled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocationDisabled["size"];
}
interface RuxIconLocationDisabledEvents {
}
interface RuxIconLocationDisabledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocationDisabled extends SvelteComponent {
    $$prop_def: RuxIconLocationDisabledProps;
    $$events_def: RuxIconLocationDisabledEvents;
    $$slot_def: RuxIconLocationDisabledSlots;
    $on<K extends keyof RuxIconLocationDisabledEvents>(type: K, callback: (e: RuxIconLocationDisabledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocationDisabledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocationDisabledElement | undefined;
}
export default RuxIconLocationDisabled;
