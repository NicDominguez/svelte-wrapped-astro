import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCasinoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCasino["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCasino["size"];
}
interface RuxIconCasinoEvents {
}
interface RuxIconCasinoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCasino extends SvelteComponent {
    $$prop_def: RuxIconCasinoProps;
    $$events_def: RuxIconCasinoEvents;
    $$slot_def: RuxIconCasinoSlots;
    $on<K extends keyof RuxIconCasinoEvents>(type: K, callback: (e: RuxIconCasinoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCasinoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCasinoElement | undefined;
}
export default RuxIconCasino;
