import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewStreamProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewStream["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewStream["size"];
}
interface RuxIconViewStreamEvents {
}
interface RuxIconViewStreamSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewStream extends SvelteComponent {
    $$prop_def: RuxIconViewStreamProps;
    $$events_def: RuxIconViewStreamEvents;
    $$slot_def: RuxIconViewStreamSlots;
    $on<K extends keyof RuxIconViewStreamEvents>(type: K, callback: (e: RuxIconViewStreamEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewStreamProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewStreamElement | undefined;
}
export default RuxIconViewStream;
