import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTonalityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTonality["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTonality["size"];
}
interface RuxIconTonalityEvents {
}
interface RuxIconTonalitySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTonality extends SvelteComponent {
    $$prop_def: RuxIconTonalityProps;
    $$events_def: RuxIconTonalityEvents;
    $$slot_def: RuxIconTonalitySlots;
    $on<K extends keyof RuxIconTonalityEvents>(type: K, callback: (e: RuxIconTonalityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTonalityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTonalityElement | undefined;
}
export default RuxIconTonality;
