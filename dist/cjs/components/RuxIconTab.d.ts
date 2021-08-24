import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTabProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTab["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTab["size"];
}
interface RuxIconTabEvents {
}
interface RuxIconTabSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTab extends SvelteComponent {
    $$prop_def: RuxIconTabProps;
    $$events_def: RuxIconTabEvents;
    $$slot_def: RuxIconTabSlots;
    $on<K extends keyof RuxIconTabEvents>(type: K, callback: (e: RuxIconTabEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTabProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTabElement | undefined;
}
export default RuxIconTab;
