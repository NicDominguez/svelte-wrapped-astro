import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReplay30Props {
    /** The fill color for the icon */
    color?: Components.RuxIconReplay30["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReplay30["size"];
}
interface RuxIconReplay30Events {
}
interface RuxIconReplay30Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReplay30 extends SvelteComponent {
    $$prop_def: RuxIconReplay30Props;
    $$events_def: RuxIconReplay30Events;
    $$slot_def: RuxIconReplay30Slots;
    $on<K extends keyof RuxIconReplay30Events>(type: K, callback: (e: RuxIconReplay30Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconReplay30Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReplay30Element | undefined;
}
export default RuxIconReplay30;
