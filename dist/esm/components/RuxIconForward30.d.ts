import { Components } from '@astrouxds/astro-web-components';
interface RuxIconForward30Props {
    /** The fill color for the icon */
    color?: Components.RuxIconForward30["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconForward30["size"];
}
interface RuxIconForward30Events {
}
interface RuxIconForward30Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconForward30 extends SvelteComponent {
    $$prop_def: RuxIconForward30Props;
    $$events_def: RuxIconForward30Events;
    $$slot_def: RuxIconForward30Slots;
    $on<K extends keyof RuxIconForward30Events>(type: K, callback: (e: RuxIconForward30Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconForward30Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconForward30Element | undefined;
}
export default RuxIconForward30;
