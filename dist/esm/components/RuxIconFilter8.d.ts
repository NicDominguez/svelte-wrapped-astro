import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilter8Props {
    /** The fill color for the icon */
    color?: Components.RuxIconFilter8["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilter8["size"];
}
interface RuxIconFilter8Events {
}
interface RuxIconFilter8Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilter8 extends SvelteComponent {
    $$prop_def: RuxIconFilter8Props;
    $$events_def: RuxIconFilter8Events;
    $$slot_def: RuxIconFilter8Slots;
    $on<K extends keyof RuxIconFilter8Events>(type: K, callback: (e: RuxIconFilter8Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilter8Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilter8Element | undefined;
}
export default RuxIconFilter8;
