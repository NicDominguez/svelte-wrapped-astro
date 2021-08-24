import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDeleteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDelete["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDelete["size"];
}
interface RuxIconDeleteEvents {
}
interface RuxIconDeleteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDelete extends SvelteComponent {
    $$prop_def: RuxIconDeleteProps;
    $$events_def: RuxIconDeleteEvents;
    $$slot_def: RuxIconDeleteSlots;
    $on<K extends keyof RuxIconDeleteEvents>(type: K, callback: (e: RuxIconDeleteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDeleteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDeleteElement | undefined;
}
export default RuxIconDelete;
