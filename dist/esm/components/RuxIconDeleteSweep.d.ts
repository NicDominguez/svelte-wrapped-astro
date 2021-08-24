import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDeleteSweepProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDeleteSweep["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDeleteSweep["size"];
}
interface RuxIconDeleteSweepEvents {
}
interface RuxIconDeleteSweepSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDeleteSweep extends SvelteComponent {
    $$prop_def: RuxIconDeleteSweepProps;
    $$events_def: RuxIconDeleteSweepEvents;
    $$slot_def: RuxIconDeleteSweepSlots;
    $on<K extends keyof RuxIconDeleteSweepEvents>(type: K, callback: (e: RuxIconDeleteSweepEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDeleteSweepProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDeleteSweepElement | undefined;
}
export default RuxIconDeleteSweep;
