import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLooks6Props {
    /** The fill color for the icon */
    color?: Components.RuxIconLooks6["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLooks6["size"];
}
interface RuxIconLooks6Events {
}
interface RuxIconLooks6Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLooks6 extends SvelteComponent {
    $$prop_def: RuxIconLooks6Props;
    $$events_def: RuxIconLooks6Events;
    $$slot_def: RuxIconLooks6Slots;
    $on<K extends keyof RuxIconLooks6Events>(type: K, callback: (e: RuxIconLooks6Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconLooks6Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLooks6Element | undefined;
}
export default RuxIconLooks6;
