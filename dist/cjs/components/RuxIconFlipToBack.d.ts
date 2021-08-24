import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFlipToBackProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFlipToBack["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFlipToBack["size"];
}
interface RuxIconFlipToBackEvents {
}
interface RuxIconFlipToBackSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFlipToBack extends SvelteComponent {
    $$prop_def: RuxIconFlipToBackProps;
    $$events_def: RuxIconFlipToBackEvents;
    $$slot_def: RuxIconFlipToBackSlots;
    $on<K extends keyof RuxIconFlipToBackEvents>(type: K, callback: (e: RuxIconFlipToBackEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFlipToBackProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFlipToBackElement | undefined;
}
export default RuxIconFlipToBack;
