import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDuoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDuo["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDuo["size"];
}
interface RuxIconDuoEvents {
}
interface RuxIconDuoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDuo extends SvelteComponent {
    $$prop_def: RuxIconDuoProps;
    $$events_def: RuxIconDuoEvents;
    $$slot_def: RuxIconDuoSlots;
    $on<K extends keyof RuxIconDuoEvents>(type: K, callback: (e: RuxIconDuoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDuoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDuoElement | undefined;
}
export default RuxIconDuo;
