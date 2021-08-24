import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGavelProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGavel["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGavel["size"];
}
interface RuxIconGavelEvents {
}
interface RuxIconGavelSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGavel extends SvelteComponent {
    $$prop_def: RuxIconGavelProps;
    $$events_def: RuxIconGavelEvents;
    $$slot_def: RuxIconGavelSlots;
    $on<K extends keyof RuxIconGavelEvents>(type: K, callback: (e: RuxIconGavelEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGavelProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGavelElement | undefined;
}
export default RuxIconGavel;
