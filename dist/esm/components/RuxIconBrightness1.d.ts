import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightness1Props {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightness1["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightness1["size"];
}
interface RuxIconBrightness1Events {
}
interface RuxIconBrightness1Slots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightness1 extends SvelteComponent {
    $$prop_def: RuxIconBrightness1Props;
    $$events_def: RuxIconBrightness1Events;
    $$slot_def: RuxIconBrightness1Slots;
    $on<K extends keyof RuxIconBrightness1Events>(type: K, callback: (e: RuxIconBrightness1Events[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightness1Props>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightness1Element | undefined;
}
export default RuxIconBrightness1;
