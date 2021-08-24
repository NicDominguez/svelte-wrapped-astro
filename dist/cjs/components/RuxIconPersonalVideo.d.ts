import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPersonalVideoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPersonalVideo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPersonalVideo["size"];
}
interface RuxIconPersonalVideoEvents {
}
interface RuxIconPersonalVideoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPersonalVideo extends SvelteComponent {
    $$prop_def: RuxIconPersonalVideoProps;
    $$events_def: RuxIconPersonalVideoEvents;
    $$slot_def: RuxIconPersonalVideoSlots;
    $on<K extends keyof RuxIconPersonalVideoEvents>(type: K, callback: (e: RuxIconPersonalVideoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPersonalVideoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPersonalVideoElement | undefined;
}
export default RuxIconPersonalVideo;
