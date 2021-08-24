import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTextureProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTexture["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTexture["size"];
}
interface RuxIconTextureEvents {
}
interface RuxIconTextureSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTexture extends SvelteComponent {
    $$prop_def: RuxIconTextureProps;
    $$events_def: RuxIconTextureEvents;
    $$slot_def: RuxIconTextureSlots;
    $on<K extends keyof RuxIconTextureEvents>(type: K, callback: (e: RuxIconTextureEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTextureProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTextureElement | undefined;
}
export default RuxIconTexture;
