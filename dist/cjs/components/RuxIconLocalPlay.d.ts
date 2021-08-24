import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalPlayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalPlay["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalPlay["size"];
}
interface RuxIconLocalPlayEvents {
}
interface RuxIconLocalPlaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalPlay extends SvelteComponent {
    $$prop_def: RuxIconLocalPlayProps;
    $$events_def: RuxIconLocalPlayEvents;
    $$slot_def: RuxIconLocalPlaySlots;
    $on<K extends keyof RuxIconLocalPlayEvents>(type: K, callback: (e: RuxIconLocalPlayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalPlayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalPlayElement | undefined;
}
export default RuxIconLocalPlay;
