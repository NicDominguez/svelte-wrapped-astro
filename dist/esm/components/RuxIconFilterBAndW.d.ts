import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFilterBAndWProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFilterBAndW["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFilterBAndW["size"];
}
interface RuxIconFilterBAndWEvents {
}
interface RuxIconFilterBAndWSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFilterBAndW extends SvelteComponent {
    $$prop_def: RuxIconFilterBAndWProps;
    $$events_def: RuxIconFilterBAndWEvents;
    $$slot_def: RuxIconFilterBAndWSlots;
    $on<K extends keyof RuxIconFilterBAndWEvents>(type: K, callback: (e: RuxIconFilterBAndWEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFilterBAndWProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFilterBAndWElement | undefined;
}
export default RuxIconFilterBAndW;
