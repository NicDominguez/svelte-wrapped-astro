import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLooks2Props {
    /** The fill color for the icon */
    color?: Components.RuxIconLooks2["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLooks2["size"];
}
interface RuxIconLooks2Events {
}
interface RuxIconLooks2Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLooks2 extends SvelteComponent {
    $$prop_def: RuxIconLooks2Props;
    $$events_def: RuxIconLooks2Events;
    $$slot_def: RuxIconLooks2Slots;
    $on<K extends keyof RuxIconLooks2Events>(type: K, callback: (e: RuxIconLooks2Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconLooks2Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLooks2Element | undefined;
}
export default RuxIconLooks2;
