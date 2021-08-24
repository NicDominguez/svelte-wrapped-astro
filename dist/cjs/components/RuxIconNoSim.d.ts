import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNoSimProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNoSim["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNoSim["size"];
}
interface RuxIconNoSimEvents {
}
interface RuxIconNoSimSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNoSim extends SvelteComponent {
    $$prop_def: RuxIconNoSimProps;
    $$events_def: RuxIconNoSimEvents;
    $$slot_def: RuxIconNoSimSlots;
    $on<K extends keyof RuxIconNoSimEvents>(type: K, callback: (e: RuxIconNoSimEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNoSimProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNoSimElement | undefined;
}
export default RuxIconNoSim;
