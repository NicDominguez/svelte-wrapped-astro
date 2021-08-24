import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReplay10Props {
    /** The fill color for the icon */
    color?: Components.RuxIconReplay10["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReplay10["size"];
}
interface RuxIconReplay10Events {
}
interface RuxIconReplay10Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReplay10 extends SvelteComponent {
    $$prop_def: RuxIconReplay10Props;
    $$events_def: RuxIconReplay10Events;
    $$slot_def: RuxIconReplay10Slots;
    $on<K extends keyof RuxIconReplay10Events>(type: K, callback: (e: RuxIconReplay10Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconReplay10Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReplay10Element | undefined;
}
export default RuxIconReplay10;
