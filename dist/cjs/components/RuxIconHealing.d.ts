import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHealingProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHealing["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHealing["size"];
}
interface RuxIconHealingEvents {
}
interface RuxIconHealingSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHealing extends SvelteComponent {
    $$prop_def: RuxIconHealingProps;
    $$events_def: RuxIconHealingEvents;
    $$slot_def: RuxIconHealingSlots;
    $on<K extends keyof RuxIconHealingEvents>(type: K, callback: (e: RuxIconHealingEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHealingProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHealingElement | undefined;
}
export default RuxIconHealing;
