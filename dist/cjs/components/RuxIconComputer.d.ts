import { Components } from '@astrouxds/astro-web-components';
interface RuxIconComputerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconComputer["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconComputer["size"];
}
interface RuxIconComputerEvents {
}
interface RuxIconComputerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconComputer extends SvelteComponent {
    $$prop_def: RuxIconComputerProps;
    $$events_def: RuxIconComputerEvents;
    $$slot_def: RuxIconComputerSlots;
    $on<K extends keyof RuxIconComputerEvents>(type: K, callback: (e: RuxIconComputerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconComputerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconComputerElement | undefined;
}
export default RuxIconComputer;
