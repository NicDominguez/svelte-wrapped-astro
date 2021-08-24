import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewComfyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewComfy["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewComfy["size"];
}
interface RuxIconViewComfyEvents {
}
interface RuxIconViewComfySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewComfy extends SvelteComponent {
    $$prop_def: RuxIconViewComfyProps;
    $$events_def: RuxIconViewComfyEvents;
    $$slot_def: RuxIconViewComfySlots;
    $on<K extends keyof RuxIconViewComfyEvents>(type: K, callback: (e: RuxIconViewComfyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewComfyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewComfyElement | undefined;
}
export default RuxIconViewComfy;
