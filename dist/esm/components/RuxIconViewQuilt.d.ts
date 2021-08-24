import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewQuiltProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewQuilt["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewQuilt["size"];
}
interface RuxIconViewQuiltEvents {
}
interface RuxIconViewQuiltSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewQuilt extends SvelteComponent {
    $$prop_def: RuxIconViewQuiltProps;
    $$events_def: RuxIconViewQuiltEvents;
    $$slot_def: RuxIconViewQuiltSlots;
    $on<K extends keyof RuxIconViewQuiltEvents>(type: K, callback: (e: RuxIconViewQuiltEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewQuiltProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewQuiltElement | undefined;
}
export default RuxIconViewQuilt;
