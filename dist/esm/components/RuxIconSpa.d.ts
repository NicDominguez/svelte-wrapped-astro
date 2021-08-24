import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSpaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSpa["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSpa["size"];
}
interface RuxIconSpaEvents {
}
interface RuxIconSpaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSpa extends SvelteComponent {
    $$prop_def: RuxIconSpaProps;
    $$events_def: RuxIconSpaEvents;
    $$slot_def: RuxIconSpaSlots;
    $on<K extends keyof RuxIconSpaEvents>(type: K, callback: (e: RuxIconSpaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSpaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSpaElement | undefined;
}
export default RuxIconSpa;
