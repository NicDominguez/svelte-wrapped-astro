import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterFramesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterFrames["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterFrames["size"];
}
interface RuxIconFilterFramesEvents {
}
interface RuxIconFilterFramesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterFrames extends SvelteComponent {
    $$prop_def: RuxIconFilterFramesProps;
    $$events_def: RuxIconFilterFramesEvents;
    $$slot_def: RuxIconFilterFramesSlots;
    $on<K extends keyof RuxIconFilterFramesEvents>(type: K, callback: (e: RuxIconFilterFramesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterFramesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterFramesElement | undefined;
}
export default RuxIconFilterFrames;
