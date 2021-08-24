import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWbAutoProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWbAuto["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWbAuto["size"];
}
interface RuxIconWbAutoEvents {
}
interface RuxIconWbAutoSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWbAuto extends SvelteComponent {
    $$prop_def: RuxIconWbAutoProps;
    $$events_def: RuxIconWbAutoEvents;
    $$slot_def: RuxIconWbAutoSlots;
    $on<K extends keyof RuxIconWbAutoEvents>(type: K, callback: (e: RuxIconWbAutoEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWbAutoProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWbAutoElement | undefined;
}
export default RuxIconWbAuto;
