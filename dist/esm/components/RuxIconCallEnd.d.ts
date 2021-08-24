import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCallEndProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCallEnd["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCallEnd["size"];
}
interface RuxIconCallEndEvents {
}
interface RuxIconCallEndSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCallEnd extends SvelteComponent {
    $$prop_def: RuxIconCallEndProps;
    $$events_def: RuxIconCallEndEvents;
    $$slot_def: RuxIconCallEndSlots;
    $on<K extends keyof RuxIconCallEndEvents>(type: K, callback: (e: RuxIconCallEndEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCallEndProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCallEndElement | undefined;
}
export default RuxIconCallEnd;
