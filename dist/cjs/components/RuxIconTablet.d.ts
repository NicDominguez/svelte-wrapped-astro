import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTabletProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTablet["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTablet["size"];
}
interface RuxIconTabletEvents {
}
interface RuxIconTabletSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTablet extends SvelteComponent {
    $$prop_def: RuxIconTabletProps;
    $$events_def: RuxIconTabletEvents;
    $$slot_def: RuxIconTabletSlots;
    $on<K extends keyof RuxIconTabletEvents>(type: K, callback: (e: RuxIconTabletEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTabletProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTabletElement | undefined;
}
export default RuxIconTablet;
